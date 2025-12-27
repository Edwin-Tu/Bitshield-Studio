import React, { useMemo, useState } from "react";
import { useAuth } from "../context/AuthContext";

/**
 * Profile.tsx
 * - 客戶資料填寫（Profile）
 * - 發案（提交委託需求）
 */

type PreferredContact = "LINE" | "電話" | "Email";
type ProjectType = "新建官網" | "官網改版" | "單頁式網站" | "其他";

type PageOption =
  | "首頁"
  | "房型介紹"
  | "交通/地圖"
  | "訂房資訊"
  | "常見問題"
  | "最新公告"
  | "相簿/環境"
  | "聯絡我們";

type AssetsReady = "文字" | "照片" | "Logo" | "房型資料";

type ProfileForm = {
  // 客戶/民宿資料
  contactName: string;
  businessName: string;
  phone: string;
  address: string;
  lineId: string;
  preferredContact: PreferredContact;
  notes: string;

  // 發案
  projectType: ProjectType;
  desiredLaunchDate: string; // yyyy-mm-dd
  pages: Record<PageOption, boolean>;
  assetsReady: Record<AssetsReady, boolean>;
  referenceLinks: string;
  requestDetail: string;
};

const ALL_PAGES: PageOption[] = [
  "首頁",
  "房型介紹",
  "交通/地圖",
  "訂房資訊",
  "常見問題",
  "最新公告",
  "相簿/環境",
  "聯絡我們",
];

const ALL_ASSETS: AssetsReady[] = ["文字", "照片", "Logo", "房型資料"];

// 因為 AuthContext 是 .jsx，TS 端拿不到型別，這裡用最小必要型別描述即可
type AuthUser = {
  name?: string;
  email?: string;
  role?: string;
  avatar?: string;
  picture?: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  loading: boolean;
  loginRedirect: () => void;
  logout: () => Promise<void>;
};

