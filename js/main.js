function classToggle() {
  let nav = document.querySelector("navbar-nav");
  nav.classList.toggle("Navbar_ToggleShow");
}

document.querySelector("navbar-toggler").addEventListener("click", classToggle);
