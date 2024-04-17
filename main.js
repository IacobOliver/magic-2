
function scrollToId(id) {
  $("html, body").animate(
    {
      scrollTop: $("#" + id).offset().top - 50,
    },
    500
  );
}
var swiper = new Swiper(".alegi-swiper", {
  lazy: true,
  preloadImages: false,
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 10,
  effect: 'coverflow',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
});
var swiper = new Swiper(".traineri-swiper", {
  lazy: true,
  preloadImages: false,
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
});
