// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika siomay ayam menu di klik
document.querySelector("#siomay-ayam-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active untuk search form //

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// toggle class active untuk shopping cart//
const shoppingcart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingcart.classList.toggle("active");
  e.preventDefault();
};

// klik di luar elemen

const siomayayam = document.querySelector("#siomay-ayam-menu");
const search = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!siomayayam.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!search.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingcart.contains(e.target)) {
    shoppingcart.classList.remove("active");
  }
});

// modal box

const itemdetailmodal = document.querySelector("#item-detail-modal");

const itemdetailbuttons = document.querySelectorAll("#item-detail-button");

itemdetailbuttons.forEach((btn) => {
  btn.onclick = (e) => {
    itemdetailmodal.style.display = "flex";
    e.preventDefault();
  };
});

document.addEventListener('DOMContentLoaded', () => {
  const openModalButtons = document.querySelectorAll('[id^=item-detail-button]');
  const closeModalButtons = document.querySelectorAll('.close-icon');
  const modal = document.getElementById('item-detail-modal');

  openModalButtons.forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      modal.style.display = 'block';
    });
  });

  closeModalButtons.forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      modal.style.display = 'none';
    });
  });
  

  // click diluar tombol
  window.addEventListener('click', event => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});


// klik tombol close

document.querySelector(".modal .close-icon").onclick = (e) => {
  itemdetailmodal.style.display = "none";
  e.preventDefault();
};

//klik di luar modal

window.onclick = (e) => {
  if (e.target === itemdetailmodal) {
    itemdetailmodal.style.display = "none";
  }
};
