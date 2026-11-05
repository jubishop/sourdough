'use client';

import { useSyncExternalStore } from 'react';

import type { RecipeVersion } from '@/lib/recipes/types';

// Remember which recipe this device last showed, so a bake in progress reopens
// on the recipe being followed.
const storageKey = 'sourdough-recipe-version';
const changeEvent = 'sourdough-recipe-version-change';
let fallback: RecipeVersion = 'baseline';
let memoryOnly = false;

const parse = (value: string | null): RecipeVersion => (value === 'experiment' ? 'experiment' : 'baseline');

function getSnapshot(): RecipeVersion {
  if (memoryOnly) return fallback;
  try {
    return parse(window.localStorage.getItem(storageKey));
  } catch {
    return fallback;
  }
}

function getServerSnapshot(): RecipeVersion {
  return 'baseline';
}

function subscribe(onChange: () => void) {
  window.addEventListener('storage', onChange);
  window.addEventListener(changeEvent, onChange);
  return () => {
    window.removeEventListener('storage', onChange);
    window.removeEventListener(changeEvent, onChange);
  };
}

export function useRecipeVersion() {
  const version = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function setVersion(next: RecipeVersion) {
    fallback = next;
    try {
      window.localStorage.setItem(storageKey, next);
    } catch {
      // Keep the switch usable for this page when browser storage is unavailable.
      memoryOnly = true;
    }
    window.dispatchEvent(new Event(changeEvent));
  }

  return [version, setVersion] as const;
}
