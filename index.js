// ハンバーガーメニュー
$(function() {
  $('#nav-btn').on('click', function() {
    // alert('aaaa');
    if ($('header').hasClass('open')) {
      $('header').removeClass('open');
    } else {
      $('header').addClass('open');
    }
  });

  $('#mask').on('click', function() {
    $('header').removeClass('open');
  });
});