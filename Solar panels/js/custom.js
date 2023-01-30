/* Fixed header when scroll
    ====================================*/

var headerH = $(".js-header").height(),
    navH = $("#js-nav-container").innerHeight();

$(document).on("scroll", function() {

    var documentScroll = $(this).scrollTop();

    if(documentScroll > headerH) {
        $("#js-nav-container").addClass("fixed");

        $("#js-header").css({
            "paddingTop": navH
        });
    } else {
        $("#js-nav-container").removeClass("fixed");
        $("#js-header").removeAttr("style");
    }

});
//Прокрутка вверх
$(function() {

    $(window).scroll(function() {

        if($(this).scrollTop() != 0) {

            $('#toTop').fadeIn();

        } else {

            $('#toTop').fadeOut();

        }

    });

    $('#toTop').click(function() {

        $('body,html').animate({scrollTop:0},800);

    });

});