$(document).ready(function(){
   mobBurger();
   mobPerson();
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