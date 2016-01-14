$(document).ready(function() {
  $("#css").click(function(){
    if($(".css").css("display") === "none") {
      $(".css").show();
    }else {
      $(".css").hide();
    }
  });
});
