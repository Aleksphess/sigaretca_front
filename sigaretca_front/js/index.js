$(".main-page-slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    nextArrow: '<div class="main_slider-nav--next"></div>',
    prevArrow: '<div class="main_slider-nav--prev"></div>',
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                dots: false
            }
        },
        {
            breakpoint: 468,
            settings: {
                dots: false
            }
        }
    ]


});
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    nextArrow: '<div class="slider-nav-next"></div>',
    prevArrow: '<div class="slider-nav-prev"></div>',
    dots: false,
    focusOnSelect: true,
    swipe:false,
    vertical:true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                vertical:false,
            }
        },
        {
            breakpoint: 468,
            settings: {
                slidesToShow: 3,
                vertical:false
            }
        }
    ]

});
$('.header-top-snav').click(function () {
    $('.header-top-snavigation').slideToggle(400);
    return false;
});
$('.header-number-n').click(function () {
    $('.header-number-list').slideToggle(400);
    return false;
});




//$("#menu-id-1").hover(function (){
//    $('#menu-nav-1').addClass('active');
//    $('.menu-inner-item-2').addClass('active');
//});
//$('.main-content').hover(function (){
//    $('#menu-nav-1').removeClass('active');
//    $('.menu-inner-item-2').removeClass('active');
//});
$('.ul-inner li:gt(1)').hover(function (){
    $('#menu-nav-1').removeClass('active');
    $('.menu-inner-item-2').removeClass('active');
});

$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

$(document).ready(function(){
    //Button click functionality.
    $(".hamburger-nav").click(function(){
        if($(".mobile-nav").hasClass("opened")){
            //If the nav is shown, then close it...
            $(".mobile-nav").fadeOut("fast",function(){
                $(".mobile-nav").removeClass("opened");
            })
        }else{
            //... otherwise if the nav is closed, open it.
            $(".mobile-nav").fadeIn("fast", function(){
                $(".mobile-nav").addClass("opened");
            });
        }//close if-statement
    });


}); //end document.ready);
$(".mobile-nav-a").on("click", function (){
    $(this).next('.sub-nav-s').slideToggle(400);
    $(this).toggleClass("active");
    return false;
});
$(".sub-nav-a").on("click", function (){
    $(this).next('.sub-nav-s').slideToggle(400);
    $(this).toggleClass("active");
    return false;
});

//$("#mobile-nav-2").on("click", function (){
//    $('#mobile-nav-b').toggleClass('active');
//});
//
//$("#mobile-nav-3").on("click", function (){
//    $('#mobile-nav-c').toggleClass('active');
//});
//
//$("#mobile-nav-4").on("click", function (){
//    $('#mobile-nav-d').toggleClass('active');
//});
//
//$("#mobile-nav-5").on("click", function (){
//    $('#mobile-nav-e').toggleClass('active');
//});

$(".header-top-admin").on("click", function (){
    $('.header-top-inner').toggleClass('active');
});
$('main').on("click", function() {
    $('.header-top-inner').removeClass('active');
});
$('.score').raty({
    score: function () {
        return $(this).attr('data-rating');
    }
});
$(document).ready(function () {


    /*סכאהיונ הטאןאחאמם*/
    $("#slider").slider({
        min: 0,
        max: 30000,
        values: [0, 30000],
        range: true
    });

    $("#slider").slider({
        min: 0,
        max: 30000,
        values: [0, 30000],
        range: true,
        stop: function (event, ui) {
            $("input#minCost2").val($("#slider").slider("values", 0));
            $("input#maxCost2").val($("#slider").slider("values", 1));
        },
        slide: function (event, ui) {
            $("input#minCost2").val($("#slider").slider("values", 0));
            $("input#maxCost2").val($("#slider").slider("values", 1));
        }
    });

    $("input#minCost2").change(function () {
        var value1 = $("input#minCost2").val();
        var value2 = $("input#maxCost2").val();

        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $("input#minCost2").val(value1);
        }
        $("#slider").slider("values", 0, value1);
    });


    $("input#maxCost2").change(function () {
        var value1 = $("input#minCost2").val();
        var value2 = $("input#maxCost2").val();

        if (value2 > 30000) {
            value2 = 30000;
            $("input#maxCost2").val(30000)
        }

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $("input#maxCost2").val(value2);
        }
        $("#slider").slider("values", 1, value2);
    });


});
$(document).ready(function() {
    $('[name=quantity]').bind("change keyup input click", function() {
        if (this.value.match(/[^1-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    })});

//$(function () {
//    $(".phone-mask").one('focus', function () {
//        $(this).val("+380-")
//    });
//});



