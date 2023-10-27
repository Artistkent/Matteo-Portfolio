//AOS INIT
AOS.init();

//Typing Script
var i = 0;
var txt = 'Hi, I\'m Matteo!';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type_text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

//navbar active link change
// $('nav a p').click(function(e) {
//   $('nav a p').removeClass('active_tab');
//   $(this).addClass('active_tab');
// });

//from my other javascript file
/*jQuery animate paragraph*/ 
/* 1 */
$( ".icon_wrapper_1" ).click(function() {
    $( ".content_2" ).toggleClass( "flip_alt flip_alt_back" );
  });
  
  $( ".icon_wrapper_1" ).click(function(){
  if($( ".content_3, .content_4, .content_5, .content_6" ).hasClass("flip_alt")){
    $( ".content_3, .content_4, .content_5, .content_6" ).addClass( "flip_alt_back");
    $( ".content_3, .content_4, .content_5, .content_6" ).removeClass( "flip_alt");
  }
  });
  
  $( ".icon_wrapper_1" ).click(function() {
    if($(".content_2").hasClass("flip_alt")){
      $( ".content_1" ).addClass( "flip");
      $( ".content_1" ).removeClass( "flip_back");
      }
      else{
        $( ".content_1" ).addClass( "flip_back" );
      }
  });
  
  /* 2 */
  
  $( ".icon_wrapper_2" ).click(function() {
    $( ".content_3" ).toggleClass( "flip_alt flip_alt_back" );
  });
  
  $( ".icon_wrapper_2" ).click(function(){
    if($( ".content_2, .content_4, .content_5, .content_6" ).hasClass("flip_alt")){
      $( ".content_2, .content_4, .content_5, .content_6" ).addClass( "flip_alt_back");
      $( ".content_2, .content_4, .content_5, .content_6" ).removeClass( "flip_alt");
    }
    });
  
  $( ".icon_wrapper_2" ).click(function() {
    if($(".content_3").hasClass("flip_alt")){
      $( ".content_1" ).addClass( "flip");
      $( ".content_1" ).removeClass( "flip_back");
  
  
      }
      else{
        $( ".content_1" ).addClass( "flip_back" );
      }
  });
  
  
  
  /* 3 */
  
  $( ".icon_wrapper_3" ).click(function() {
    $( ".content_4" ).toggleClass( "flip_alt flip_alt_back" );
  });
  
  $( ".icon_wrapper_3" ).click(function(){
    if($( ".content_2, .content_3, .content_5, .content_6" ).hasClass("flip_alt")){
      $( ".content_2, .content_3, .content_5, .content_6" ).addClass( "flip_alt_back");
      $( ".content_2, .content_3, .content_5, .content_6" ).removeClass( "flip_alt");
    }
    });
  
  $( ".icon_wrapper_3" ).click(function() {
    if($(".content_4").hasClass("flip_alt")){
      $( ".content_1" ).addClass( "flip");
      $( ".content_1" ).removeClass( "flip_back");
  
  
      }
      else{
        $( ".content_1" ).addClass( "flip_back" );
      }
  });
  
  
  /* 4 */
  $( ".icon_wrapper_4" ).click(function() {
    $( ".content_5" ).toggleClass( "flip_alt flip_alt_back" );
  });
  
  $( ".icon_wrapper_4" ).click(function(){
    if($( ".content_2, .content_3, .content_4, .content_6" ).hasClass("flip_alt")){
      $( ".content_2, .content_3, .content_4, .content_6" ).addClass( "flip_alt_back");
      $( ".content_2, .content_3, .content_4, .content_6" ).removeClass( "flip_alt");
    }
    });
  
  $( ".icon_wrapper_4" ).click(function() {
    if($(".content_5").hasClass("flip_alt")){
      $( ".content_1" ).addClass( "flip");
      $( ".content_1" ).removeClass( "flip_back");
  
  
      }
      else{
        $( ".content_1" ).addClass( "flip_back" );
      }
  });
  
  /* 5 PROJECT */
  
  $( ".projects_button" ).click(function() {
    $( ".content_6" ).toggleClass( "flip_alt flip_alt_back" );
  });
  
  $( ".projects_button" ).click(function(){
    if($( ".content_2, .content_3, .content_4, .content_5" ).hasClass("flip_alt")){
      $( ".content_2, .content_3, .content_4, .content_5" ).addClass( "flip_alt_back");
      $( ".content_2, .content_3, .content_4, .content_5" ).removeClass( "flip_alt");
    }
    });
  
  $( ".projects_button" ).click(function() {
    if($(".content_6").hasClass("flip_alt")){
      $( ".content_1" ).addClass( "flip");
      $( ".content_1" ).removeClass( "flip_back");
  
  
      }
      else{
        $( ".content_1" ).addClass( "flip_back" );
      }
  });
  
  
  
  /*Media Open Button*/
  
  $( ".media_button" ).click(function() {
    if($( ".top_links_wrapper" ).hasClass("media_close")){
    $( ".top_links_wrapper" ).addClass( "media_open").removeClass("media_close");
  }else if($( ".top_links_wrapper").hasClass("media_open")){
    $( ".top_links_wrapper" ).removeClass("media_open").addClass("media_close");
  }
  else{$( ".top_links_wrapper").addClass("media_open")}
  });
  
  
  /*MOVE LITTLE ARROW LINK A FEW DEGREES!*/
  $(function() {
    $('.project_link_button').hover(function() {
    
     $('.fa-arrow-right').css('transform', 'rotateZ(-45deg)');
    
    }, function() {
      // on mouseout, reset the background colour
      $('.fa-arrow-right').css('transform', 'rotateZ(0deg)');
      
    });
  });
  
  /*CLICK IMAGE EXPAND PROJECT DESCRIPTION*/
  
   
    $('.project_img:eq(0)').click(function() {
      $('.project_link:eq(0)').toggleClass('zoom_in zoom_out');
  
     $('.project_p:eq(0)').toggleClass('no_show');
     $('.project_link_button:eq(0)').toggleClass('no_show');
     
    });

    $('.project_img:eq(1)').click(function() {
      $('.project_link:eq(1)').toggleClass('zoom_in zoom_out');
  
     $('.project_p:eq(1)').toggleClass('no_show');
     $('.project_link_button:eq(1)').toggleClass('no_show');
     
    });

    $('.project_img:eq(2)').click(function() {
      $('.project_link:eq(2)').toggleClass('zoom_in zoom_out');
  
     $('.project_p:eq(2)').toggleClass('no_show');
     $('.project_link_button:eq(2)').toggleClass('no_show');
     
    });

    $('.project_img:eq(3)').click(function() {
      $('.project_link:eq(3)').toggleClass('zoom_in zoom_out');
  
     $('.project_p:eq(3)').toggleClass('no_show');
     $('.project_link_button:eq(3)').toggleClass('no_show');
     
    });
  
  
  /*ROTATE ARROW ON CLICK SIDEBAR*/
  function rotateArrow() {
  if(document.getElementById('caller-arrow').style.transform == "rotateY(0deg)"){
    document.getElementById('caller-arrow').style.transform = "rotateY(180deg)";
    
  }
    else{
      document.getElementById('caller-arrow').style.transform = "rotateY(0deg)";
    }
  
  };
  
  
  const rotArr = document.querySelector('.top_links_caller_button');
  
  console.log(rotArr);
  
    // rotArr.addEventListener("click", rotateArrow);
  
  
 
