const chat=document.getElementById("chat");
const users=["🔥Bat","💎VIP_Luna","FoxFan"];

setInterval(()=>{
  const m=document.createElement("div");
  m.className="msg";
  m.textContent=users[Math.random()*users.length|0]+": 🔥";
  chat.appendChild(m);
  if(chat.children.length>18) chat.removeChild(chat.firstChild);
},1200);
