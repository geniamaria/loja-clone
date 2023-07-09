$("#mostrar-menu").show();
$("#ocultar-menu").hide();
$("#menu").show;

$("#mostrar-menu").click(function(){
$("mostar-menu").toggle();
$("#ocultar-menu").toggle();

 $("aside").animate({
        left: '0'
    }, 3000, function() {
        $("#menu").show(1500);
    });
});
$("#ocultar-menu").click(function(){
$("mostar-menu").toggle();
$("#ocultar-menu").toggle();
});