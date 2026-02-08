const bal=document.getElementById("balance");
update();

function update(){
  bal.textContent="Balance: "+state.balance;
}

function buy(type,cost){
  if(state.balance<cost){
    alert("Not enough tokens");
    return;
  }

  state.balance-=cost;

  if(type==="vip") state.vip=true;
  if(type==="fx") state.fx=true;

  save();
  update();
  alert("Unlocked!");
}
