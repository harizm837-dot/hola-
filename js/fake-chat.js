const chat = document.getElementById("chat");
const users = ["🔥Bat","💎VIP","👀User77","FoxFan"];

setInterval(()=>{
  const msg = document.createElement("div");
  msg.className="msg";
  msg.textContent = users[Math.random()*users.length|0] + ": WOW 🔥🔥";
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
  if(chat.children.length>20) chat.removeChild(chat.firstChild);
},1200);
