$(document).ready(function(){
  $('.quote-slider').slick({
  	autoplay: true,
  	autoplaySpeed: 2000,
  	dots: true,
  	customPaging: function (slider, i) {
  		return `<img src="images/slider/dot${i+1}.png">`;
  	},
  	prevArrow: '<button class="arrow-left"> <img src="images/svg/back.svg" alt="back btn"></button>',
  	nextArrow: '<button class="arrow-right"> <img src="images/svg/forward.svg" alt="forward btn"></button>',
  });
});