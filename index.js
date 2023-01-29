var flag = 0;
function mod() {
  if (flag == 0) {
    document.getElementById("cont").style.backgroundColor = "#f2dec9";
    document.getElementById("toggler").style.border = "1px solid black";
    document.getElementById("toggler").style.justifyContent = "end";
    document.getElementById("inner").style.border = "1px solid black";
    document.getElementById("inner").style.backgroundColor = "black";
    document.getElementById("screen").style.backgroundColor = "#d3bda5";
    const boxes = document.querySelectorAll(".button");
    boxes.forEach((button) => {
      button.style.boxShadow = "0px 5px 10px 0px #c9b095";
    });
    const boxe = document.querySelectorAll(".spbutton");
    boxe.forEach((button) => {
      button.style.boxShadow = "0px 5px 10px 0px #c9b095";
    });
    document.getElementById("ad").style.boxShadow = "0px 5px 10px 0px #c9b095";
    document.getElementById("cont").style.boxShadow =
      "0px 5px 10px 0px #c9b095";
    document.getElementById("screen").style.boxShadow =
      "0px 5px 10px 0px #c9b095";
    document.getElementById("buttns-cont").style.color = "black";
    document.getElementById("top").style.color = "black";
    document.getElementById("state").style.color = "black";
    document.getElementById("ans").style.color = "black";

    flag = 1;
  } else {
    document.getElementById("cont").style.backgroundColor = "#764abc";
    document.getElementById("toggler").style.border = "1px solid white";
    document.getElementById("toggler").style.justifyContent = "start";
    document.getElementById("inner").style.border = "1px solid white";
    document.getElementById("inner").style.backgroundColor = "white";
    document.getElementById("screen").style.backgroundColor = "#6c41b1";
    const boxes = document.querySelectorAll(".button");
    boxes.forEach((button) => {
      button.style.boxShadow = "0px 5px 10px 0px #47257e";
    });
    const boxe = document.querySelectorAll(".spbutton");
    boxe.forEach((button) => {
      button.style.boxShadow = "0px 5px 10px 0px #47257e";
    });
    document.getElementById("ad").style.boxShadow = "0px 5px 10px 0px #47257e";
    document.getElementById("cont").style.boxShadow =
      "0px 5px 10px 0px #47257e";
    document.getElementById("screen").style.boxShadow =
      "0px 5px 10px 0px #47257e";
    document.getElementById("buttns-cont").style.color = "white";
    document.getElementById("top").style.color = "white";
    document.getElementById("state").style.color = "white";
    document.getElementById("ans").style.color = "white";
    flag = 0;
  }
}
var count = 0;
var curr = "";
var eq = 0;
var ans = 0;
var st = "";
var doe = true;
function up(val) {
  var di = document.getElementById("ans");
  di.innerHTML = val;
}
function dp(val) {
  var di = document.getElementById("state");
  di.innerHTML = val;
}
function digit(digi) {
  curr += digi;
  up(curr);
  st = st + digi;
  dp(st);
}
function one() {
  digit("1");
}
function two() {
  digit("2");
}
function three() {
  digit("3");
}
function four() {
  digit("4");
}
function five() {
  digit("5");
}
function six() {
  digit("6");
}
function seven() {
  digit("7");
}
function eight() {
  digit("8");
}
function nine() {
  digit("9");
}
function zero() {
  if (curr[curr.length - 1] >= "0" && curr[curr.length - 1] <= "9") {
    digit("0");
  } else {
    if (st.length > 0) {
      digit("0");
    }
    up("0");
  }
}
function ac() {
  st = "";
  dp("0");
  curr = "";
  up("0");
}
function operand(op) {
  if (st[st.length - 1] < "0" || st[st.length - 1] > "9") {
    st = st.slice(0, -1);
  }
  st = st + op;
  curr = "";
  up("0");
  dp(st);
}
function add() {
  if (st.length > 0) {
    operand("+");
  }
}
function sub() {
  operand("-");
}
function mul() {
  if (st.length > 0) {
    operand("*");
  }
}
function devide() {
  if (st.length > 0) {
    operand("/");
  }
}
function rem() {
  if (st.length > 0) {
    operand("%");
  }
}
function dot() {
  if (st[st.length - 1] >= "0" && st[st.length - 1] <= "9") {
    st = st + ".";
    curr += ".";
  }
  if (st.length == 0) {
    st = st + "0.";
    curr = curr + "0.";
  }
  up(curr);
  dp(st);
}

function equal() {
  doe = false;
  var di = document.getElementById("ans");
  if (st[st.length - 1] >= "0" && st[st.length - 1] <= "9") {
  } else {
    st = st.slice(0, -1);
  }
  var to = eval(st);
  if (!to) {
    to = 0;
  }
  curr = "";
  up(curr);
  di.innerHTML = to;
}

function cut() {
  if (st.length > 0) {
    st = st.slice(0, -1);
    dp(st);
  }
  if (st.length == 0) {
    dp("0");
  }
}
