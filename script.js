// Initialize AOS Animation
AOS.init({ duration: 1000 });

// Smooth Scroll Nav Click
$(document).ready(function() {
  $("a.nav-link").click(function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      $("html, body").animate({
        scrollTop: $(hash).offset().top - 70
      }, 700);
    }
  });
});
