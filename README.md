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

- 사이드바 안에 푸터가 있음 , 실제 사이트 구조와 같게 하는데 섹션 구분을 위해 그렇게 넣었음
- 검색 기록창 검색 창 foucs 시 활성화
- 상단 태그 클릭시 메뉴 변경
- 컨텐츠에 마우스 호버 시 시간 표시 변경
- 무한 스크롤 ( 바닐라 )
- 더미데이터 생성기
- 더미데이터 배치 장치
  - lazy 속성을 넣긴 했는데 이미 가져온 데이터 쓰는거여서 딜레이가 거의 없다 싶이 한다
- 사이즈 조절하면 반응형 사이즈 조절 (JS > 설명 안되는 현상이 있어서 확인한 결과 잘못된 코드 였어서 수정했음)
- 삭제 누르면 삭제되고 input에 입력하고 엔터하면 저장되는 동작 구현
- 삭제된 검색 데이터를 삭제하고 , 닫고 다시 열면 복구 ( 데이터 새로 가져오는 건 구현 안함 .. )
  > 머지하다 오류난 것 처리 잘못해서 다시 작업해서 올림
  > 충돌났는데 브런치왔다갔다했을 때 차이 안보여서 똑같은 걸로 착각하고 이전 것을 지움....
  >
  > > 동일한 문제 발생 시 , develop 에서 git merge {name} 또는 git fetch {name} 이후 git merge FETCH_HEAD 하는식으로 ... 아마 해결될 것으로 보임 ( 확인 안됨 ) fetch의 방식이 변경사항을 손실 없이 비교하는 방식인 것으로 기억하고 있으므로 아마 변경사항에 대한 선택적 병합을 할 것으로 예상됨
- 비디오 옆에 케밥 버튼 추가, 장문 텍스트의 경우 , ...으로 생략하는 것과 최대 줄 수 구현해보기 ( 14:40 ~ 19:00)
- 비디오 아티클에 케밥 버튼 추가하고, 더미 데이터 제작 방식을 개선함
- 사이드바 기능 추가 -> 토글 , 되면 미디어 쿼리도 ( 14:00 ~ )

## Reference

[Youtube](https://www.youtube.com/?gl=KR)

## 있어야 할 것 같은 버그 개선 기능

- 정말 가끔 (스페이스에 동전 꼽는 등 막 쓰다보면 ) 무한로딩이 먹통됨 , 옵저버가 비어있으면 다시 넣어주게 하면 해결 될 것 같긴 하다
