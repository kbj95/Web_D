$(document).ready(function(){
    $('ul.mainMenu > li').mouseenter(function(){
        $('ul.subMenu').stop().slideDown(20);
    });
    $('ul.mainMenu > li').mouseleave(function(){
        $('ul.subMenu').stop().slideUp(20);
    });

    var count = 2;
    var now = 0;

    start();
    function start(){
        $('.slide').eq(0).siblings().css('margin-left','-2000px');
        setInterval(function(){slide();},2000)
    }
    function slide(){
        now = now == count ? 0 : now += 1;
        $('.slide').eq(now-1).css('margin-left','-2000px');
        $('.slide').eq(now).css('margin-left','0');
    }
});