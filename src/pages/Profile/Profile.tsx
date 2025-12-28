// src/pages/Profile.tsx
import React from "react";
import "./Profile.css";
import { useAuth } from "../../context/AuthContext";
import type { AuthContextValue } from "./types";
import { useProfileForm } from "./useProfileForm";
import { validateProfile } from "./validators";
import { ProfileSection } from "./ProfileSection";
import { CaseSection } from "./CaseSection";

export default function Profile() {
  const { user, loading, loginRedirect } = useAuth() as AuthContextValue;

  const {
    form,
    update,
    togglePage,
    toggleAsset,
    save,
    reset,
    savedAt,
    selectedPagesCount,
  } = useProfileForm(user);

  if (loading) {
    return (
      <section>
        <h2 className="section-title">個人檔案</h2>
        <p className="section-desc">載入登入狀態中…</p>
      </section>
    );
  }

  if (!user) {
    return (
      <section>
        <h2 className="profile__title">個人檔案</h2>
        <p className="profile__desc">請先登入後再填寫資料與提交發案需求。</p>
        <div className="profile-auth">
          <button className="nav-cta" type="button" onClick={loginRedirect}>
            登入
          </button>
        </div>
      </section>
    );
  }

  function guardAndRun(action: () => void) {
    const errors = validateProfile(form);
    if (errors.length) {
      alert(errors.join("\n"));
      return;
    }
    action();
  }

  function handleSaveProfile() {
    guardAndRun(() => {
      console.log("[SAVE_PROFILE]", form);
      save();
      alert("已暫存（示意）。之後可接 API 寫入資料庫。");
    });
  }

  function handleSubmitCase() {
    guardAndRun(() => {
      const selectedPages = Object.entries(form.pages)
        .filter(([, v]) => v)
        .map(([k]) => k);

      console.log("[SUBMIT_CASE]", {
        ...form,
        selectedPages,
        userEmail: user?.email,
        role: user?.role,
      });

      alert("已提交發案（示意）。之後可接 API 建立案件/需求單。");
    });
  }

  return (
    <section>
      <h2 className="section-title">個人檔案</h2>
      <p className="section-desc">
        填寫基本資料與發案需求。登入帳號將作為身份識別（{user.email}）。
      </p>

      <ProfileSection
        form={form}
        savedAt={savedAt}
        onUpdate={update}
        onSave={handleSaveProfile}
        onReset={() => reset(true)}
      />

      <CaseSection
        form={form}
        selectedPagesCount={selectedPagesCount}
        onUpdate={update}
        onTogglePage={togglePage}
        onToggleAsset={toggleAsset}
        onSubmit={handleSubmitCase}
        onSaveDraft={handleSaveProfile}
      />
    </section>
  );
}
