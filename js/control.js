$(document).ready(function(){
  //滑行 按鈕
  $("#HM_B").click(function(){
      $('html,body').animate({scrollTop:$('#photoSlide').offset().top},600);
    
  });

$("#BN_B").click(function(){
      $('html,body').animate({scrollTop:$('#News').offset().top},600);
    
  });

$("#AL_B").click(function(){
      $('html,body').animate({scrollTop:$('#News').offset().top},600);
    
  });

$("#BF_B").click(function(){
      $('#before').modal('show');
  });

$("#BF_B2").click(function(){
      $('#before').modal('show');
  });

$("#AT_B").click(function(){
      $('html,body').animate({scrollTop:$('#AT').offset().top},600);
    
  });

$("#QA_B").click(function(){
      $('html,body').animate({scrollTop:$('#QA').offset().top},600);
    
  });

 $("#menu").click(function(){
      $('.ui.sidebar').sidebar('toggle');
    
  });

$("#CN_B").click(function(){
      $('html,body').animate({scrollTop:$('#CN').offset().top},600);
    
  });

$("#REV_B").click(function(){
      $('html,body').animate({scrollTop:$('#REV').offset().top},600);
    
  });

$("#MN1_B").click(function(){
      $('#step2').click();
      $('html,body').animate({scrollTop:$('#Re').offset().top},600);
  });


$("#RM_B").click(function(){
      $('#step1').click();
      $('html,body').animate({scrollTop:$('#Re').offset().top},600);
  });  


$("#MN2_B").click(function(){
      $('#step3').click();
      $('html,body').animate({scrollTop:$('#Re').offset().top},600);
  });  


  $("#QR").on({
    mouseenter: function(){
      $(this).addClass("animated rubberBand");
    },
    mouseleave: function(){
      $(this).removeClass("animated rubberBand");
    },
  });

  $("#FB").on({
    mouseenter: function(){
      $(this).addClass("animated rubberBand");
    },
    mouseleave: function(){
      $(this).removeClass("animated rubberBand");
    },
  });

$("#chemistry").on({
    mouseenter: function(){
      $(this).addClass("animated rubberBand");
    },
    mouseleave: function(){
      $(this).removeClass("animated rubberBand");
    },
  });

 $("#QR_2").on({
    mouseenter: function(){
      $(this).addClass("animated rubberBand");
    },
    mouseleave: function(){
      $(this).removeClass("animated rubberBand");
    },
  });

  $("#FB_2").on({
    mouseenter: function(){
      $(this).addClass("animated rubberBand");
    },
    mouseleave: function(){
      $(this).removeClass("animated rubberBand");
    },
  });

$("#bus").on({
    mouseenter: function(){
      $(this).addClass("animated rubberBand");
    },
    mouseleave: function(){
      $(this).removeClass("animated rubberBand");
    },
  });

$("#school").on({
    mouseenter: function(){
      $(this).addClass("animated rubberBand");
    },
    mouseleave: function(){
      $(this).removeClass("animated rubberBand");
    },
  });

  // 交通資訊 按鈕
$("#bus").click(function(){
      $('#bus_IF').modal('show');
  });

  $("#school").click(function(){
      $('#school_IF').modal('show');
  });

  // 營服尺寸 按鈕
$("#clothes_1").click(function(){
      $('#clothes_IF').modal('show');
  });

$("#clothes_2").click(function(){
      $('#clothes_IF').modal('show');
  });

$("#clothes_3").click(function(){
      $('#clothes_IF').modal('show');
  });

$("#CT_B").click(function(){
      $('#clothes_IF').modal('show');
  });

$("#BS_B").click(function(){
      $('#bus_IF').modal('show');
  });

  $("#SC_B").click(function(){
      $('#school_IF').modal('show');
  });

  $("#step2_B").click(function(){
      $('#step2').click();
      $('html,body').animate({scrollTop:$('#Re').offset().top},600);
  });

  $("#step3_B").click(function(){
      $('#step3').click();
      $('html,body').animate({scrollTop:$('#Re').offset().top},600);
  });  

  $("#step1_B").click(function(){
      $('#step1').click();
      $('html,body').animate({scrollTop:$('#Re').offset().top},600);
  });  

  $("#stepN_B").click(function(){
      $('#step1').click();
      $('html,body').animate({scrollTop:$('#Re').offset().top},600);
  });  

  $("#stepR_B").click(function(){
      $('#step2').click();
      $('html,body').animate({scrollTop:$('#Re').offset().top},600);
  }); 

  // 下拉選項
  $('.ui.dropdown')
  .dropdown()
;

$('.ui.accordion')
  .accordion()
;

$('.menu .item')
  .tab()
;

});
