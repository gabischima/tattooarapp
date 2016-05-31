$(document).ready(function(){

    $('img').click(function(){
      if ( $(this).attr('id') == 'bonequinho1' ) {
        $("#bonequinho1").css("opacity", "1");
        $("#bonequinho2").css("opacity", "0.4");
        $("#bonequinho3").css("opacity", "0.4");
        $("#bonequinho4").css("opacity", "0.4");
        $("#image-background").attr("src", "image-resource/red-background.png");
        for (var i = 0; i < 7; i++) {
          $('#'+i).attr('src', 'image-resource/carousel-red-img'+ (i+1) +'.png');
        }
      } else {
        if ( $(this).attr('id') == 'bonequinho2' ) {
          $("#bonequinho1").css("opacity", "0.4");
          $("#bonequinho2").css("opacity", "1");
          $("#bonequinho3").css("opacity", "0.4");
          $("#bonequinho4").css("opacity", "0.4");
          $("#image-background").attr("src", "image-resource/qua-background.png");
          for (var i = 0; i < 7; i++) {
            $('#'+i).attr('src', 'image-resource/carousel-qua-img'+ (i+1) +'.png');
          }
        } else {
          if ( $(this).attr('id') == 'bonequinho3' ) {
            $("#bonequinho1").css("opacity", "0.4");
            $("#bonequinho2").css("opacity", "0.4");
            $("#bonequinho3").css("opacity", "1");
            $("#bonequinho4").css("opacity", "0.4");
            $("#image-background").attr("src", "image-resource/cra-background.png");
            for (var i = 0; i < 7; i++) {
              $('#'+i).attr('src', 'image-resource/carousel-cra-img'+ (i+1) +'.png');
            }
          } else {
            if ( $(this).attr('id') == 'bonequinho4' ) {
              $("#bonequinho1").css("opacity", "0.4");
              $("#bonequinho2").css("opacity", "0.4");
              $("#bonequinho3").css("opacity", "0.4");
              $("#bonequinho4").css("opacity", "1");
              $("#image-background").attr("src", "image-resource/ova-background.png");
              for (var i = 0; i < 7; i++) {
                $('#'+i).attr('src', 'image-resource/carousel-ova-img'+ (i+1) +'.png');
              }
            }
          }

        }
      }
    });

   $("#carousel-example").swiperight(function() {  
      $("#carousel-example").carousel('prev');  
    });  
 
   $("#carousel-example").swipeleft(function() {  
      $("#carousel-example").carousel('next');  
   });  

});

location.href = "#";
