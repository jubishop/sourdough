'use client';

import { useSyncExternalStore } from 'react';

import type { RecipeMethod, RecipeVersion } from '@/lib/recipes/types';

// Remember a recipe choice on this device, so a bake in progress reopens on
// the path and recipe being followed. The first value is the default.
function storedChoice<T extends string>(storageKey: string, values: readonly [T, ...T[]]) {
  const changeEvent = `${storageKey}-change`;
  const initial = values[0];
  let fallback: T = initial;
  let memoryOnly = false;

  const parse = (value: string | null): T => values.find((choice) => choice === value) ?? initial;

  function getSnapshot(): T {
    if (memoryOnly) return fallback;
    try {
      return parse(window.localStorage.getItem(storageKey));
    } catch {
      return fallback;
    }
  }

  const getServerSnapshot = (): T => initial;

  function subscribe(onChange: () => void) {
    window.addEventListener('storage', onChange);
    window.addEventListener(changeEvent, onChange);
    return () => {
      window.removeEventListener('storage', onChange);
      window.removeEventListener(changeEvent, onChange);
    };
  }

  function setChoice(next: T) {
    fallback = next;
    try {
      window.localStorage.setItem(storageKey, next);
    } catch {
      // Keep the switch usable for this page when browser storage is unavailable.
      memoryOnly = true;
    }
    window.dispatchEvent(new Event(changeEvent));
  }

  return function useChoice() {
    const choice = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    return [choice, setChoice] as const;
  };
}

export const useRecipeVersion = storedChoice<RecipeVersion>('sourdough-recipe-version', ['baseline', 'experiment']);
export const useRecipeMethod = storedChoice<RecipeMethod>('sourdough-recipe-method', ['dutch-oven', 'loaf-pan']);
