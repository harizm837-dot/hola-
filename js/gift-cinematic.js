let combo=0,comboTimer=null;

function sendGift(vip=false){
  combo++;
  playGift();

  if(comboTimer) clearTimeout(comboTimer);
  comboTimer=setTimeout(()=>combo=0,2000);

  burstParticles(vip);
  floatGift(vip);
  flashScreen();

  if(combo>=3) megaCombo();
}

function burstParticles(vip){
  for(let i=0;i<25;i++){
    const p=document.createElement("div");
    p.className="particle";
    p.textContent=vip?"💎":"✨";
    p.style.left="50%";
    p.style.top="60%";
    p.style.fontSize=vip?"22px":"18px";
    document.body.appendChild(p);

    const x=Math.random()*400-200;
    const y=Math.random()*-300;

    p.animate([
      {transform:"translate(0,0) scale(1)",opacity:1},
      {transform:`translate(${x}px,${y}px) scale(0)`,opacity:0}
    ],{duration:1200,easing:"ease-out"});

    setTimeout(()=>p.remove(),1300);
  }
}

function floatGift(vip){
  const g=document.createElement("div");
  g.className="gift-float";
  g.textContent=vip?"💎":"🎁";
  document.body.appendChild(g);

  g.animate([
    {transform:"translate(-50%,0) scale(1)",opacity:1},
    {transform:"translate(-50%,-360px) scale(1.5)",opacity:0}
  ],{duration:1600,easing:"cubic-bezier(.2,.8,.2,1)"});

  setTimeout(()=>g.remove(),1600);
}

function flashScreen(){
  const f=document.createElement("div");
  f.className="flash";
  document.body.appendChild(f);
  setTimeout(()=>f.remove(),300);
}

function megaCombo(){
  const c=document.createElement("div");
  c.className="combo";
  c.textContent="💎 VIP COMBO x"+combo;
  document.body.appendChild(c);
  setTimeout(()=>c.remove(),1200);
}
