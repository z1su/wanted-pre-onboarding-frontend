# 

# **원티드 프리온보딩 프론트엔드 선발 과제 - 송지수**

## 배포 링크 : [https://effervescent-gaufre-e5c8ec.netlify.app/](https://effervescent-gaufre-e5c8ec.netlify.app/)

# 1. 폴더 구조

---

```
📦src
 ┣ 📂component
 ┃ ┣ 📂auth
 ┃ ┣ 📂todo
 ┣ 📂hooks
 ┣ 📂lib
 ┣ 📂page
 ┣ 📂provider
 ┃ ┣ 📂auth
 ┃ ┣ 📂todo
 ┣ 📂style
 ┃ ┣ 📂auth
 ┃ ┣ 📂todo

```

# 2. 구현 기능 소개

## 시연 영상

<img width="90%" src="https://user-images.githubusercontent.com/70136320/233063299-19d1afc7-d611-4d70-ae78-dc8d18405fb4.gif"/>

---

## 로그인 / 회원가입

### ☑️ **Assignment 1 :이메일과 비밀번호의 유효성 검사**

- e-mail : @포함
- pw : 8자 이상 입력
<img width="75%" src="https://user-images.githubusercontent.com/70136320/233060914-30f4f143-7446-4e7e-be61-f1c2748b2d34.gif"/>


### ☑️ **Assignment 2: 회원가입 진행 후 /signin 경로 이동**

### ☑️ **Assignment 3: 로그인 완료 후 /todo 경로 이동**

- 응답받은 JWT를 로컬 스토리지에 저장함

### ☑️ **Assignment 4: 로그인 여부에 따른 리다이렉트 처리**

- 로컬스토리지에 토큰 O & `/signin`  또는 `/signup` 페이지에 접속 >>> `/todo` 경로로 리다이렉트
- 로컬스토리지에 토큰 X & `/todo`페이지에 접속 >>> `/signin` 경로로 리다이렉트로 리다이렉트 하도록 구현함
<img width="75%" src="https://user-images.githubusercontent.com/70136320/233054974-01f91bb9-f1fc-428b-b338-324e52aa1854.gif"/>

## TODO LIST

### ☑️ **Assignment 5: 투두 리스트 목록과 완료 여부 생성**

- 완료 여부: `<input type="checkbox" />` 로 구현
- 투두 리스트: `li` tag로 wrapping함

### ☑️ **Assignment 6: 새로운 TODO를 입력할 수 있는 input과 추가 button**

- 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가
- TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 그대로 유지하도록 구현
- (추가 구현) 로그아웃 후 재로그인 시 TODO가 목록에 그대로 유지됨


### ☑️ **Assignment 7: 완료 여부를 수정할 수 있는 체크박스**
<img width="75%" src="https://user-images.githubusercontent.com/70136320/233053636-58a66fb6-3e10-4e6f-b409-e215be8e6fd2.gif"/>

### ☑️ **Assignment 8~10: TODO 수정 , 삭제 버튼 및 기능**
<img width="75%" src="https://user-images.githubusercontent.com/70136320/233054307-d20d616d-a0f5-439e-91a3-889ed72120d1.gif"/>


# 3. 프로젝트 설치 및 실행

---

1) 프로젝트 패키지 설치

`npm install`

2) 프로젝트 실행

`npm start`

# 4. 사용 라이브러리

---

react-router-dom, React-Icons ,styled-components, Axios
