// function on click
function clickMe() {
  var musicBox = new Audio("sounds/happy-birthday-music-box.wav");
  musicBox.play();
  var happyBirthday = new Audio("sounds/happy-birthday-crowd.wav");
  happyBirthday.play();
}

document.querySelector(".music-box").addEventListener("click", clickMe);