export default function Profile() {
  // 重要：useAuth 只能在 component 內呼叫
  const { user, loading, loginRedirect } = useAuth() as AuthContextValue;
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

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(0,0,0,0.08)",
    background: "#fff",
    outline: "none",
    fontSize: 14,
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 13,
    fontWeight: 600,
    marginBottom: 6,
  };

  const hintStyle: React.CSSProperties = {
    fontSize: 12,
    color: "var(--text-light)",
    marginTop: 6,
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 16,
  };

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
        <h2 className="section-title">個人檔案</h2>
        <p className="section-desc">請先登入後再填寫資料與提交發案需求。</p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 14 }}>
          <button className="nav-cta" type="button" onClick={loginRedirect}>
            登入
          </button>
        </div>
      </section>
    );
  }

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

  function handleReset() {
    setForm(initialForm);
    setSavedAt("");
  }

  function validate(): string[] {
    const errors: string[] = [];
    if (!form.contactName.trim()) errors.push("請填寫聯絡人姓名");
    if (!form.businessName.trim()) errors.push("請填寫民宿/品牌名稱");
    if (!form.phone.trim()) errors.push("請填寫聯絡電話");
    if (!form.requestDetail.trim()) errors.push("請填寫發案說明");
    return errors;
  }

  function handleSaveProfile() {
    const errors = validate();
    if (errors.length) {
      alert(errors.join("\n"));
      return;
    }
    console.log("[SAVE_PROFILE]", form);
    setSavedAt(new Date().toLocaleString());
    alert("已暫存（示意）。之後可接 API 寫入資料庫。");
  }

  function handleSubmitCase() {
    const errors = validate();
    if (errors.length) {
      alert(errors.join("\n"));
      return;
    }

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
  }

  const selectedPagesCount = Object.values(form.pages).filter(Boolean).length;

  return (
    <section>
      <h2 className="section-title">個人檔案</h2>
      <p className="section-desc">
        填寫基本資料與發案需求。登入帳號將作為身份識別（{user.email}）。
      </p>

      <div className="card" style={{ marginBottom: 22 }}>
        <h3 style={{ marginBottom: 10 }}>客戶資料</h3>

        <div style={gridStyle}>
          <div>
            <div style={labelStyle}>聯絡人姓名</div>
            <input
              style={inputStyle}
              value={form.contactName}
              onChange={(e) => update("contactName", e.target.value)}
              placeholder="例：王小明"
            />
          </div>

          <div>
            <div style={labelStyle}>民宿／品牌名稱</div>
            <input
              style={inputStyle}
              value={form.businessName}
              onChange={(e) => update("businessName", e.target.value)}
              placeholder="例：海風民宿"
            />
          </div>

          <div>
            <div style={labelStyle}>聯絡電話</div>
            <input
              style={inputStyle}
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="例：09xx-xxx-xxx"
            />
          </div>

          <div>
            <div style={labelStyle}>偏好聯絡方式</div>
            <select
              style={inputStyle}
              value={form.preferredContact}
              onChange={(e) =>
                update("preferredContact", e.target.value as PreferredContact)
              }
            >
              <option value="LINE">LINE</option>
              <option value="電話">電話</option>
              <option value="Email">Email</option>
            </select>
            <div style={hintStyle}>用於我們跟你確認需求與校稿。</div>
          </div>

          <div>
            <div style={labelStyle}>LINE ID（選填）</div>
            <input
              style={inputStyle}
              value={form.lineId}
              onChange={(e) => update("lineId", e.target.value)}
              placeholder="例：@yourlineid"
            />
          </div>

          <div>
            <div style={labelStyle}>地址／地區（選填）</div>
            <input
              style={inputStyle}
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
              placeholder="例：澎湖縣馬公市..."
            />
          </div>
        </div>

        <div style={{ marginTop: 14 }}>
          <div style={labelStyle}>備註（選填）</div>
          <textarea
            style={{ ...inputStyle, minHeight: 92, resize: "vertical" }}
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
            placeholder="例：平日較方便聯絡、希望先看範例、或任何補充資訊"
          />
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14, alignItems: "center" }}>
          <button type="button" className="btn-primary" onClick={handleSaveProfile}>
            儲存資料
          </button>
          <button type="button" className="btn-secondary" onClick={handleReset}>
            重設
          </button>

          {savedAt ? (
            <span style={{ fontSize: 12, color: "var(--text-light)" }}>
              已暫存時間：{savedAt}
            </span>
          ) : (
            <span style={{ fontSize: 12, color: "var(--text-light)" }}>
              尚未儲存（目前為示意模式）
            </span>
          )}
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: 10 }}>發案（提交委託需求）</h3>

        <div style={gridStyle}>
          <div>
            <div style={labelStyle}>需求類型</div>
            <select
              style={inputStyle}
              value={form.projectType}
              onChange={(e) => update("projectType", e.target.value as ProjectType)}
            >
              <option value="新建官網">新建官網</option>
              <option value="官網改版">官網改版</option>
              <option value="單頁式網站">單頁式網站</option>
              <option value="其他">其他</option>
            </select>
          </div>

          <div>
            <div style={labelStyle}>希望上線日期（選填）</div>
            <input
              style={inputStyle}
              type="date"
              value={form.desiredLaunchDate}
              onChange={(e) => update("desiredLaunchDate", e.target.value)}
            />
            <div style={hintStyle}>不確定也沒關係，可先留空。</div>
          </div>
        </div>

        <div style={{ marginTop: 14 }}>
          <div style={labelStyle}>預計頁面（已選 {selectedPagesCount} 項）</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {ALL_PAGES.map((p) => (
              <label
                key={p}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 10px",
                  borderRadius: 999,
                  border: "1px solid rgba(57,184,232,0.35)",
                  background: "rgba(57,184,232,0.06)",
                  fontSize: 13,
                }}
              >
                <input
                  type="checkbox"
                  checked={form.pages[p]}
                  onChange={() => togglePage(p)}
                />
                {p}
              </label>
            ))}
          </div>
          <div style={hintStyle}>先勾選大方向即可，後續可再補充細節。</div>
        </div>

        <div style={{ marginTop: 14 }}>
          <div style={labelStyle}>內容是否已備齊（選填）</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {ALL_ASSETS.map((a) => (
              <label
                key={a}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 10px",
                  borderRadius: 999,
                  border: "1px solid rgba(210,180,140,0.45)",
                  background: "rgba(210,180,140,0.10)",
                  fontSize: 13,
                }}
              >
                <input
                  type="checkbox"
                  checked={form.assetsReady[a]}
                  onChange={() => toggleAsset(a)}
                />
                {a}
              </label>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 14 }}>
          <div style={labelStyle}>參考網站連結（選填）</div>
          <textarea
            style={{ ...inputStyle, minHeight: 74, resize: "vertical" }}
            value={form.referenceLinks}
            onChange={(e) => update("referenceLinks", e.target.value)}
            placeholder={"可貼多個連結，每行一個。\n例：https://example.com"}
          />
        </div>

        <div style={{ marginTop: 14 }}>
          <div style={labelStyle}>發案說明（必填）</div>
          <textarea
            style={{ ...inputStyle, minHeight: 120, resize: "vertical" }}
            value={form.requestDetail}
            onChange={(e) => update("requestDetail", e.target.value)}
            placeholder="請描述你希望呈現的風格、客群、主打特色、是否有訂房系統/表單需求等。"
          />
          <div style={hintStyle}>建議至少寫：主打特色＋希望風格＋是否有房型/照片/文案。</div>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
          <button type="button" className="btn-primary" onClick={handleSubmitCase}>
            提交發案
          </button>
          <button type="button" className="btn-secondary" onClick={handleSaveProfile}>
            先儲存，稍後再送出
          </button>
        </div>
      </div>
    </section>
  );
}
