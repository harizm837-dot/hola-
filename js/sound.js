const snd=new Audio("https://assets.mixkit.co/sfx/preview/mixkit-game-bonus-reached-2065.mp3");
function playGift(){snd.currentTime=0;snd.play()}
function toggleSound(){snd.muted=!snd.muted}
