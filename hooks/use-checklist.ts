'use client';

import { useMemo, useSyncExternalStore } from 'react';

const storageKey = 'sourdough-checklist';
const changeEvent = 'sourdough-checklist-change';
let fallback = '[]';
let memoryOnly = false;

function getSnapshot() {
  if (memoryOnly) return fallback;
  try {
    return window.localStorage.getItem(storageKey)
      ?? window.localStorage.getItem('first-loaf-checklist')
      ?? fallback;
  } catch {
    return fallback;
  }
}

function getServerSnapshot() {
  return '[]';
}

function parseChecklist(value: string): string[] {
  try {
    const parsed: unknown = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : [];
  } catch {
    return [];
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener('storage', onChange);
  window.addEventListener(changeEvent, onChange);
  return () => {
    window.removeEventListener('storage', onChange);
    window.removeEventListener(changeEvent, onChange);
  };
}

export function useChecklist() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const completed = useMemo(() => parseChecklist(snapshot), [snapshot]);

  function setCompleted(update: string[] | ((current: string[]) => string[])) {
    const next = typeof update === 'function' ? update(parseChecklist(getSnapshot())) : update;
    fallback = JSON.stringify(next);
    try {
      window.localStorage.setItem(storageKey, fallback);
    } catch {
      // Keep the checklist usable for this page when browser storage is unavailable.
      memoryOnly = true;
    }
    window.dispatchEvent(new Event(changeEvent));
  }

  return [completed, setCompleted] as const;
}
