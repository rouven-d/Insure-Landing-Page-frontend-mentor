//Switching the image to the top when page gets resized to mobile viewport
// Changing the transitional pattern between the title section and the following section
$(window).on('load resize', function() {
  let div1 = $('.title-text');
  let div2 = $('.title-image-div');
  let wrapper = $('.wrapper');
  let transitionalImg = $('.transitional-pattern');

  if ($(window).width() < 769) {
    wrapper.prepend(div2).append(div1);
    transitionalImg.attr("src", "images/bg-pattern-intro-right-mobile.svg");
    transitionalImg.removeClass("transitional-pattern").addClass("transitional-pattern-mobile");
  } else {
    wrapper.prepend(div1).append(div2);
  }
});
