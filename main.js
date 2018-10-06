document.querySelector(".article__header").textContent ="Welcome to the Jase blog";

// questions 2
const classLoop = document.querySelectorAll(".article__header");

for (var i = 0; i < classLoop.length; i++ ) {
  classLoop[i].classList.add("important")
}

// Question 3
document.querySelector(".dashed").classList.remove("dashed");

// Question 4
document.querySelector(".article__footer").classList.add("goldenrod");