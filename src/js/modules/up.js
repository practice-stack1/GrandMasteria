$(window).on('scroll', function(){
  if($(this).scrollTop()>500&&$(this).width()>=1050){
    $('.pageup').fadeIn();
  }else{
    $('.pageup').fadeOut();
  }
});


$("a[href='#up']").on('click', function(e){
  e.preventDefault();
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});