// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika siomay ayam menu di klik
document.querySelector("#siomay-ayam-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luarv sidebar untuk menghilangkan nav

const siomayayam = document.querySelector("#siomay-ayam-menu");

document.addEventListener("click", function (e) {
  if (!siomayayam.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
