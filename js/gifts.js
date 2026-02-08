function sendGift(){
  let g=document.createElement("div");
  g.innerText="🎁 GIFT!";
  g.className="gift";
  document.body.appendChild(g);
  setTimeout(()=>g.remove(),1000);
}
