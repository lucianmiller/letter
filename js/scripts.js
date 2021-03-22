$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const yourNameInput = $("input#yourName").val();

    $(".yourName").text(yourNameInput);
  
    $("#letter").show();
    event.preventDefault();
  });
});