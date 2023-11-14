//이미지 슬라이드
window.onload = function(){
  let picture = ["images/header0.jpg", "images/header1.jpg",
  "images/header2.jpg"];
  let picIdx = 0;

showSlide();

function showSlide(){
  document.getElementById("pic").src = picture[picIdx];
  picIdx += 1;
  if(picIdx == picture.length){
    picIdx = 0;
  }
  setTimeout(showSlide, 2000);
  }
}


setInterval(myWatch, 1000);

function myWatch(){
   const now = new Date();
   let time = now.toLocaleTimeString(); //시간만 출력
   console.log(time);

   let watch = document.getElementById("demo")
   watch.innerHTML = time;
   watch.style.color = "#819ca7;";
}
// 이미지 슬라이드
let imgIndex = 0;
let position = 0;
const IMG_WIDTH = 438;
const $btnPrev = document.querySelector(".btn-prev");
const $btnNext = document.querySelector(".btn-next");
const $slideImgs = document.querySelector(".slide-images");

let prev = function () {
  if (imgIndex > 0) {
    $btnNext.removeAttribute("disabled");
    position += IMG_WIDTH;
    $slideImgs.style.transform = `translateX(${position}px)`;
    imgIndex = imgIndex - 1;
  }
  if (imgIndex == 0) {
    $btnPrev.setAttribute("disabled", "true");
  }
};

let next = function () {
  if (imgIndex < 5) {
    $btnPrev.removeAttribute("disabled");
    position -= IMG_WIDTH;
    $slideImgs.style.transform = `translateX(${position}px)`;
    $slideImgs.style.transition = "transform .5s ease-out";
    imgIndex = imgIndex + 1;
  }
  if (imgIndex == 4) {
    $btnNext.setAttribute("disabled", "true");
  }
};

let init = function () {
  $btnPrev.setAttribute("disabled", "true");
  $btnPrev.addEventListener("click", prev);
  $btnNext.addEventListener("click", next);
};

init();