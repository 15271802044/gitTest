$(function(){
    var num = 0;
    var timer =null;

    function autoPlay(){
        num++
        if(num == 5){
            num =0
        }
        $('.banner-dots ol li').eq(num).addClass('act').siblings().removeClass('act');
        $('.d-banner ul li ').eq(num).stop().animate({opacity:1},500).siblings().stop().animate({opacity:0},500);
        console.log(num);
    }

    timer = setInterval(autoPlay,3000);

    $('.banner').mouseover(function(){
        clearInterval(timer);
    }).mouseout(function(){
        timer = setInterval(autoPlay,3000);
    })

    $('.banner-dots ol li').click(function(){
        var i = $(this).index();
        num = i;
        $(this).addClass('act').siblings().removeClass('act');
        $('.d-banner ul li').eq(num).stop().animate({opacity:1},500).siblings().stop().animate({opacity:0},500);
    })

    $('.prev').click(function(){
        num--
        if( num == -1){
            num = 4
        }
        $('.banner-dots ol li').eq(num).addClass('act').siblings().removeClass('act');
        $('.d-banner ul li').eq(num).stop().animate({opacity:1},500).siblings().stop().animate({opacity:0},500);
    })

    $('.next').click(function(){
        num++
        if( num == 5){
            num = 0
        }
        $('.banner-dots ol li').eq(num).addClass('act').siblings().removeClass('act');
        $('.d-banner ul li').eq(num).stop().animate({opacity:1},500).siblings().stop().animate({opacity:0},500);
    })
})
