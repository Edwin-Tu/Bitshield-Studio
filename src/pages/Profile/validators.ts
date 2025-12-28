// src/features/profile/validators.ts
import type { ProfileForm } from "./types";

export function validateProfile(form: ProfileForm): string[] {
  const errors: string[] = [];
  if (!form.contactName.trim()) errors.push("請填寫聯絡人姓名");
  if (!form.businessName.trim()) errors.push("請填寫民宿/品牌名稱");
  if (!form.phone.trim()) errors.push("請填寫聯絡電話");
  if (!form.requestDetail.trim()) errors.push("請填寫發案說明");
  return errors;
}
