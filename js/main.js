const io = new IntersectionObserver((entry, observer)=>{
  //console.log(entry[0].boundingClientRect.y);
  if (entry[0].boundingClientRect.y > 500 && entry[0].boundingClientRect.y < 2000) {
    extendLoad(); //영상 리스트 생성
    io.disconnect(); // 옵저버 삭제
    resetObserve(); // 옵저버 생성
  }
  //나타날 때, 사라질 때 선언될 때 값이 옵저버에 저장되고 콜백도 실행된다
  //entry 는 배열로 저장된다
  
},{threshold: 0});

function resetObserve(){
  if(io.entry){
    io.disconnect();
  };
  
  const lastEl = document.querySelector('.primary-area').lastElementChild;
  io.observe(lastEl);
}



// 비활성화된 코드
function adRendom(){
  console.log('실행됨');
  let i = Math.floor(Math.random() * 9 + 1);
  document.querySelector('.ad .ad__img').style.backgroundImage = `url("ad/ad_0${i}.png")`;
  //-는 카멜로 대문자 변환? 
}

function videoElement(){
  let videoArea = document.querySelector('div.hide article.content');
  let setArea = document.querySelector('section.primary-area');

  let copyContent = videoArea.cloneNode(true);

  setArea.appendChild(copyContent);
}

function videoContainerGen(num){
  let i = 0
  while(i < num){
    videoElement();
    i++;
  }
}

function menuSet(name){
  let area = document.querySelector('.primary-area');
  area.innerHTML  = '';
  let charText = name +`.length`
  console.log(charText);
  videoContainerGen(eval(charText));
  contentSelector(name);
  
  //let filter = document.querySelectorAll('filter-item--active');
  let filter = document.querySelectorAll('.filter-item');
  filter.forEach( function(f){
    f.classList.remove('filter-item--active');
  });

  document.querySelector(`.filter-item.${name}`).classList.add('filter-item--active');
}


function extendLoad(){
  videoContainerGen(24);
  contentSelector('dumi');
}


function contentSelector(name){
  var list = document.querySelectorAll('.primary-area article.content');
  console.log(list.length);

  console.log(list[0]);
  
  
  if(name === 'dumi'){
    for(let i = 0;i <list.length;i++){
      videoGenerator(list[i],dumiGen(i));
    }
  }
  else{

    let charText = name +`.length`
    console.log(charText);
    let len = eval(charText);
    console.log(len);
    

    for(let i = 0;i <len;i++){
      let Temp = `${name}[${i}]`;
      console.log(Temp);
      if (i < len){
        videoGenerator(list[i],eval(Temp));
      }
      // else {
      //   videoGenerator(list[i],dumiGen(i));
      // }
    }
  }
}


function dumiGen(i){

  while (i >= dumi.length){
    videoRandomGen(1);
  }
  return dumi[i];
}


function videoGenerator(element,object) {

  //document.querySelector().innerHTML
  element.querySelector('.vidio_thumb').setAttribute("href",object.contentLink);
  element.querySelector('.content__img').setAttribute("src",object.thumbnail);
  element.querySelector('.content__logo').setAttribute("src",object.logo);
  element.querySelector('.content__title').setAttribute("href",object.contentLink);
  element.querySelector('.content__title').innerHTML = object.title ;
  element.querySelector('.content__info').innerHTML = `${object.view}${object.created}`;
  
  element.querySelector('.content__user').setAttribute("href",object.channelLink);
  element.querySelector('.content__live').style.display = object.live ? "block" : "none";
  element.querySelector('.content__user').innerHTML = `${object.username}`;
  element.querySelector('.material-icons.official').style.display = object.official ? "inline" : "none";
  element.querySelector('.video_time span').innerHTML = object.time;

  

  // console.log(object.thumbnail);
  // console.log(object.logo);
  // console.log(object.title);
  // console.log(object.username);
  // console.log(object.channelLink);
  // console.log(object.official );
  // console.log(object.view);
  // console.log(object.created);
  // console.log(object.live);
}


function adClose() {
  document.querySelector('.primary .ad .ad__img').style.display = 'none';
}




//https://inpa.tistory.com/entry/JS-%F0%9F%9A%80-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%82%B4%EB%A0%A4%EC%84%9C-%ED%8A%B9%EC%A0%95-%EC%98%81%EC%97%AD-%EA%B0%90%EC%A7%80%ED%95%98%EA%B8%B0
//자동 인식 갱신 실패



let searchInputEl = document.querySelector('.header__input');
let searchEl = document.querySelector(".input__block");
let focusTracker ,mouseTracker = 0;

searchEl.addEventListener('mouseenter',()=>{
  console.log('enter');
  // 들어오다
  mouseTracker = 1;
}
);

searchEl.addEventListener('mouseleave',()=>{
  console.log('leave');
  // 나가다
  mouseTracker = 0;
}
);

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  focusTracker = 1;
});
searchInputEl.addEventListener('blur', function() {
  focusTracker = 0;
  if(mouseTracker === 0){
    searchEl.classList.remove('focused');
  }
  else{
    searchInputEl.focus();
  }
});

let primaryColumus = 4;

