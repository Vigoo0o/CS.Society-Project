// Dark Mode
$(document).ready(function () {
  $(".switch-mode").on("click", function () {
    $("body").toggleClass("dark-mode");
    $("nav, .landing, .articls, footer").toggleClass("dark-mode");
  });
});
