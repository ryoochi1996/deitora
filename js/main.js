$(function() {

    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        
        // レスポンシブブレーポイント（画面幅による設定）
        breakpoints: {
          // 画面幅が 640px 以上の場合（window width >= 640px）
          640: {
            slidesPerView: 2,
            spaceBetween: 5
          },
          // 画面幅が 980px 以上の場合（window width >= 980px）
          980: {
            slidesPerView: 3,
            spaceBetween: 10
          }
        },
        
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });


      $('.swiper-pagination-bullet').on('click', function() {
        $('.swiper-pagination-bullet').addClass('swiper-pagination-bullet-active');
        $('.swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');

      });

      $('.faq-list').on('click', function() {
        $(this).next().slideToggle();
        $(this).children('.faq-icon').toggleClass('is-open')

      });

      $(document).ready(function() {
        $('.drawer').drawer();
      });

      $('a[href^="#"]').on('click', function() {
        var header = $('.header').innerHeight();
        var id = $(this).attr('href');
        var position = 0;
        if( id != '#') {
            var position = $(id).offset().top - header;
        }
        
        $('html, body').animate({
            scrollTop: position
        },
        300);

    });

    $(window).on('scroll', function() {
      // $(this).scrollTop();

      if(700 < $(this).scrollTop()) {
        $('.to-top').addClass('is-show');
      } else {
        $('.to-top').removeClass('is-show');
        
      }
    });

});


  