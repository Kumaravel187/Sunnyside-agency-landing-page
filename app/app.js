console.log("Hi");

const btn = document.getElementById("btn-hamburger");
const navLinkEl = document.querySelector(".navigation__nav-links");

btn.addEventListener("click", () => {
  if (navLinkEl.classList.contains("close")) {
    navLinkEl.classList.remove("close");
    navLinkEl.classList.add("open");
  } else {
    navLinkEl.classList.add("close");
    navLinkEl.classList.remove("open");
  }
});
