document.addEventListener("keydown", (e) => {
  // Block Ctrl shortcuts
  if (e.ctrlKey) {
    e.preventDefault();
  }

  // Block specific keys
  const blockedKeys = [
    "F1", "F5", "F12",
    "Tab", "Escape"
  ];

  if (blockedKeys.includes(e.key)) {
    e.preventDefault();
  }
});

//Escape
const esc = document.getElementById("esc");

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    esc.style.backgroundColor = "rgb(0, 255, 0)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key=== "Escape") {
    esc.style.backgroundColor = "";
  }
});

//F1
const f1 = document.getElementById("f1");

document.addEventListener("keydown", (e) => {
  if (e.key === "F1") {
    f1.style.backgroundColor = "rgb(0, 255, 0)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "F1") {
    f1.style.backgroundColor = "";
  }
});

//F2
const f2 = document.getElementById("f2");

document.addEventListener("keydown", (e) => {
  if (e.key === "F2") {
    f2.style.backgroundColor = "rgb(0, 255, 0)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "F2") {
    f2.style.backgroundColor = "";
  }
});

//F3
const f3 = document.getElementById("f3");

document.addEventListener("keydown", (e) => {
  if (e.key === "F3") {
    f3.style.backgroundColor = "rgb(0, 255, 0)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "F3") {
    f3.style.backgroundColor = "";
  }
});

//F4
const f4 = document.getElementById("f4");

document.addEventListener("keydown", (e) => {
  if (e.key === "F4") {
    f4.style.backgroundColor = "rgb(0, 255, 0)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "F4") {
    f4.style.backgroundColor = "";
  }
});

//F5
const f5 = document.getElementById("f5");

document.addEventListener("keydown", (e) => {
  if (e.key === "F5") {
    f5.style.backgroundColor = "rgb(0, 255, 0)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "F5") {
    f5.style.backgroundColor = "";
  }
});

//F6
const f6 = document.getElementById("f6");

document.addEventListener("keydown", (e) => {
  if (e.key === "F6") {
    f6.style.backgroundColor = "rgb(0, 255, 0)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "F6") {
    f6.style.backgroundColor = "";
  }
});

//F7
const f7 = document.getElementById("f7");

document.addEventListener("keydown", (e) => {
  if (e.key === "F7") {
    f7.style.backgroundColor = "rgb(0, 255, 0)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "F7") {
    f7.style.backgroundColor = "";
  }
});

//F8
const f8 = document.getElementById("f8");

document.addEventListener("keydown", (e) => {
  if (e.key === "F8") {
    f8.style.backgroundColor = "rgb(0, 255, 0)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "F8") {
    f8.style.backgroundColor = "";
  }
});

//F9
const f9 = document.getElementById("f9");

document.addEventListener("keydown", (e) => {
  if (e.key === "F9") {
    f9.style.backgroundColor = "rgb(0, 255, 0)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "F9") {
    f9.style.backgroundColor = "";
  }
});

//F10
const f10 = document.getElementById("f10");

document.addEventListener("keydown", (e) => {
  if (e.key === "F10") {
    f10.style.backgroundColor = "rgb(0, 255, 0)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "F10") {
    f10.style.backgroundColor = "";
  }
});

//F11
const f11 = document.getElementById("f11");

document.addEventListener("keydown", (e) => {
  if (e.key === "F11") {
    f11.style.backgroundColor = "rgb(0, 255, 0)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "F11") {
    f11.style.backgroundColor = "";
  }
});

//F12
const f12= document.getElementById("f12");

document.addEventListener("keydown", (e) => {
  if (e.key === "F12") {
    f12.style.backgroundColor = "rgb(0, 255, 0)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "F12") {
    f12.style.backgroundColor = "";
  }
});

//Print Screen
const printscreen = document.getElementById("prtsc");

document.addEventListener("keydown", (e) => {
  if (e.key === "PrintScreen") {
    printscreen.style.backgroundColor = "rgb(0, 255, 0)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "PrintScreen") {
    printscreen.style.backgroundColor = "";
  }
});
