// src/features/profile/useProfileForm.ts
import { useEffect, useMemo, useState } from "react";
import { ALL_ASSETS, ALL_PAGES } from "./constants";
import type { AssetsReady, PageOption, ProfileForm } from "./types";
import { clearProfile, loadProfile, makeProfileStorageKey, saveProfile } from "./storage";

export function useProfileForm(user: { name?: string; email?: string } | null) {
  const storageKey = useMemo(
    () => makeProfileStorageKey(user?.email),
    [user?.email]
  );

  const initialForm = useMemo<ProfileForm>(
    () => ({
      contactName: user?.name || "",
      businessName: "",
      phone: "",
      address: "",
      lineId: "",
      preferredContact: "LINE",
      notes: "",

      projectType: "新建官網",
      desiredLaunchDate: "",
      pages: ALL_PAGES.reduce((acc, k) => {
        acc[k] = k === "首頁";
        return acc;
      }, {} as Record<PageOption, boolean>),
      assetsReady: ALL_ASSETS.reduce((acc, k) => {
        acc[k] = false;
        return acc;
      }, {} as Record<AssetsReady, boolean>),
      referenceLinks: "",
      requestDetail: "",
    }),
    [user?.name]
  );

  const [form, setForm] = useState<ProfileForm>(initialForm);
  const [savedAt, setSavedAt] = useState<string>("");

  // 登入後：優先載入 localStorage；沒有就用 initialForm
  useEffect(() => {
    if (!user) return;

    const saved = loadProfile(storageKey);
    if (saved) {
      setForm(saved);
      setSavedAt(new Date().toLocaleString());
      return;
    }

    setForm(initialForm);
    setSavedAt("");
  }, [user?.email, storageKey, initialForm, user]);

  function update<K extends keyof ProfileForm>(key: K, value: ProfileForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function togglePage(key: PageOption) {
    setForm((prev) => ({
      ...prev,
      pages: { ...prev.pages, [key]: !prev.pages[key] },
    }));
  }

  function toggleAsset(key: AssetsReady) {
    setForm((prev) => ({
      ...prev,
      assetsReady: { ...prev.assetsReady, [key]: !prev.assetsReady[key] },
    }));
  }

  async function save() {
    // localStorage 快取
    saveProfile(storageKey, form);
    setSavedAt(new Date().toLocaleString());

    // 嘗試寫入 Firestore（client side）。若未配置或失敗，仍保留 localStorage 草稿
    try {
      // 使用 uid 優先，fallback 使用 email
      const uid = (user as any)?.uid || (user as any)?.email;
      const { saveProfileClient } = await import('../../services/profileService');
      if (uid) await saveProfileClient(uid, form);
    } catch (err) {
      // 忽略錯誤；保留 localStorage 草稿
      console.error('profile save error (client)', err);
    }
  }

  function reset(clearDraft = true) {
    setForm(initialForm);
    setSavedAt("");
    if (clearDraft) clearProfile(storageKey);
  }

  const selectedPagesCount = useMemo(
    () => Object.values(form.pages).filter(Boolean).length,
    [form.pages]
  );

  return {
    form,
    setForm,
    update,
    togglePage,
    toggleAsset,
    save,
    reset,
    savedAt,
    storageKey,
    selectedPagesCount,
  };
}
