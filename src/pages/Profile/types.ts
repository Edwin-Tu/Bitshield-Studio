// src/features/profile/types.ts

export type PreferredContact = "LINE" | "電話" | "Email";
export type ProjectType = "新建官網" | "官網改版" | "單頁式網站" | "其他";

export type PageOption =
  | "首頁"
  | "房型介紹"
  | "交通/地圖"
  | "訂房資訊"
  | "常見問題"
  | "最新公告"
  | "相簿/環境"
  | "聯絡我們";

export type AssetsReady = "文字" | "照片" | "Logo" | "房型資料";

export type ProfileForm = {
  contactName: string;
  businessName: string;
  phone: string;
  address: string;
  lineId: string;
  preferredContact: PreferredContact;
  notes: string;

  projectType: ProjectType;
  desiredLaunchDate: string; // yyyy-mm-dd
  pages: Record<PageOption, boolean>;
  assetsReady: Record<AssetsReady, boolean>;
  referenceLinks: string;
  requestDetail: string;
};

// 你的 AuthContext 是 jsx，所以 TS 端用最小型別描述
export type AuthUser = {
  name?: string;
  email?: string;
  role?: string;
  avatar?: string;
  picture?: string;
};

export type AuthContextValue = {
  user: AuthUser | null;
  loading: boolean;
  loginRedirect: () => void;
  logout: () => Promise<void>;
};
