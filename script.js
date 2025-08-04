$(function () {
  $(".toggle").on("click", function () {
    $(".nav-links").toggleClass("active");
    $(this).toggleClass("active");

    const icon = $(this).find("a ion-icon");
    const isOpen = $(".nav-links").hasClass("active");
    icon.attr("name", isOpen ? "close-outline" : "menu-outline");
  });
});
