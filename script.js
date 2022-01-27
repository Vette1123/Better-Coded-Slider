const imgsContainer = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const imgs = document.querySelectorAll("#imgs img");

let idx = 0;
let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > imgs.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = imgs.length - 1;
  }
  imgsContainer.style.transform = `translateX(${-idx * 90}vw)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});

rightBtn.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});
