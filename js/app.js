// create dynamic navbar 
const menu = document.getElementById("nav__menu");
const sections = [...document.querySelectorAll("section")];
console.log(sections);
const nav_menu_items = () => {
  let nav_menu = "";
  sections.forEach((section) => {
    const sectionID = section.id;
    const sectionAtrribute = section.dataset.nav;
    nav_menu += `<li> <a class="menu_item_link" href="#${sectionID}">${sectionAtrribute}</a></li>`;
    let items = document.querySelectorAll(".menu_item_link");
  });
  menu.innerHTML = nav_menu;
};
nav_menu_items();

// add active class for the current work nav 
document.querySelector("#nav__menu li a").classList.add("active");
let navlink = document.querySelectorAll(".menu_item_link").forEach((el) => {
  el.addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
});

// scroll top button 
// Get the button:
let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



