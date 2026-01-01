// src/features/profile/components/CaseSection.tsx
import React from "react";
import { ALL_ASSETS, ALL_PAGES } from "./constants";
import type { AssetsReady, PageOption, ProfileForm, ProjectType } from "./types";
import "./Profile.css";

export function CaseSection(props: {
  form: ProfileForm;
  selectedPagesCount: number;
  onUpdate: <K extends keyof ProfileForm>(key: K, value: ProfileForm[K]) => void;
  onTogglePage: (k: PageOption) => void;
  onToggleAsset: (k: AssetsReady) => void;
  onSubmit: () => void;
  onSaveDraft: () => void;
}) {
  const { form, onUpdate, onTogglePage, onToggleAsset, onSubmit, onSaveDraft, selectedPagesCount } = props;

  return (
    <div className="profile-card">
      <h3 className="profile-card__title">發案（提交委託需求）</h3>

      <div className="profile-grid">
        <div>
          <div className="form-label">需求類型</div>
          <select
            className="form-select"
            value={form.projectType}
            onChange={(e) => onUpdate("projectType", e.target.value as ProjectType)}
          >
            <option value="新建官網">新建官網</option>
            <option value="官網改版">官網改版</option>
            <option value="單頁式網站">單頁式網站</option>
            <option value="其他">其他</option>
          </select>
        </div>

        <div>
          <div className="form-label">希望上線日期（選填）</div>
          <input
            className="form-input"
            type="date"
            value={form.desiredLaunchDate}
            onChange={(e) => onUpdate("desiredLaunchDate", e.target.value)}
          />
          <div className="form-hint">不確定也沒關係，可先留空。</div>
        </div>
      </div>

      <div className="profile-block">
        <div className="form-label">預計頁面（已選 {selectedPagesCount} 項）</div>
        <div className="chips">
          {ALL_PAGES.map((p) => (
            <label key={p} className="chip chip--page">
              <input type="checkbox" checked={form.pages[p]} onChange={() => onTogglePage(p)} />
              {p}
            </label>
          ))}
        </div>
        <div className="form-hint">先勾選大方向即可，後續可再補充細節。</div>
      </div>

      <div className="profile-block">
        <div className="form-label">內容是否已備齊（選填）</div>
        <div className="chips">
          {ALL_ASSETS.map((a) => (
            <label key={a} className="chip chip--asset">
              <input type="checkbox" checked={form.assetsReady[a]} onChange={() => onToggleAsset(a)} />
              {a}
            </label>
          ))}
        </div>
      </div>

      <div className="profile-block">
        <div className="form-label">參考網站連結（選填）</div>
        <textarea
          className="form-textarea form-textarea--links"
          value={form.referenceLinks}
          onChange={(e) => onUpdate("referenceLinks", e.target.value)}
          placeholder={"可貼多個連結，每行一個。\n例：https://example.com"}
        />
      </div>

      <div className="profile-block">
        <div className="form-label">發案說明（必填）</div>
        <textarea
          className="form-textarea form-textarea--detail"
          value={form.requestDetail}
          onChange={(e) => onUpdate("requestDetail", e.target.value)}
          placeholder="請描述你希望呈現的風格、客群、主打特色、是否有訂房系統/表單需求等。"
        />
        <div className="form-hint">建議至少寫：主打特色＋希望風格＋是否有房型/照片/文案。</div>
      </div>

      <div className="action-row action-row--mt14">
        <button type="button" className="btn-primary" onClick={onSubmit}>
          提交發案
        </button>
        <button type="button" className="btn-secondary" onClick={onSaveDraft}>
          先儲存，稍後再送出
        </button>
      </div>
    </div>
  );
}
