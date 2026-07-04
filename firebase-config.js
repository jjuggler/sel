// ============================================================
//  🔥 Firebase 연결 설정  (배포용 원본 · v6.2)
// ------------------------------------------------------------
//  [실제 수업에 쓰려면]
//  Firebase 콘솔 → 프로젝트 설정(톱니) → 내 앱(</>) 에서 나오는
//  "const firebaseConfig = { ... };" 코드를 통째로 복사해서,
//  아래 예시 부분(★)을 그대로 덮어쓰기 하세요.
//  (비워두면 '이 기기에만 저장' 모드로 열려요)
// ============================================================

// ↓↓↓ 여기(★)를 Firebase가 준 코드로 통째로 바꾸세요 ↓↓↓
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
// ↑↑↑ 여기까지 (const firebaseConfig = { 부터 }; 까지) ↑↑↑


// ===== 아래는 건드리지 마세요 =====
window.firebaseConfig = firebaseConfig;
window.initialAdminPass = "0000";   // 관리자 초기 비번(설정에서 각자 변경)
window.geminiApiKey = "";           // (선택) Gemini AI 키
