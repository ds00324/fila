$(function(){ 
    $('.tgl_btn').on('click',function(){
        $(this).toggleClass('active');
        $('.nav').toggleClass('show')
    })
    $('.hover_m').mouseover(function(){
        $('.m_list').addClass('show');
    })
    $('.hover_m').mouseout(function(){
        $('.m_list').removeClass('show');
    })
    $('.hover_w').mouseover(function(){
        $('.w_list').addClass('show');
    })
    $('.hover_w').mouseout(function(){
        $('.tmp').removeClass('show');
    })
    $('.hover_b').mouseover(function(){
        $('.b_list').addClass('show');
    })
    $('.hover_b').mouseout(function(){
        $('.tmp').removeClass('show');
    })
    $('.hover_g').mouseover(function(){
        $('.g_list').addClass('show');
    })
    $('.hover_g').mouseout(function(){
        $('.tmp').removeClass('show');
    })
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    $('.click_event01').on('click',function(){
        $(this).removeClass('event');
        $('.boxm_list01').removeClass('event');
        $('.click_event02').removeClass('event');
        $('.boxm_list02').removeClass('event');
        $(this).removeClass('event1');
    })
    $('.click_event02').on('click',function(){
        $(this).addClass('event');
        $('.boxm_list01').addClass('event');
        $('.click_event02').addClass('event');
        $('.boxm_list02').addClass('event');
        $('.click_event01').addClass('event1');
    })
    $('.top_right img').on('click',function(){
        $('.s_box').addClass('event');
    })
    $('.closed').on('click',function(){
        $('.s_box').removeClass('event');
    })
    $('.aside>img').on('click',function(){
        $('html, body').animate({scrollTop :0},800);
    })
})