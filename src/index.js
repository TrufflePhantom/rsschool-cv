jQuery(document).ready(function($) {
  const $header__box = $(".header__box");
  const $burger = $(".header__burger");
  const $nav = $(".header__nav-links");
  const $html = $("html");
  const $arrowUp = $(".arrowUp");
  const $headerLinks = $(".header__nav-links li a");
  const $header__find_me = $(".header__find_me");

  $burger.on("click", function() {
    $nav.toggleClass("header__nav-links--shown");
    $html.toggleClass("overflow-hidden");
  });

  $(window).on(
    "scroll",
    $.debounce(100, function() {
      if ($(this).scrollTop() > 200) {
        $header__box.addClass("sticky");
        $header__find_me.addClass("upSize");
        $arrowUp.addClass("active");
      } else {
        $header__box.removeClass("sticky");
        $arrowUp.removeClass("active");
        $header__find_me.removeClass("upSize");
      }
    })
  );

  $arrowUp.on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
  $headerLinks.on("click", function(e) {
    e.preventDefault();
    const target = $(this).attr("href");

    $("html, body").animate({ scrollTop: $(target).offset().top - 100 }, 1000);
    $nav.removeClass("header__nav-links--shown");
    $html.removeClass("overflow-hidden");
  });
});