function heightController(){
  let vidioEl = document.querySelector('.primary-area .content .vidio_thumb');
  
  let primaryEl = document.querySelector('.primary-area');
  //console.log(vidioEl.getBoundingClientRect().width);
  primaryEl.style.setProperty('--primary-columus-height',`${vidioEl.getBoundingClientRect().width * 0.6}`);
  //primaryEl.style.setProperty('--primary-columus',`${floor(vidioEl.getBoundingClientRect().width / 300)}`);
  //console.log(vidioEl.getBoundingClientRect().width * 0.6);

  
}


window.addEventListener('resize',columusController);

function columusController(){
  //Javascript

  heightController()



  let vidioEl = document.querySelector('.primary-area .content .vidio_thumb');
  let primaryEl = document.querySelector('.primary-area');
  console.log(vidioEl.getBoundingClientRect().width);
  
  // 계속 떨리는 문제가 발생한다 primaryEl 영역 크기 별 조건을 추가하자
  if ( primaryEl.getBoundingClientRect().width < 560 ){
    
    if (vidioEl.getBoundingClientRect().width < 240) {
      primaryColumus = 1;
      primaryEl.style.setProperty('--primary-columus',`${primaryColumus}`);
    }

    else if (vidioEl.getBoundingClientRect().width > 320) {
      primaryColumus = 1;
      primaryEl.style.setProperty('--primary-columus',`${primaryColumus}`);
    }
  }
  else if ( primaryEl.getBoundingClientRect().width > 559 && primaryEl.getBoundingClientRect().width < 770){
    
    if (vidioEl.getBoundingClientRect().width < 240) {

      primaryColumus = 1;
      primaryEl.style.setProperty('--primary-columus',`${primaryColumus}`);
      console.log(2);

    }
    else if (vidioEl.getBoundingClientRect().width > 320) {
      primaryColumus = 2;
      primaryEl.style.setProperty('--primary-columus',`${primaryColumus}`);
      console.log(2);
    }
  }

  else if ( primaryEl.getBoundingClientRect().width > 769 && primaryEl.getBoundingClientRect().width < 1150){
    
    if (vidioEl.getBoundingClientRect().width < 240) {
      primaryColumus = 2;
      primaryEl.style.setProperty('--primary-columus',`${primaryColumus}`);
      console.log(3);

    }
    else if (vidioEl.getBoundingClientRect().width > 380) {
      primaryColumus = 3;
      primaryEl.style.setProperty('--primary-columus',`${primaryColumus}`);
      console.log(3);
    }
  }
  else if ( primaryEl.getBoundingClientRect().width > 1149 && primaryEl.getBoundingClientRect().width < 1530){
    
    if (vidioEl.getBoundingClientRect().width < 240) {
      primaryColumus = 3;
      primaryEl.style.setProperty('--primary-columus',`${primaryColumus}`);
      console.log(4);

    }
    else if (vidioEl.getBoundingClientRect().width > 320) {
      primaryColumus = 4;
      primaryEl.style.setProperty('--primary-columus',`${primaryColumus}`);
      console.log(4);
    }
  }

  else if ( primaryEl.getBoundingClientRect().width > 1529 && primaryEl.getBoundingClientRect().width < 1930){
    
    if (vidioEl.getBoundingClientRect().width < 300) {
      primaryColumus = 4;
      primaryEl.style.setProperty('--primary-columus',`${primaryColumus}`);
      console.log(5);
    }

    else if (vidioEl.getBoundingClientRect().width > 800) {
      primaryColumus = 4;
      primaryEl.style.setProperty('--primary-columus',`${primaryColumus}`);
      console.log(5);
    }
    //grid 1칸에서 full 사이즈로 넘어갈 때 아티클 하나의 사이즈가 일시적으로 1500까지 넘어가게 됨
    // 그렇게 되면 아래의 400이 실행되게되면서 소위 말하는 원하지 않는 동작을 함 그래서 > 800을 부여함

    else if (vidioEl.getBoundingClientRect().width > 400) {
      primaryColumus = 5;
      primaryEl.style.setProperty('--primary-columus',`${primaryColumus}`);
      console.log(5);
    }

    else if (vidioEl.getBoundingClientRect().width > 360) {
      primaryColumus = 4;
      primaryEl.style.setProperty('--primary-columus',`${primaryColumus}`);
      console.log(5);

    }
    
  }
  else if ( primaryEl.getBoundingClientRect().width > 1929 && primaryEl.getBoundingClientRect().width < 2400){
    
    if (vidioEl.getBoundingClientRect().width < 310) {
      primaryColumus = 5;
      primaryEl.style.setProperty('--primary-columus',`${primaryColumus}`);
      console.log(6);

    }
    else if (vidioEl.getBoundingClientRect().width > 440) {
      primaryColumus = 6;
      primaryEl.style.setProperty('--primary-columus',`${primaryColumus}`);
      console.log(6);
    }
  }
}


function onHtml(){
  menuSet("dumi");
  //adRendom();
  heightController();
  columusController();
  resetObserve();
}

function searchremover(num){
  let searchlistEl = document.querySelectorAll('.searched-list .searched-list__li');
  let searchdataEl = searchlistEl[num].querySelector('.search-data');
  
  let deleteMsg = searchlistEl[num].querySelector('.delete-msg');
  
  searchdataEl.style.display = 'none';
  deleteMsg.style.display = 'flex';


}