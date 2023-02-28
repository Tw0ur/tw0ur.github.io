$(document).ready(function()
{
   $("a[href*='#header']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_header').offset().top }, 600, 'easeOutCirc');
   });
   $('#ThemeableMenu2 .dropdown-toggle').dropdown({popperConfig:{placement:'bottom-start',modifiers:{computeStyle:{gpuAcceleration:false}}}});
   $(document).on('click','.ThemeableMenu2-navbar-collapse.show',function(e)
   {
      if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
      {
         $(this).collapse('hide');
      }
   });
   $("#SlideShow1").slideshow(
   {
      interval: 5000,
      type: 'random',
      effect: 'slide',
      direction: 'left',
      pagination: false,
      fullscreen: 0,
      maxWidth: 1920,
      easing: 'swing',
      effectlength: 2000
   });
   $("#SlideShow2").slideshow(
   {
      interval: 5000,
      type: 'random',
      effect: 'slide',
      direction: 'left',
      pagination: false,
      fullscreen: 0,
      maxWidth: 1920,
      easing: 'swing',
      effectlength: 2000
   });
   $(".SlideMenu1-folder a").click(function()
   {
      var $popup = $(this).parent().find('ul');
      if ($popup.is(':hidden'))
      {
         $popup.show();
         $popup.attr('aria-expanded', 'true');
      }
      else
      {
         $popup.hide();
         $popup.attr('aria-expanded', 'false');
      }
   });
});
