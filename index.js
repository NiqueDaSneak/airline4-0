$(document).ready(function() {

  $(".show-mission").click(function(){
    $(".about-us").fadeOut("slow", function(){
      $(".mission-vision").fadeIn("slow");
    });
  });

  $(".show-about").click(function(){
    $(".mission-vision").fadeOut("slow", function(){
      $(".about-us").css("display", "inherit");
    });
  });
});


