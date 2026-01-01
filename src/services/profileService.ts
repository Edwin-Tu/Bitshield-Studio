import { saveProfileToFirestore } from '../firebase';

export async function saveProfileClient(uid: string | undefined | null, profile: any) {
  if (!uid) throw new Error('Missing user id for saving profile');
  // uid 可以是 Firebase uid 或 email（若你選擇用 email 做 id）
  await saveProfileToFirestore(String(uid), profile);
}

export default { saveProfileClient };
