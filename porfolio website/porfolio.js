var project1_show = document.getElementById("display_project1");
var project2_show = document.getElementById("display_project2");
var project_menu = document.getElementById("display_menu");
var display_education = document.getElementById("education");
var display_contact = document.getElementById("display_contact");

function showProject1() {
  project_menu.style.display = "none";
  project1_show.style.display = "flex";
  display_education.style.display = "none";
  display_contact.style.display = "none";
}
function showMenu() {
  project_menu.style.display = "grid";
  project2_show.style.display = "none";
  project1_show.style.display = "none";
  display_education.style.display = "flex";
  display_contact.style.display = "flex";
}
function showProject2() {
  project_menu.style.display = "none";
  project2_show.style.display = "flex";
  display_education.style.display = "none";
  display_contact.style.display = "none"
}

let section = document.querySelectorAll('.landing_page');
let navlinks = document.querySelectorAll('nav .dl_resume .headers ul li a');

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('nav .dl_resume li .headers a[href*=' + id + ']').classList.add('active');
      });
    };
  });
};