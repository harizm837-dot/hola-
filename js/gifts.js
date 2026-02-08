function sendGift(){
  playGift();
  const g=document.createElement("div");
  g.textContent="🎁";
  g.style.position="fixed";
  g.style.left=Math.random()*80+"%";
  g.style.bottom="0";
  g.style.fontSize="32px";
  document.body.appendChild(g);

  g.animate([
    {transform:"translateY(0)",opacity:1},
    {transform:"translateY(-300px)",opacity:0}
  ],{duration:1200});

  setTimeout(()=>g.remove(),1200);
}
