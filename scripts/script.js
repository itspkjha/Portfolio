const code =
  'console.log("World of Paritosh is Initialised");\n\nfor(var i=0 ; i <= infinity ; i++ ){\n\n\tSpreadPeace(" :) ");\n\n}';
const para = document.querySelector(".code");
let index = 1;
let letter = "";
const main = document.querySelector(".main3");

(function type() {
  letter = code.slice(0, index);
  para.textContent = letter;
  index++;
  setTimeout(type, 200);
})();

document.addEventListener("scroll", () => {
  document.querySelector(".main").style.transform = `translateZ(-${
    window.scrollY / 2
  }px) rotateZ(${window.scrollY / 5}deg)`;
  document.querySelector(".main").style.opacity = 1 - window.scrollY / 3000;
  if (1 - window.scrollY / 1900 <= 0) {
    document.querySelector(".main").display = "none";
  } else {
    document.querySelector(".main").removeAttribute("display");
  }
});

////dragiing/////

dragElement(document.querySelector(".but"));
const cube = document.querySelector(".cube");
let angle = 0;

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos3 = e.clientX;
    document.querySelector(".but").style.transition = 'none';
    if ((elmnt.offsetLeft - pos1) / 16 >= 40) {
        elmnt.style.left = "40rem";
        cube.style.transform = `rotateY(180deg)`;
    } else if ((elmnt.offsetLeft - pos1) / 16 <= 0) {
      elmnt.style.left = "0rem";
      cube.style.transform = `rotateY(-180deg)`;
    } else {
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
      angle = (elmnt.offsetLeft - pos1 - 320)*0.5625;
      cube.style.transform = `rotateY(${angle}deg)`;
    }
    console.log(elmnt.style.left);
  }

  function closeDragElement() {
    // elmnt.style.left = "50%";
    // document.querySelector(".but").style.transition = "all 0.3s cubic-bezier(1, 0.02, 0, 1.02)";
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


let rotating = false;
document.querySelector('.ar').addEventListener('click', () => {
    if(rotating==false){
      rotating==true;
      document.querySelector('.ar').classList.toggle('rot');
      cube.classList.toggle('animationCube');
    }
    else{
      rotating==false;
      document.querySelector('.ar').classList.toggle('rot');
      cube.classList.toggle('animationCube');
    }
})

document.querySelector('.ds').addEventListener('click', () => {
  document.querySelector(".but").style.transition = "all 0.3s cubic-bezier(1, 0.02, 0, 1.02)";
  cube.style.transform = 'rotateY(0deg)';
  document.querySelector(".but").style.left = '50%';
})

document.querySelector('.m3').addEventListener('click', () => {
  cube.style.transform = 'rotateY(0deg)';
  document.querySelector(".but").style.left = '50%';
  document.querySelector(".but").style.transition = "all 0.3s cubic-bezier(1, 0.02, 0, 1.02)";
})

document.querySelector('.m2').addEventListener('click', () => {
  cube.style.transform = 'rotateY(-90deg)';
  document.querySelector(".but").style.left = '25%';
  document.querySelector(".but").style.transition = "all 0.3s cubic-bezier(1, 0.02, 0, 1.02)";
})

document.querySelector('.m4').addEventListener('click', () => {
  cube.style.transform = 'rotateY(90deg)';
  document.querySelector(".but").style.left = '75%';
  document.querySelector(".but").style.transition = "all 0.3s cubic-bezier(1, 0.02, 0, 1.02)";
})

document.querySelector('.m1').addEventListener('click', () => {
  cube.style.transform = 'rotateY(-180deg)';
  document.querySelector(".but").style.left = '0%';
  document.querySelector(".but").style.transition = "all 0.3s cubic-bezier(1, 0.02, 0, 1.02)";
})

document.querySelector('.m5').addEventListener('click', () => {
  cube.style.transform = 'rotateY(180deg)';
  document.querySelector(".but").style.left = '100%';
  document.querySelector(".but").style.transition = "all 0.6s cubic-bezier(1, 0.02, 0, 1.02)";
})

let rotating_clone = false

document.querySelector('.mur').addEventListener('click', () => {
  if(rotating_clone==false){
    rotating_clone==true;
    document.querySelector('.mur').classList.toggle('rot');
    cube.classList.toggle('animationCube-messed');
  }
  else{
    rotating_clone==false;
    document.querySelector('.mur').classList.toggle('rot');
    cube.classList.toggle('animationCube-messed');
  }
})
