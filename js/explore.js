$(document).ready(function () {
  document.querySelector(".explore .tags .all span").textContent =
    localStorage.getItem("articleCount");
});
