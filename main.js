const Colorbutton = document.getElementById("color-button");
const Backbutton = document.getElementById("back-button");
const Changebutton = document.getElementById("change-button2");
const Changebutton3 = document.getElementById("change-button3");

const display = document.getElementById("display");

let count = 0;

Colorbutton.onclick = function () {
  figure.classList.add("change-color1");
};

Changebutton.onclick = function () {
  hidesquare.classList.add("addnametext");
};

let id = null;

const countDown = function () {
  count += 1;
  display.textContent = count / 100;

  if (count >= 500) {
    Changebutton3.textContent = "朝だよ！";
    clearInterval(id);
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000000";
    document.body.style.textShadow = "none";

    document.getElementById("change-brack").style.backgroundColor = "#fff";
    document.getElementById("change-brack").style.color = "#000000";
    document.getElementById("change-brack").style.textShadow = "none";
    hidesquare.classList.add("sunbox");
    hidesquare.classList.remove("addnametext");
  }
};

Changebutton3.onclick = function () {
  /*カウントダウンスタートその後全体の色味を変えてみる*/
  if (id === null) {
    id = setInterval(countDown, 10);
  }
};
