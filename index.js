/**
 * ハンバーガーメニュー
 */
$(function() {
  $('#nav-btn').on('click', function() {
    // alert('aaaa');
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });

  $('#mask').on('click', function() {
    $('#header').removeClass('open');
  });
});


/**
 * slick
 */
$('.slick-center').slick({
  arrows: false,
  centerMode: true,
  centerPadding: '85px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

// TODO: ページ移動アニメーション

// TODO：　スクロール時画像フェード表示

