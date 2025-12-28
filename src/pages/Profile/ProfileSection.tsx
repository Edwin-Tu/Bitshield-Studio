// src/features/profile/components/ProfileSection.tsx
import React from "react";
import type { PreferredContact, ProfileForm } from "./types";
import "./Profile.css";

export function ProfileSection(props: {
  form: ProfileForm;
  savedAt: string;
  onUpdate: <K extends keyof ProfileForm>(key: K, value: ProfileForm[K]) => void;
  onSave: () => void;
  onReset: () => void;
}) {
  const { form, onUpdate, onSave, onReset, savedAt } = props;

  return (
    <div className="profile-card profile-card--mb22">
      <h3 className="profile-card__title">個人檔案</h3>

      <div className="profile-grid">
        <div>
          <div className="form-label">姓名</div>
          <input
            className="form-input"
            value={form.contactName}
            onChange={(e) => onUpdate("contactName", e.target.value)}
            placeholder="例：王小明"
          />
        </div>

        <div>
          <div className="form-label">公司名稱</div>
          <input
            className="form-input"
            value={form.businessName}
            onChange={(e) => onUpdate("businessName", e.target.value)}
            placeholder="例：海風民宿"
          />
        </div>

        <div>
          <div className="form-label">聯絡電話</div>
          <input
            className="form-input"
            value={form.phone}
            onChange={(e) => onUpdate("phone", e.target.value)}
            placeholder="例：09xx-xxx-xxx"
          />
        </div>

        <div>
          <div className="form-label">偏好聯絡方式</div>
          <select
            className="form-select"
            value={form.preferredContact}
            onChange={(e) =>
              onUpdate("preferredContact", e.target.value as PreferredContact)
            }
          >
            <option value="LINE">LINE</option>
            <option value="電話">電話</option>
            <option value="Email">Email</option>
          </select>
          <div className="form-hint">用於我們跟你確認需求與校稿。</div>
        </div>

        <div>
          <div className="form-label">LINE ID（選填）</div>
          <input
            className="form-input"
            value={form.lineId}
            onChange={(e) => onUpdate("lineId", e.target.value)}
            placeholder="例：@yourlineid"
          />
        </div>

        <div>
          <div className="form-label">地址／地區</div>
          <input
            className="form-input"
            value={form.address}
            onChange={(e) => onUpdate("address", e.target.value)}
            placeholder="例：澎湖縣馬公市..."
          />
        </div>
      </div>

      <div className="profile-block">
        <div className="form-label">備註（選填）</div>
        <textarea
          className="form-textarea form-textarea--notes"
          value={form.notes}
          onChange={(e) => onUpdate("notes", e.target.value)}
          placeholder="例：平日較方便聯絡、希望先看範例、或任何補充資訊"
        />
      </div>

      <div className="action-row action-row--mt14">
        <button type="button" className="btn-primary" onClick={onSave}>
          儲存資料
        </button>
        <button type="button" className="btn-secondary" onClick={onReset}>
          重設
        </button>

        {savedAt ? (
          <span className="action-row__meta">已暫存時間：{savedAt}</span>
        ) : (
          <span className="action-row__meta">尚未儲存（目前為示意模式）</span>
        )}
      </div>
    </div>
  );
}
