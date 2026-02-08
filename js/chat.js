function initChat(){
  let c=document.getElementById("chat");
  setInterval(()=>{
    let m=document.createElement("div");
    m.innerText=["🔥 Nice","😂 LOL","💎 VIP here","🎁 Gift!"][Math.floor(Math.random()*4)];
    c.appendChild(m);
    c.scrollTop=c.scrollHeight;
  },1500);
}
