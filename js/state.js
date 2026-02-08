let state = JSON.parse(localStorage.getItem("hola")) || {
  tokens: 1000,
  role: "user"
};
function save(){localStorage.setItem("hola",JSON.stringify(state))}
