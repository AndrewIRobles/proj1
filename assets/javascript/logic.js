$(document).ready(function(){

$('#pagetwo').addClass("hide");
$('#pageone').removeClass("hide");

zipSearch = $("#button-addon2").on('click', function(evt) {
    $('#pageone').addClass("hide");
    $('#pagetwo').removeClass("hide");
});

console.log(zipSearch);
})