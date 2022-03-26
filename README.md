# 티오더 프론트앤드 과제

## 프로젝트 실행
 1. npm i
 2. npm run serve

## 라이브러리
```jsx
vuex
install 
npm i vuex

router
install 
npm i vue-router

axios
install 
npm i axios

dayjs
install 
npm i dayjs

scss
install 
npm install --save-dev node-sass sass-loader
```
## 폴더 구조
```jsx
├─ public
│   └─ assets
│     
│    
└─ src
   ├─ components
   │   ├─ common
   │   │   ├─ Header
   │   │   └─ Toast
   │   │ 
   │   ├─ Navigation
   │   └─ ShoppingBag
   │ 
   ├─ assets
   │   └─ style
   │       └─ reset.css
   │   
   ├─ router
   │   └─ index.js
   ├─ store
   │   ├─ Modules
   │   │   ├─ landing
   │   │   └─ main
   │   └─ index
   └─ views
       ├─ bill
       ├─ landing
       ├─ main
       └─ order
```
+ components : 컴포넌트 폴더
+ assets : 이미지 및 css 관리 폴더
+ router : 라우터 관리 폴더
+ store : VUEX 스토어 리스트 폴더
+ views : 페이지 관리 폴더

## 요구사항
	1. 상품 리스트 페이지
		- BEST, HIT, 추천, 신메뉴 라벨
		- 솔드아웃 표시
    - 옵션, 상세설명, 옵션/상세설명 라벨
	2. 상품을 클릭해 장바구니에 담기
	3. 주문하기
	4. 주문내역, 계산서

## 요구사항 체크
	1. 상품 리스트 페이지 - 현제 8개의 메뉴만 표시되고있다 (메인/시그니쳐)
		- BEST, HIT, 추천, 신메뉴 라벨 - 표시되고있음
		- 솔드아웃 표시 - 표시되고있음
    - 옵션, 상세설명, 옵션/상세설명 라벨 - 표시되고있음
	2. 상품을 클릭해 장바구니에 담기 - 중복 상품에 대한 처리 필요(todo)
	3. 주문하기 - 이전주문에 대한 처리 필요(todo)
	4. 주문내역, 계산서 
# todos
	1. 메인카테고리 / 서브카테고리 인터렉션 필요
	2. 카테고리별 상품리스트 출력 필요
	3. 장바구니 - 펼치기 및 중복상품 클릭시 
	4. 이전 주문에대한 처리필요
	5. 토스트 팝업 필요
