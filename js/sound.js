const snd = new Audio("https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg");

function playGift(){
  snd.currentTime=0;
  snd.play();
}

function toggleSound(){
  snd.muted=!snd.muted;
}
