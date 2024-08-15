// Dark Mode
if (localStorage.getItem("dark-mode") === "on") {
  document.body.classList.add("dark-mode");
}

document.body.style.opacity = 1;

$(document).ready(function () {
  // When Page Reload Check Dark-Mode Value
  if (localStorage.getItem("dark-mode") === "on") {
    $("body").addClass("dark-mode");
    $("nav, .landing, .articls, footer, .art").addClass("dark-mode");
  } else {
    $("body").removeClass("dark-mode");
    $("nav, .landing, .articls, footer, .art").removeClass("dark-mode");
  }

  // When Click To Swith Mode
  $(".switch-mode").on("click", function () {
    if (localStorage.getItem("dark-mode") === "off") {
      window.localStorage.setItem("dark-mode", "on");
      $("body").addClass("dark-mode");
      $("nav, .landing, .articls, footer, .art").addClass("dark-mode");
    } else {
      window.localStorage.setItem("dark-mode", "off");
      $("body").removeClass("dark-mode");
      $("nav, .landing, .articls, footer, .art").removeClass("dark-mode");
    }
  });
});
