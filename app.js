const $ = document;
let playBtn = $.querySelectorAll(".bx-play");
let audioElem = $.querySelectorAll("audio");

playBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let data = event.target.dataset.name;
    audioElem.forEach((music) => {
      music.pause();
      music.currentTime = 0;
      if (music.dataset.name == data) {
        console.log(music);
        music.play();
      }
    });
  });
});
