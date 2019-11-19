# Mordern Movie Web  
[완성 페이지](https://byseop.github.io/modern-movie-web)

### dir

```
src
├── App.css
├── App.test.tsx
├── App.tsx
├── api
│   ├── genres.ts
│   └── tmdb.ts
├── components
│   ├── DetailView
│   │   ├── Clips.tsx
│   │   ├── Credits.tsx
│   │   ├── DetailView.tsx
│   │   ├── Gallery.tsx
│   │   ├── List.tsx
│   │   └── index.ts
│   ├── Header.tsx
│   ├── List.tsx
│   ├── MainVisual.tsx
│   └── Test.tsx
├── containers
│   ├── DetailContainer.tsx
│   ├── HeaderContainer.tsx
│   ├── ListContainer.tsx
│   ├── ListHeaderContainer.tsx
│   ├── MainVisualContainer.tsx
│   ├── MovieWeb.tsx
│   └── TestContainer.tsx
├── css
│   ├── Detail.css
│   ├── List.css
│   ├── MainVisual.css
│   └── MovieWeb.css
├── index.css
├── index.tsx
├── lib
│   ├── createAsyncThunk.ts
│   └── reducerUtils.ts
├── modules
│   ├── detail
│   │   ├── actions.ts
│   │   ├── index.ts
│   │   ├── reducer.ts
│   │   ├── thunk.ts
│   │   └── types.ts
│   ├── index.ts
│   ├── tmdb
│   │   ├── actions.ts
│   │   ├── index.ts
│   │   ├── reducer.ts
│   │   ├── thunk.ts
│   │   └── types.ts
│   ├── trend
│   │   ├── actions.ts
│   │   ├── index.ts
│   │   ├── reducer.ts
│   │   ├── thunk.ts
│   │   └── types.ts
│   └── video
│   ├── actions.ts
│   ├── index.ts
│   ├── reducer.ts
│   ├── thunk.ts
│   └── types.ts
```

**api**: 사용하는 API 함수, 타입의 모음  
**components**: 프로젝트에 사용된 컴포넌트  
**containers**: 각 페이지 혹은 컨테이너 컴포넌트  
**css**: 프로젝트 CSS파일 모음  
**lib**: 공용으로 사용하는 라이브러리 혹은 함수 모음  
**modules**: 리듀서를 모듈화 한 파일의 모음

### package

```
"@types/react": "16.9.5",
"@types/react-dom": "16.9.1",
"@types/react-redux": "^7.1.4",
"@types/react-router-dom": "^5.1.0",
"@types/redux-logger": "^3.0.7",
"@types/swiper": "^4.4.5",
"axios": "^0.19.0",
"gh-pages": "^2.1.1",
"medium-zoom": "^1.0.4",
"node-modules": "^1.0.1",
"react": "^16.10.2",
"react-dom": "^16.10.2",
"react-redux": "^7.1.1",
"react-router-dom": "^5.1.2",
"react-scripts": "3.2.0",
"redux": "^4.0.4",
"redux-logger": "^3.0.6",
"redux-thunk": "^2.3.0",
"swiper": "^5.0.4",
"typesafe-actions": "^4.4.2",
"typescript": "3.6.3"
```

**react**  
**redux, react-redux**: 메인 스토어  
**redux-logger**: 리덕스 로깅 미들웨어  
**redux-thunk**: 비동기 처리를 위한 리덕스 미들웨어  
**typescript**  
**typesafe-actions**: 리덕스액션 관련 라이브러리  
**swiper**: 슬라이더
**axios**: API통신 라이브러리  
**medium-zoom**: 이미지 라이브러리
