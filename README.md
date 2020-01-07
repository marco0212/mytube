# MYTUBE

[https://marco0212.github.io/mytube/#/](https://marco0212.github.io/mytube/#/)

MyTube는 유투브의 핵심 기능을 클론한 웹 어플리케이션입니다. 기능적으로 새롭게 개발한 부분은 없고 기존 유투브의 기능을 정확하게 동작하는 것에 목표를 두고 개발했습니다. 개발시 중요하게 생각한 부분은 컴포넌트 재사용성과 UX를 고려한 UI 입니다.

## How it Works

- 웹 어플리케이션의 첫 화면은 유투브 API에서 제공하는 Most Popular 비디오 리스트를 출력합니다. 최대 출력값은 6개로 노출되고 있고 하단에 More Video 버튼을 클릭하면 NextPageToken을 사용해 추가 6개의 비디오를 추가로 요청 처리해서 렌더하고 있습니다.
- 비디오 플레이 페이지는 URL의 파라미터로 전달 받은 유투브 비디오 ID에 의존해서 화면을 구성합니다. 우측 사이드바는 해당 영상과 연관 영상을 표시하고 있습니다. 또한 핵심 기능중 하나인 나중에 볼 동영상 저장 버튼을 누르면 Firebase database와 연결되어 해당 영상을 저장할 수 있습니다.
- MyTube는 검색 기능도 지원합니다. 헤더의 입력칸에 키워드를 검색하면 키워드 Match 비디오를 4개 출력합니다.
- Watch Later 페이지는 저장된 동영상을 한번에 볼 수 있습니다. 각 아이템은 우측 상단 X 버튼을 통해 삭제 가능합니다. 삭제된 내용은 DB에 바로 반영되어 복구가 불가능합니다.

## Technologies Used

HTML, CSS(Flex, Grid else), Styled Components, React, React Hook, React Router Dom, Firebase Database, Youtube Data API
