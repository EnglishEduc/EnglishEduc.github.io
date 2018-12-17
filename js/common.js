var typed = new Typed('#typed', {
   strings: ['Workshop', 'Conference'],
   typeSpeed: 40,
   backSpeed: 40,
   backDelay: 1700,//Задержка текста перед стиранием
   loop: true, //цикл сообщений
   showCursor: false
 });

 $(document).ready(function(){
   $(".header__top").removeClass("header__top-active");
   $(".header__top-logo").addClass("header__top-logo-first").fadeIn('fast');
   $(window).scroll(function(){
     if ($(this).scrollTop() > 40) {
       $(".header__top").addClass("header__top-active").fadeIn('fast');
       $(".header__top-logo").addClass("header__top-logo-second").fadeIn('fast');
       $(".header__top-logo").removeClass("header__top-logo-first").fadeIn('fast');
     } else {
       $(".header__top").removeClass("header__top-active").fadeIn('fast');
        $(".header__top-logo").removeClass("header__top-logo-second").fadeIn('fast');
        $(".header__top-logo").addClass("header__top-logo-first").fadeIn('fast');
     };
   });

   /// Всплывание блока информации и Спикерах + значек
   $('.spaker-visible').on('click', function(){
    let panelBox = $(this).parent().parent().parent();
    panelBox.find('.speaker-info-person').toggle('');
    $(this).parent().parent().find('.conference__event-cursor-active').toggleClass('conference__event-cursor-active-two');
  });
  /// Всплывание блока информации и Спикерах + значек

  $('.nav_visible').on('click', function(){
    let panelBox = $(this).parent().parent().parent().parent();
    panelBox.find('.conference__content').toggle('');
  });







 });
