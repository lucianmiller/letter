$(document).ready(function() {
  $("#formOne").submit(function(event) {
    $(".yourName").append("blah blah");
  
    $("#letter").show();
    event.preventDefault();
  });
});