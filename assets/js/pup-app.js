$(document).ready(function() {


$("#page4").addClass("hide");

$("#add-pup-3").on('click', function(e){
    console.log("event click: ", e);
    $("#page3").addClass("hide");
    $("#page4").removeClass("hide");

});

});