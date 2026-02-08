let modOpen=false;
let muted=false;
let slow=false;

function toggleMod(){
  modOpen=!modOpen;
  document.getElementById("modPanel").classList.toggle("active");
}

function modAction(type){
  const chat=document.getElementById("chat");
  const msg=document.createElement("div");
  msg.className="msg system";

  if(type==="mute"){
    muted=!muted;
    msg.textContent= muted ? "🔇 Chat muted by moderator" : "🔊 Chat unmuted";
  }

  if(type==="slow"){
    slow=!slow;
    msg.textContent= slow ? "🐢 Slow mode enabled" : "⚡ Slow mode disabled";
    window.slowMode=slow;
  }

  if(type==="kick"){
    msg.textContent="⛔ A user has been kicked";
  }

  if(type==="sys"){
    msg.textContent="📢 Please follow community rules";
  }

  chat.appendChild(msg);
}
