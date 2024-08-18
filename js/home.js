$(document).ready(function () {
  localStorage.setItem("articleCount", 0);

  // if for don't reset allArticles in every page when relode
  if (localStorage.getItem("articleCount") == 0) {
    let allArticles = document.querySelectorAll(".all-articls a").length;
    localStorage.setItem("articleCount", allArticles);
  } else {
    let updateAllArticles = allArticles;
    let getAllElementToCompaer =
      document.querySelectorAll(".all-articls a").length;

    if (getAllElementToCompaer > updateAllArticles) {
      localStorage.setItem("articleCount", getAllElementToCompaer);
    }
  }
});
