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
    esc.style.backgroundColor = "rgb(115, 222, 255)";
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
    f1.style.backgroundColor = "rgb(115, 222, 255)";
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
    f2.style.backgroundColor = "rgb(115, 222, 255)";
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
    f3.style.backgroundColor = "rgb(115, 222, 255)";
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
    f4.style.backgroundColor = "rgb(115, 222, 255)";
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
    f5.style.backgroundColor = "rgb(115, 222, 255)";
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
    f6.style.backgroundColor = "rgb(115, 222, 255)";
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
    f7.style.backgroundColor = "rgb(115, 222, 255)";
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
    f8.style.backgroundColor = "rgb(115, 222, 255)";
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
    f9.style.backgroundColor = "rgb(115, 222, 255)";
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
    f10.style.backgroundColor = "rgb(115, 222, 255)";
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
    f11.style.backgroundColor = "rgb(115, 222, 255)";
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
    f12.style.backgroundColor = "rgb(115, 222, 255)";
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
    printscreen.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "PrintScreen") {
    printscreen.style.backgroundColor = "";
  }
});

//insert 
const insert = document.getElementById("insert");

document.addEventListener("keydown", (e) => {
  if (e.key === "Insert") {
    insert.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Insert") {
    insert.style.backgroundColor = "";
  }
});

//delete
const del = document.getElementById("delete");

document.addEventListener("keydown", (e) => {
  if (e.key === "Delete") {
    del.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Delete") {
    del.style.backgroundColor = "";
  }
});

//backquote
const backquote = document.getElementById("backquote");

document.addEventListener("keydown", (e) => {
  if (e.code === "Backquote") {
    backquote.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Backquote") {
    backquote.style.backgroundColor = "";
  }
});

//Number one
const one = document.getElementById("1");

document.addEventListener("keydown", (e) => {
  if (e.code === "Digit1") {
    one.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Digit1") {
    one.style.backgroundColor = "";
  }
});

//Number two
const two = document.getElementById("2");

document.addEventListener("keydown", (e) => {
  if (e.code === "Digit2") {
    two.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Digit2") {
    two.style.backgroundColor = "";
  }
});

//Number three
const three = document.getElementById("3");

document.addEventListener("keydown", (e) => {
  if (e.code === "Digit3") {
    three.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Digit3") {
    three.style.backgroundColor = "";
  }
});

//Number four
const four = document.getElementById("4");

document.addEventListener("keydown", (e) => {
  if (e.code === "Digit4") {
    four.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Digit4") {
    four.style.backgroundColor = "";
  }
});

//Number five
const five = document.getElementById("5");

document.addEventListener("keydown", (e) => {
  if (e.code === "Digit5") {
    five.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Digit5") {
    five.style.backgroundColor = "";
  }
});

//Number six
const six = document.getElementById("6");

document.addEventListener("keydown", (e) => {
  if (e.code === "Digit6") {
    six.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Digit6") {
    six.style.backgroundColor = "";
  }
});

//Number seven
const seven = document.getElementById("7");

document.addEventListener("keydown", (e) => {
  if (e.code === "Digit7") {
    seven.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Digit7") {
    seven.style.backgroundColor = "";
  }
});

//Number eight
const eight = document.getElementById("8");

document.addEventListener("keydown", (e) => {
  if (e.code === "Digit8") {
    eight.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Digit8") {
    eight.style.backgroundColor = "";
  }
});

//Number nine
const nine = document.getElementById("9");

document.addEventListener("keydown", (e) => {
  if (e.code === "Digit9") {
    nine.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Digit9") {
    nine.style.backgroundColor = "";
  }
});

//Number zero
const zero = document.getElementById("0");

document.addEventListener("keydown", (e) => {
  if (e.code === "Digit0") {
    zero.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Digit0") {
    zero.style.backgroundColor = "";
  }
});

//Underscore and minus
const minus = document.getElementById("minus");

document.addEventListener("keydown", (e) => {
  if (e.code === "Minus") {
    minus.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Minus") {
    minus.style.backgroundColor = "";
  }
});

//Plus and equal to
const equal = document.getElementById("equal");

document.addEventListener("keydown", (e) => {
  if (e.code === "Equal") {
    equal.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Equal") {
    equal.style.backgroundColor = "";
  }
});

//Backspace
const backsp = document.getElementById("backspace");

