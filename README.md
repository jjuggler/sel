# 인성 실천 포트폴리오 (배포용 원본 · v6.2)

경기 인성교육 + 사회정서학습(SEL) 기반 인성 실천 포트폴리오 PWA.
**Fork(복사)해서 각자 자기 앱으로** 쓰세요. GitHub Pages만으로 작동합니다.

## 다른 선생님이 쓰는 법
1. 오른쪽 위 **Fork** → 내 GitHub에 복사본 생성
2. 복사본에서 **firebase-config.js** 열기 → 연필(✏️ In place)
   → `const firebaseConfig = { ... };` 부분을 **내 Firebase 코드로 통째로 덮어쓰기** → **Commit**
3. **Settings → Pages** → Branch `main` / `(root)` → **Save**
4. 생긴 주소(`내아이디.github.io/저장소이름/`)를 학생에게 공유

## Firebase 만들기 (실제 수업용·무료·약 10분)
1. firebase.google.com → 프로젝트 추가
2. 빌드 → Authentication → **익명** 로그인 사용 설정
3. 빌드 → Firestore Database → 위치 **서울** → **테스트 모드**
4. 프로젝트 설정 → 내 앱(</>) → **const firebaseConfig 코드 통째로 복사** → 위 2)에 붙여넣기
5. 보안(30일 내): Firestore 규칙에 붙여넣고 게시
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} { allow read, write: if request.auth != null; }
  }
}
```

## 관리자
- 초기 비번 **0000** → 설정 → 채점·검사 설정에서 **꼭 변경**
- 명단: 데이터 관리 → 학생 명렬표 관리 → 양식 다운로드 → 업로드

© jjuggler
