// Copy menu for mobile
const copyMenuMobile = (function () {
   // copy insede .dpt-cat to .departments
   let dptCategory = document.querySelector(`.dpt-cat`);
   let dptPlace = document.querySelector(".departments");
   dptPlace.innerHTML = dptCategory.innerHTML;

   // copy inside nav to nav
   let mainNav = document.querySelector(".header-nav nav");
   let navPlace = document.querySelector(".off-canvas nav");
   navPlace.innerHTML = mainNav.innerHTML;

   // copy .header-top .wrapper to .thetop-nav
   let topNav = document.querySelector(".header-top .wrapper");
   let topNavPlace = document.querySelector(".off-canvas .thetop-nav");
   topNavPlace.innerHTML = topNav.innerHTML;
})();
// ---------------------------------------------------------------

// Show submenu on mobile
const subMenu = document.querySelectorAll(".has-child > a");
subMenu.forEach((menu) => menu.addEventListener("click", toggleMenu));

function toggleMenu(ev) {
   ev.preventDefault();

   subMenu.forEach((menu) => (this != menu ? menu.closest(".has-child").classList.remove("expand") : null));
   if (this.closest(".has-child").classList != "expand") {
      this.closest(".has-child").classList.toggle("expand");
   }
}
// ---------------------------------------------------------------

// Show and Hide menu in mobile button handler
const openMenuBtn = document.querySelector(".trigger");
const closeMenuBtn = document.querySelector(".t-close");
const site = document.querySelector(".site");

openMenuBtn.addEventListener("click", () => {
   site.classList.add("show-menu");
});

closeMenuBtn.addEventListener("click", () => {
   site.classList.remove("show-menu");
});
