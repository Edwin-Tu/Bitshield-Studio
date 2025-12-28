// src/features/profile/storage.ts
import type { ProfileForm } from "./types";

export function makeProfileStorageKey(email?: string): string {
  const v = email?.trim();
  return v ? `bitshield:profile:${v}` : "";
}

export function safeParseProfile(json: string | null): ProfileForm | null {
  if (!json) return null;
  try {
    const parsed = JSON.parse(json) as ProfileForm;
    if (!parsed || typeof parsed !== "object") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function loadProfile(storageKey: string): ProfileForm | null {
  if (!storageKey) return null;
  try {
    return safeParseProfile(localStorage.getItem(storageKey));
  } catch {
    return null;
  }
}

export function saveProfile(storageKey: string, data: ProfileForm): void {
  if (!storageKey) return;
  try {
    localStorage.setItem(storageKey, JSON.stringify(data));
  } catch {
    // ignore
  }
}

export function clearProfile(storageKey: string): void {
  if (!storageKey) return;
  try {
    localStorage.removeItem(storageKey);
  } catch {
    // ignore
  }
}
