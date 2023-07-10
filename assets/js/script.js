$("#mostrar-menu").show();
$("#ocultar-menu").hide();
$("aside").hide();

$("#mostrar-menu").click(function(){
    $('header').hide();
$("#mostar-menu").toggle();
$("#ocultar-menu").toggle();

 $("aside").animate({
       marginTop:'0'
    }, 1000, function() {
        $("aside").show(1000);
    });
});
$("#ocultar-menu").click(function(){
    $('header').show();
$("#mostar-menu").toggle();
$("#ocultar-menu").toggle();

$("aside").hide();
});
