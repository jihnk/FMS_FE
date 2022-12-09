# FMS 개발실 프론트엔드 면접 과제

1. 압축된 코드 파일을 제공 -> 면접자 개인 깃 저장소에 업로드하고 깃허브 링크로 결과물 제출
2. 농장리스트를 관리하는 웹 서비스를 개발합니다.

# 패키지 설치

1. yarn
2. yarn prepare (허스키 설치)
3. yarn dev

## 준수 사항

1. yarn + Next.js + ts 사용하여 개발합니다.
2. Style Library(SCSS, styled-components 등) 사용은 자율이지만 tailwind 를 기본코드로 제공합니다
3. 제공된 eslint 로 규약을 지켜야 합니다. (husky로 커밋을 제한 합니다.)
4. 제공되는 과제에 대한 저장소는 각 과제 순서대로 브랜치를 제작 후 머지하고 다시 브랜치를 만드는 과정으로 진행해야합니다. (브랜치는 삭제하지말고 유지해주세요)

## 과제

1. 상태관리 - 로그인 페이지에서 로그인 후 로그인 된 상태가 전역에서 유지 되어야함 (context, redux, recoil 등 사용 자율)
   1. Q1-1 pages/index.tsx
   2. Q1-2 components/Header.tsx
2. api 통신 (api 통신을 통해 결과 화면 출력)
   1. Q2-1 components/Farm/index.tsx
   2. Q2-2 components/FarmAddForm/index.tsx
3. 화면 조작
   1. Q3-1 components/Farm/index.tsx
   2. Q3-2 components/Farm/index.tsx
4. UI 개발 (예시 이미지를 제공 후 구현)
   1. Q4-2 components/FarmAddForm/index.tsx
   2. Q4-2 components/FarmAddForm/index.tsx
   3. Q4-2 components/FarmAddForm/index.tsx

### 문제 참고 화면

- ![스크린샷 2022-11-24 오후 4 37 46](https://user-images.githubusercontent.com/94509005/203722616-4f51c668-dde8-46bd-80b8-c9261958ed30.png)
- ![스크린샷 2022-11-24 오후 4 43 57](https://user-images.githubusercontent.com/94509005/203723318-7c777e4b-a313-48e2-b0bf-8264a4b8eeb4.png)
- ![스크린샷 2022-11-24 오후 4 45 42](https://user-images.githubusercontent.com/94509005/203723315-ec668794-507b-4380-8973-7275f8412d58.png)
