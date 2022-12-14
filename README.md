## 실행 방법

- yarn dev

## 사용 기술 스택

1. Next.js + typescript
2. 스타일 라이브러리는 tailwind 사용
3. 로그인을 위한 전역상태관리 라이브러리는 recoil 사용

### 구현 내용

<img src="https://user-images.githubusercontent.com/87821830/207662879-f35b1d6a-7340-4963-a909-1422a288ed6c.gif" width="200" height="400"/>

1. 상태관리

   - 로그인 페이지에서 로그인 후 로그인 된 상태(아이디, 이름)가 전역에서 유지
   - 로그인 상태로 로그인 페이지 진입 시 로그아웃 버튼 노출되도록 구현
   - 로그인 input 입력없이 로그인 하는 경우 로그인 실패 모달 노출

2. api 호출
   - farm list get 요청
   - farm add post 요청
3. 화면 조작
   - 농장 별 월간 생산량 합계인 연간 생산량 구현
   - 하우스 가동/중지와 그에 따른 버튼 배경 색 변경
4. UI 개발
   - farm add post 요청 성공 시 결과값 보여주는 모달 노출
   - input 입력없는 경우 실패 모달 노출
