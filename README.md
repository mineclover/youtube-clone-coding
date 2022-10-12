# youtube-clone-coding

유튜브 클론 코딩입니다

Demo Link : 아직 없음

## Skills & Stacks

- Sass
- git flow

## How to install Start

`sass --watch scss/style.scss css/style.css`  
퍼블리싱은 CSS 로 함

## Progress

- 검색 기록창 검색 창 foucs 시 활성화
- 상단 태그 클릭시 메뉴 변경
- 컨텐츠에 마우스 호버 시 시간 표시 변경
- 무한 스크롤 ( 바닐라 )
- 더미데이터 생성기
- 더미데이터 배치 장치
  - lazy 속성을 넣긴 했는데 이미 가져온 데이터 쓰는거여서 딜레이가 거의 없다 싶이 한다
- 사이즈 조절하면 반응형 사이즈 조절 (JS > 설명 안되는 현상이 있어서 확인한 결과 잘못된 코드 였어서 수정했음)
- 삭제 누르면 삭제되고 input에 입력하고 엔터하면 저장되는 동작 구현
  > 삭제된 검색 데이터를 삭제하고 , 새로운 데이터를 가져오는 구조 구현 중

## Reference

[Youtube](https://www.youtube.com/?gl=KR)

## 있어야 할 것 같은 버그 개선 기능

- 정말 가끔 (스페이스에 동전 꼽는 등 막 쓰다보면 ) 무한로딩이 먹통됨 , 옵저버가 비어있으면 다시 넣어주게 하면 해결 될 것 같음