document.addEventListener("keydown", (e) => {
  if (e.code === "Backspace") {
    backsp.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Backspace") {
    backsp.style.backgroundColor = "";
  }
});

//Tab
const keytab = document.getElementById("tab");

document.addEventListener("keydown", (e) => {
  if (e.code === "Tab") {
   keytab.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Tab") {
     keytab.style.backgroundColor = "";
  }
});

//Q
const q = document.getElementById("q");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyQ") {
   q.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyQ") {
     q.style.backgroundColor = "";
  }
});

//W
const w = document.getElementById("w");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyW") {
   w.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyW") {
     w.style.backgroundColor = "";
  }
});

//Q
const letter_e = document.getElementById("e");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyE") {
   letter_e.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyE") {
     letter_e.style.backgroundColor = "";
  }
});

//R
const r = document.getElementById("r");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyR") {
   r.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyR") {
     r.style.backgroundColor = "";
  }
});

//T
const t = document.getElementById("t");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyT") {
   t.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyT") {
     t.style.backgroundColor = "";
  }
});

//Y
const y = document.getElementById("y");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyY") {
   y.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyY") {
     y.style.backgroundColor = "";
  }
});

//U
const u = document.getElementById("u");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyU") {
   u.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyU") {
     u.style.backgroundColor = "";
  }
});

//I
const i = document.getElementById("i");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyI") {
   i.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyI") {
     i.style.backgroundColor = "";
  }
});

//O
const o = document.getElementById("o");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyO") {
   o.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyO") {
     o.style.backgroundColor = "";
  }
});

//P
const p = document.getElementById("p");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyP") {
   p.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyP") {
     p.style.backgroundColor = "";
  }
});

//flower bracket and square bracket left side
const bracket_left = document.getElementById("flower_brk_left");

document.addEventListener("keydown", (e) => {
  if (e.code === "BracketLeft") {
   bracket_left.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "BracketLeft") {
     bracket_left.style.backgroundColor = "";
  }
});

//flower bracket and square bracket right side
const bracket_right = document.getElementById("flower_brk_right");

document.addEventListener("keydown", (e) => {
  if (e.code === "BracketRight") {
   bracket_right.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "BracketRight") {
     bracket_right.style.backgroundColor = "";
  }
});

//backslash and vertical line 
const slash = document.getElementById("slash");

document.addEventListener("keydown", (e) => {
  if (e.code === "Backslash") {
   slash.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Backslash") {
     slash.style.backgroundColor = "";
  }
});

//capslock
const capslock = document.getElementById("capslock");

document.addEventListener("keydown", (e) => {
  if (e.code === "CapsLock") {
   capslock.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "CapsLock") {
     capslock.style.backgroundColor = "";
  }
});

//A
const a = document.getElementById("a");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyA") {
   a.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyA") {
     a.style.backgroundColor = "";
  }
});

//S
const s = document.getElementById("s");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyS") {
   s.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyS") {
     s.style.backgroundColor = "";
  }
});

//D
const d = document.getElementById("d");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyD") {
   d.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyD") {
     d.style.backgroundColor = "";
  }
});

//F
const f = document.getElementById("f");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyF") {
   f.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyF") {
     f.style.backgroundColor = "";
  }
});

//G
const g = document.getElementById("g");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyG") {
   g.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyG") {
     g.style.backgroundColor = "";
  }
});

//H
const h = document.getElementById("h");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyH") {
   h.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyH") {
     h.style.backgroundColor = "";
  }
});

//J
const j = document.getElementById("j");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyJ") {
   j.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyJ") {
     j.style.backgroundColor = "";
  }
});

//K
const k = document.getElementById("k");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyK") {
   k.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyK") {
     k.style.backgroundColor = "";
  }
});

//L
const l = document.getElementById("l");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyL") {
   l.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyL") {
     l.style.backgroundColor = "";
  }
});

//Colon and semi colon
const colon = document.getElementById("colon");

document.addEventListener("keydown", (e) => {
  if (e.code === "Semicolon") {
   colon.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Semicolon") {
     colon.style.backgroundColor = "";
  }
});

//double inverted commas and single inverted commas
const inverted_commas = document.getElementById("inverted_commas");

document.addEventListener("keydown", (e) => {
  if (e.code === "Quote") {
   inverted_commas.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Quote") {
     inverted_commas.style.backgroundColor = "";
  }
});

//Enter key
const enter = document.getElementById("enter");

