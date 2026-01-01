# React 19 降級至 React 18（Windows PowerShell 操作說明）

本文件說明如何在 **Windows（PowerShell）環境** 下，將專案的 React 版本從 **React 19** 穩定降級並固定在 **React 18.2.0**，以確保相容性與安全性。

適用情境：

* 專案曾使用 `react@19.x`、`react-dom@19.x`
* 因穩定性、安全性（例如近期 RSC / React 19 相關 CVE）或相容性考量，需回退至 React 18

---

## 一、建議使用的穩定版本組合

> **React 最穩定且廣泛使用的 18 版為：**

```json
{
  "react": "18.2.0",
  "react-dom": "18.2.0"
}
```

此版本為：

* React 18 系列的最新穩定版
* Next.js 13 / 14、Vite、CRA 等框架長期使用版本
* 目前無已知重大安全性問題

---

## 二、修改 `package.json`

請在專案根目錄中，將 `package.json` 的 `dependencies` 調整如下：

```jsonc
{
  "dependencies": {
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-router-dom": "^7.10.1"
  }
}
```

### 注意事項

* 建議 **明確指定版本號**（不要使用 `^19.x`）
* `react-router-dom@7.x` 可同時支援 React 18 與 React 19，無需降版

---

## 三、清除舊有依賴（Windows PowerShell）

⚠️ `rm -rf` 為 Linux / macOS 指令，**不可直接用於 PowerShell**。

請使用以下 PowerShell 指令：

```powershell
Remove-Item node_modules -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item package-lock.json -Force -ErrorAction SilentlyContinue
Remove-Item yarn.lock -Force -ErrorAction SilentlyContinue
Remove-Item pnpm-lock.yaml -Force -ErrorAction SilentlyContinue
```

### 補充說明

* 若顯示「路徑不存在」屬正常情況，代表該檔案本來就不存在
* 不影響後續流程

---

## 四、重新安裝依賴

請依照你實際使用的套件管理工具，**擇一執行**：

### 使用 npm

```powershell
npm install
```

### 使用 yarn

```powershell
yarn install
```

### 使用 pnpm

```powershell
pnpm install
```

完成後，系統會重新建立 `node_modules`。

---

## 五、確認 React 版本（必要步驟）

請執行以下指令確認實際安裝版本：

```powershell
npm list react react-dom
```

正確結果應類似：

```text
react@18.2.0
react-dom@18.2.0
```

若仍顯示 19.x，表示：

* lock 檔未正確刪除，或
* 套件管理工具與預期不一致（npm / yarn / pnpm 混用）

---

## 六、啟動專案驗證

確認版本後，啟動開發環境：

```powershell
npm run dev
```

或依你的專案設定執行對應指令。

只要：

* 能正常啟動
* 無 React 版本相關錯誤

即代表降級完成。

---

## 七、常見問題（FAQ）

### Q1：顯示找不到 `node_modules` 是錯誤嗎？

不是。代表該資料夾尚未建立或已清除，屬正常流程。

### Q2：可以用 `rm -rf` 嗎？

不行。PowerShell 請一律使用 `Remove-Item -Recurse -Force`。

### Q3：是否需要降 `react-router-dom`？

不需要。`react-router-dom@7.x` 完整支援 React 18。

### Q4：Next.js 可以搭配 React 18 嗎？

* ✅ Next 13 / 14：可以，且為官方主流組合
* ⚠️ Next 15 以上：預設需 React 19，不建議強制回退

---

## 八、最終結論

* ✅ **推薦版本**：`react@18.2.0` + `react-dom@18.2.0`
* ✅ 穩定、安全、相容性最佳
* ✅ 適合長期維護專案或企業環境

---

若未來需再次升級 React 19 或 Next.js 15+，建議另行評估安全公告與版本相依關係，避免直接升級造成風險。
This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Google 登入（Gmail）快速設定

1. 在 Google Cloud Console 建立 OAuth 2.0 用戶端（OAuth Client ID），授權型別選 Web application。設定授權重新導向（Authorized redirect URIs）為：

	- `http://localhost:4000/auth/google/callback`

2. 複製 `server/.env.example` 為 `server/.env`，填入 `GOOGLE_CLIENT_ID`、`GOOGLE_CLIENT_SECRET`，以及 `FRONTEND_URL`（預設 `http://localhost:5173`）。

3. 啟動後端：

```bash
cd server
npm install
npm run dev
```

4. 啟動前端：

```bash
npm install
npm run dev
```

5. 在網頁右上角點選「以 Google 登入」，完成授權後會導回前端並把使用者資訊儲存在 `localStorage`（鍵名 `user`）。

注意：此範例將 `id_token` 放在 URL 並由前端解析，僅供開發/示範使用；生產請改為以安全的 HttpOnly cookie 或後端 session 管理。 

## Firebase-first (新建議)

此專案已採用「Firebase-first」策略，建議使用 `Firebase Auth + Cloud Firestore` 作為認證與資料存取：

  - `VITE_FIREBASE_API_KEY`
  - `VITE_FIREBASE_AUTH_DOMAIN`
  - `VITE_FIREBASE_PROJECT_ID`
  - `VITE_FIREBASE_STORAGE_BUCKET`
  - `VITE_FIREBASE_MESSAGING_SENDER_ID`
  - `VITE_FIREBASE_APP_ID`

已在 `src/firebase.ts` 中加入 scaffold（使用 `import.meta.env` 讀取），並在 `firestore.rules` 提供範例安全規則。原 `server/` 目錄仍保留為歷史實作，已視為**棄用**（若要刪除請先備份）。

已執行清理：`server/` 的主要檔案已移至 `archive/server-deprecated/`，並從根目錄 `package.json` 移除相關 server 依賴與 scripts，以減少不必要維運負擔。

如需在本機永久移除 `server/`，可在專案根目錄執行：

```powershell
Remove-Item server -Recurse -Force
```


