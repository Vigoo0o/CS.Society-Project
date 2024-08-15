// Dark Mode
$(document).ready(function () {
  // When Page Reload Check Dark-Mode Value
  if (localStorage.getItem("dark-mode") === "on") {
    $("body").addClass("dark-mode");
    $("nav, .landing, .articls, footer").addClass("dark-mode");
  } else {
    $("body").removeClass("dark-mode");
    $("nav, .landing, .articls, footer").removeClass("dark-mode");
  }

  // When Click To Swith Mode
  $(".switch-mode").on("click", function () {
    if (localStorage.getItem("dark-mode") === "off") {
      window.localStorage.setItem("dark-mode", "on");
      $("body").addClass("dark-mode");
      $("nav, .landing, .articls, footer").addClass("dark-mode");
    } else {
      window.localStorage.setItem("dark-mode", "off");
      $("body").removeClass("dark-mode");
      $("nav, .landing, .articls, footer").removeClass("dark-mode");
    }
  });
});
