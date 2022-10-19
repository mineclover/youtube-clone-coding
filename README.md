# youtube-clone-coding

유튜브 클론 코딩입니다

Demo Link : https://grand-cajeta-96b612.netlify.app/

## Skills & Stacks

- Sass
- git flow

## How to install Start

`sass --watch scss/style.scss css/style.css`  
퍼블리싱은 CSS 로 함

## Progress

- 사이드바 안에 푸터가 있음 , 실제 사이트 구조와 같게 하는데 섹션 구분을 위해 그렇게 넣었습니다
- 검색 기록창 검색 창 foucs 시 활성화, 누르면 삭제
- 컨텐츠에 마우스 호버 시 시간 표시 변경
- 무한 스크롤 ( 바닐라 )
- 더미데이터 생성기 ( 야메 JSON 어떻게 쓰는지 알고 싶다 )
- 더미데이터 배치 장치
  - lazy 속성을 넣긴 했는데 유튜브에서 처럼 지연되는 동작이 있다가 로딩 다되면 나오는 것이 안되서 아쉽다
- 삭제 누르면 삭제되고 input에 입력하고 엔터하면 저장되는 동작 구현

  > 하려했는데.. 너무 js인 것 같아서 안했습니다..

- 비디오 옆에 케밥 버튼 추가, 장문 텍스트의 경우 , ...으로 생략하는 것과 최대 줄 수 구현해보기 ( 14:40 ~ 19:00)
- git log : babc763acf61bc4bd1c8df72e37524c3e4ed30d6
- 비디오 아티클에 케밥 버튼 추가하고, 더미 데이터 제작 방식을 개선함
- 사이드바 기능 추가 -> 토글 , 되면 미디어 쿼리도 ( 14:00 ~ 19:24 )
- git log : e2ae7185cc8e3b8218f0d0a8acfe51eb3188502c
  > 사이드 바 토글 추가 , 푸터 조금 다듬었음 , 재생목록 스타일 작성 , 구동을 위한 js
  > 컨텐츠 업로드를 위해 .gitignore 수정

## Reference

[Youtube](https://www.youtube.com/?gl=KR)

## 있어야 할 것 같은 버그 개선 기능

- 정말 가끔 (스페이스에 동전 꼽는 등 막 쓰다보면 ) 무한로딩이 먹통됨 , 옵저버가 비어있으면 다시 넣어주게 하면 해결 될 것 같긴 하다
