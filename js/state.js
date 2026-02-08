const state={
  balance: Number(localStorage.balance) || 1000,
  vip: localStorage.vip==="1",
  fx: localStorage.fx==="1"
};

function save(){
  localStorage.balance=state.balance;
  localStorage.vip=state.vip?"1":"0";
  localStorage.fx=state.fx?"1":"0";
}
