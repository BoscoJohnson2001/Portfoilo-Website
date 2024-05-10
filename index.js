function hamburgerfunction() {
  const hamburger_btn = document.getElementById("hammenu");
  const menuitem = document.getElementById("menuitem");
  hamburger_btn.addEventListener("click", (event) => {
    if (menuitem.style.display === "none") {
      menuitem.style.display = "flex";
    } else {
      menuitem.style.display = "none";
    }
  });
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
