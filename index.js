const hamburger_btn = document.getElementById("hammenu");
const hamicon = document.getElementById("icon");
const menuitem = document.getElementById("menuitem");

// menuitem.style.display = "none";

function hamburgerfunction() {
  console.log(hamburger_btn, "hamburger_btn");
  console.log(hamicon, "hamicon");

  // hamburger_btn.addEventListener("click", (event) => {
  // console.log("clicked");
  if (menuitem.style.display === "none") {
    menuitem.style.display = "flex";
    console.log(event);
    console.log(hamicon);
    // if(hamicon.classList)
    hamicon.classList.replace("fa-bars", "fa-xmark");

    // console.log(hamburger_btn.classList);
    // hamburger_btn.children.classList.remove("fa-solid fa-bars");
    // hamburger_btn.children.classList.add("fa-solid fa-xmark");
  } else {
    menuitem.style.display = "none";
    hamicon.classList.replace("fa-xmark", "fa-bars");
  }
  // hamicon.classList.remove();
  // hamicon.classList.add("fa-solid fa-xmark");
  // });
  console.log("Hello");
}

document.addEventListener("DOMContentLoaded", initializeSlide);

const imgs = document.querySelectorAll("img.imgdiv");
console.log(imgs);
let slideindex = 0;

function initializeSlide() {
  if (imgs.length > 0) {
    imgs[slideindex].classList.add("displayimg");
    setInterval(nextslide, 5000);
  }
}

function showslide(index) {
  if (index >= imgs.length) {
    slideindex = 0;
  } else if (index < 0) {
    slideindex = imgs.length - 1;
  }
  imgs.forEach((slide) => {
    slide.classList.remove("displayimg");
  });
  imgs[slideindex].classList.add("displayimg");
}

function nextslide() {
  slideindex++;
  console.log(slideindex);
  showslide(slideindex);
}
