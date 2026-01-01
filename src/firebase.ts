import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as fbSignOut,
  onAuthStateChanged as fbOnAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from 'firebase/firestore';

// Firebase config 由環境變數提供（請在 .env 或 Vite 環境中設定）
// 若未設定 env，會使用 fallback config（方便快速測試）
const envConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
};

// Provided fallback config (from user). Replace or remove if you prefer env-only setup.
const fallbackConfig = {
  apiKey: "AIzaSyCOmENZQf3BiO1VARZg06XmKlhu8DEHtaM",
  authDomain: "bitshieldstudio.firebaseapp.com",
  projectId: "bitshieldstudio",
  storageBucket: "bitshieldstudio.firebasestorage.app",
  messagingSenderId: "204260134612",
  appId: "1:204260134612:web:f4437bba2a32fbc6c5f541",
  measurementId: "G-TZ0HMYSJZH",
};

const firebaseConfig = envConfig.apiKey ? envConfig : fallbackConfig;

if (!firebaseConfig.apiKey) {
  console.warn('[WARN] Firebase config missing. Fill VITE_FIREBASE_* env vars to enable Firebase features.');
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export async function signInWithGoogle() {
  return signInWithPopup(auth, googleProvider);
}
export function signOutFirebase() {
  return fbSignOut(auth);
}
export function onAuthState(cb) {
  return fbOnAuthStateChanged(auth, cb);
}

export const db = getFirestore(app);

export async function saveProfileToFirestore(uid: string, profile: any) {
  if (!uid) throw new Error('Missing uid');
  const ref = doc(db, 'profiles', uid);
  await setDoc(ref, {
    profile,
    updatedAt: serverTimestamp(),
    updatedAtMs: Date.now(),
  }, { merge: true });
}

export async function loadProfileFromFirestore(uid: string) {
  if (!uid) return null;
  const ref = doc(db, 'profiles', uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  const data = snap.data();
  return data.profile ?? null;
}
