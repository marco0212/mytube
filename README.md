# MYTUBE

Youtube API를 사용해 유투브의 핵심기능들을 카피한 웹 어플리케이션.

React.js React-router-dom을 활용해서 구현.

[사이트 바로가기](https://marco0212.github.io/mytube/)

## Route 별 설명

- Home(/) : 첫 화면으로 가장 인기 있는 동영상들을 호출하고 화면에 출력.

- Watch(/watch/:id) : id를 통해 비디오 정보를 응답 받고 화면에 영상을 임베드, 관련 정보를 렌더링. 사이드 바에서 해당 ID 비디오와 연관 비디오들을 추가로 호출하여 표시

- Search(/search/:keyword) : 입력 받은 keyword로 검색결과의 비디오를 출력.

## 예정 작업

- [ ] 비디오 리스트에서 최하단까지 스크롤이 갔을 때 자동으로 다음 리스트들을 호출해서 렌더링 할 수 있도록 (무한 스크롤)
- [ ] 리액트 Hook 적용
- [ ] 스타일 컴포넌트 적용
- [ ] React Native로 모바일 어플리케이션 빌드
