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

  // メニュー閉じる
  $('#mask').on('click', function() {
    $('#header').removeClass('open');
  });

  // リンククリックでメニュー閉じる
  $('#nav a').on('click', function () {
    $('#header').removeClass('open');
  });
});


/**
 * slick（スライダー）
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
$('a[href^="#"]').click(function () {
  let href = $(this).attr("href"); //リンクを取得
  let target = $(href == "#" || href == "" ? 'html' : href); //ジャンプ先ID取得
  let position = target.offset().top; //画面トップからジャンプ先要素までの距離を取得

  // スムールスクロール実行
  $("html, body").animate({scrollTop:position}, 600, "swing");
  return false;
})

// TODO：　スクロール時画像フェード表示

