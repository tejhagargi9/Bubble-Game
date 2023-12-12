var timer = 60;
var score = 0;
var tl = gsap.timeline();

function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 180; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.querySelector("#cbottom").innerHTML = clutter;
}

function playGame() {
  document.querySelector(".rulesContainer").style.display = "none";
  document.querySelector("#main").style.display = "flex";
  document.querySelector("#container").style.display = "block";

  tl.from("#container", {
    scale: -0.5,
    duration: 0.8,
    opacity: 0,
  });

  runTimer();
}

function howToPlay() {
  document.querySelector(".rulesContainer").style.display = "none";
  document.querySelector(".howToPlay").style.display = "block";
  gsap.from(".howToPlay ul li", {
    duration: 1.8,
    opacity: 0,
  });
}

function goBack() {
  document.querySelector(".howToPlay").style.display = "none";
  document.querySelector(".rulesContainer").style.display = "block";
}

function runTimer() {
  var timerinterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").innerHTML = timer;
    } else {
      clearInterval(timerinterval);
      document.querySelector("#cbottom").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

function hitChanger() {
  document.querySelector("#hitval").innerHTML = Math.floor(Math.random() * 10);
}

var score = 0;
document.querySelector("#cbottom").addEventListener("click", (dets) => {
  var targetValue = Number(dets.target.innerHTML);
  var hitvalue = Number(document.querySelector("#hitval").innerHTML);
  if (hitvalue != targetValue) {
  }
  if (hitvalue === targetValue) {
    score += 10;
    document.querySelector("#scoreval").innerHTML = score;

    makeBubble();
    hitChanger();
  }
});

makeBubble();
hitChanger();

gsap.from(".rulesContainer h1", {
  scale: -0.5,
  duration: 1,
  opacity: 0,
});

gsap.from(".btns", {
  scale: 0,
  duration: 1,
  opacity: 0,
});
