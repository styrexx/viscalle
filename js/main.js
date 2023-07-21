// Get The Nav
const navIcone = document.querySelector(".nav"),
  navBar = document.querySelector(".navBar");

navIcone.onclick = getNav;
let getnvstart = true;
function getNav() {
  if (getnvstart) {
    navBar.style.display = "flex";
    setTimeout(() => {
      navBar.style.transform = "translateX(0)";
      navIcone.innerHTML = `<i class="fa-solid fa-xmark i-red"></i>`;
      getnvstart = false;
    }, 100);
    document.body.style.overflowY = "hidden";
  } else {
    setTimeout(() => {
      navBar.style.display = "none";
    }, 1000);
    navBar.style.transform = "translateX(100%)";
    navIcone.innerHTML = `<i class="fa-solid fa-bars i-red"></i>`;
    document.body.style.overflowY = "auto";
    getnvstart = true;
  }
}
navBar.onclick = function () {
  if (navBar.style.transform == "translateX(0px)") {
    navBar.style.transform = "translateX(100%)";
    navIcone.innerHTML = `<i class="fa-solid fa-bars i-red"></i>`;
    setTimeout(() => {
      navBar.style.display = "none";
    }, 1000);
    document.body.style.overflowY = "auto";
    getnvstart = true;
  }
};

// Copyright Yreas
const yearCopyr = document.querySelector(".footer-footer .copy span");

let year = new Date().getFullYear();

yearCopyr.innerHTML = year;

// Go Up
const buttonGoUp = document.querySelector(".gotop");

buttonGoUp.onclick = function () {
  scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
