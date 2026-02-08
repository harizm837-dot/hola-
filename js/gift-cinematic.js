let combo=0,comboTimer=null;

function sendGift(vip=false){
  if(state.balance<10){
    alert("No tokens");
    return;
  }
  state.balance-=10;
  save();

  combo++;
  playGift();

  if(comboTimer) clearTimeout(comboTimer);
  comboTimer=setTimeout(()=>combo=0,2000);

  burstParticles(vip || state.vip);
  floatGift(vip || state.vip);
  flashScreen();

  if(combo>=3 && state.fx) megaCombo();
}

function burstParticles(vip){
  for(let i=0;i<20;i++){
    const p=document.createElement("div");
    p.className="particle";
    p.textContent=vip?"💎":"✨";
    p.style.left="50%";
    p.style.top="60%";
    document.body.appendChild(p);
    p.animate([
      {transform:"translate(0,0)",opacity:1},
      {transform:`translate(${Math.random()*400-200}px,${Math.random()*-300}px)`,opacity:0}
    ],{duration:1200});
    setTimeout(()=>p.remove(),1200);
  }
}

function floatGift(vip){
  const g=document.createElement("div");
  g.className="gift-float";
  g.textContent=vip?"💎":"🎁";
  document.body.appendChild(g);
  g.animate([
    {transform:"translate(-50%,0)",opacity:1},
    {transform:"translate(-50%,-350px)",opacity:0}
  ],{duration:1500});
  setTimeout(()=>g.remove(),1500);
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
  c.textContent="🔥 COMBO x"+combo;
  document.body.appendChild(c);
  setTimeout(()=>c.remove(),1200);
}
