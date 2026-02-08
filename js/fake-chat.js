const chat=document.getElementById("chat");
const users=["🔥Bat","💎VIP_Luna","👑GoldMan","FoxFan"];

setInterval(()=>{
  if(window.muted) return;
  if(window.slowMode && Math.random()>.3) return;

  const m=document.createElement("div");
  m.className="msg";
  m.textContent=users[Math.random()*users.length|0]+": VIP vibes ✨";
  chat.appendChild(m);

  if(chat.children.length>18)
    chat.removeChild(chat.firstChild);

},1200);
