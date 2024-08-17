// Dark Mode
function addDarkModeClass() {
  $("body").addClass("dark-mode");
  $("nav, .landing, .articls, footer, .art, .login-form").addClass("dark-mode");
}
function removeDarkModeClass() {
  $("body").removeClass("dark-mode");
  $("nav, .landing, .articls, footer, .art, .login-form").removeClass("dark-mode");
}

// document.body.style.backgroundColor = "#171717";

// if (localStorage.getItem("dark-mode") === "on") {
//   document.body.style.backgroundColor = "#171717";
// }

document.body.style.opacity = 1;

$(document).ready(function () {
  // When Page Reload Check Dark-Mode Value
  if (localStorage.getItem("dark-mode") === "on") {
    addDarkModeClass();
  } else {
    removeDarkModeClass();
  }
  // When Click To Swith Mode
  $(".switch-mode").on("click", function () {
    if (localStorage.getItem("dark-mode") === "off") {
      window.localStorage.setItem("dark-mode", "on");
      addDarkModeClass();
    } else {
      window.localStorage.setItem("dark-mode", "off");
      removeDarkModeClass();
    }
  });
});
