$(document).ready(function(){
   mobBurger();
   mobPerson();
   tab();
   sliderTabs();
});

function mobBurger() {
   $(".header__burger").on('click', function () {
         var $parent = $(".header");
         if ($parent.hasClass('mob-burger')) {
            $parent.removeClass('mob-burger');
         } else {
            $parent.addClass('mob-burger');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".header__burger").length) {
         if ($(".header").hasClass("mob-burger")) {
            $(".header").removeClass("mob-burger");
         }
      }
   });
}

function mobPerson() {
   $(".header__person").on('click', function () {
         var $parent = $(".header");
         if ($parent.hasClass('mob-person')) {
            $parent.removeClass('mob-person');
         } else {
            $parent.addClass('mob-person');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".header__person").length) {
         if ($(".header").hasClass("mob-person")) {
            $(".header").removeClass("mob-person");
         }
      }
   });
}

function tab() {
   // if($(window).width() > 480) {
      $(".tab__info").not(":first").hide();
      $(".tab .tab__item").click(function() {
         $(".tab .tab__item").removeClass("tab__item_active").eq($(this).index()).addClass("tab__item_active");
         $(".tab__info").hide().eq($(this).index()).fadeIn();
      });
   // }
}

function sliderTabs() {
   if($(window).width() <= 480) {
      $('.tab-control').slick({
         slidesToShow: 2,
         slidesToScroll: 1,
         infinite: true,               
         dots: false,
         arrows: false,
         asNavFor: '.tab-content'
      });
      $('.tab-content').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,               
         dots: false,
         arrows: false,
         asNavFor: '.tab-control'
      });
   }
};