document.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
   enter.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
     enter.style.backgroundColor = "";
  }
});

//Left shift
const left_shift = document.getElementById("left_shift");

document.addEventListener("keydown", (e) => {
  if (e.code === "ShiftLeft") {
   left_shift.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "ShiftLeft") {
     left_shift.style.backgroundColor = "";
  }
});

//Z
const z = document.getElementById("z");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyZ") {
   z.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyZ") {
     z.style.backgroundColor = "";
  }
});

//X
const x = document.getElementById("x");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyX") {
   x.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyX") {
     x.style.backgroundColor = "";
  }
});

//C
const c = document.getElementById("c");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyC") {
   c.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyC") {
     c.style.backgroundColor = "";
  }
});

//V
const v = document.getElementById("v");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyV") {
   v.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyV") {
     v.style.backgroundColor = "";
  }
});

//B
const b = document.getElementById("b");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyB") {
   b.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyB") {
     b.style.backgroundColor = "";
  }
});

//N
const n = document.getElementById("n");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyN") {
   n.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyN") {
     n.style.backgroundColor = "";
  }
});

//M
const m = document.getElementById("m");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyM") {
   m.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyM") {
     m.style.backgroundColor = "";
  }
});

//greater than and comma
const left_symbol = document.getElementById("left_symbol");

document.addEventListener("keydown", (e) => {
  if (e.code === "Comma") {
   left_symbol.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Comma") {
     left_symbol.style.backgroundColor = "";
  }
});

//lesser than and period
const right_symbol = document.getElementById("right_symbol");

document.addEventListener("keydown", (e) => {
  if (e.code === "Period") {
   right_symbol.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Period") {
     right_symbol.style.backgroundColor = "";
  }
});

//question make and slash
const question_mark = document.getElementById("question_mark");

document.addEventListener("keydown", (e) => {
  if (e.code === "Slash") {
   question_mark.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Slash") {
     question_mark.style.backgroundColor = "";
  }
});

//Right shift
const right_shift = document.getElementById("right_shift");

document.addEventListener("keydown", (e) => {
  if (e.code === "ShiftRight") {
   right_shift.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "ShiftRight") {
     right_shift.style.backgroundColor = "";
  }
});

//left Ctrl
const left_ctrl = document.getElementById("left_ctrl");

document.addEventListener("keydown", (e) => {
  if (e.code === "ControlLeft") {
   left_ctrl.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "ControlLeft") {
     left_ctrl.style.backgroundColor = "";
  }
});

//function key 

//Windows key
const windows = document.getElementById("windows");

document.addEventListener("keydown", (e) => {
  if (e.code === "MetaLeft") {
   windows.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "MetaLeft") {
     windows.style.backgroundColor = "";
  }
});

//left alt
const left_alt = document.getElementById("left_alt");

document.addEventListener("keydown", (e) => {
  if (e.code === "AltLeft") {
   left_alt.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "AltLeft") {
     left_alt.style.backgroundColor = "";
  }
});

//Space
const space = document.getElementById("space");

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
   space.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
      space.style.backgroundColor = "";
  }
});


//right alt
const right_alt = document.getElementById("right_alt");

document.addEventListener("keydown", (e) => {
  if (e.code === "AltRight") {
   right_alt.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "AltRight") {
      right_alt.style.backgroundColor = "";
  }
});

//Right control
const right_ctrl = document.getElementById("right_ctrl");

document.addEventListener("keydown", (e) => {
  if (e.code === "ControlRight") {
   right_ctrl.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "ControlRight") {
      right_ctrl.style.backgroundColor = "";
  }
});

//left arrow
const left_arrow = document.getElementById("left_arrow");

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowLeft") {
   left_arrow.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "ArrowLeft") {
      left_arrow.style.backgroundColor = "";
  }
});

//left arrow
const up_arrow = document.getElementById("up_arrow");

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowUp") {
   up_arrow.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "ArrowUp") {
      up_arrow.style.backgroundColor = "";
  }
});

//left arrow
const down_arrow = document.getElementById("down_arrow");

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowDown") {
   down_arrow.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "ArrowDown") {
      down_arrow.style.backgroundColor = "";
  }
});

//left arrow
const right_arrow = document.getElementById("right_arrow");

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight") {
   right_arrow.style.backgroundColor = "rgb(115, 222, 255)";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "ArrowRight") {
      right_arrow.style.backgroundColor = "";
  }
});