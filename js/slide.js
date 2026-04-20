$(function () {
  const $inner = $('.cont-1-inner');
  const $indicator = $('.indicator');
  const totalItems = $('.img-wrap').length;
  let currentIndex = 0;

  //점(dot) 생성
  for (let i = 0; i < totalItems; i++) {
    $indicator.append('<div class="dot"></div>');
  }

  //초기 배치: 마지막 아이템을 맨 앞으로 보내 무한 루프 준비
  $('.img-wrap:last').prependTo($inner);
  $inner.css('margin-left', '-33.333%');

  function updateDots(index) {
    let realIndex = (index % totalItems + totalItems) % totalItems;
    $indicator.find('.dot').removeClass('on').eq(realIndex).addClass('on');
  }

  //다음 버튼: 현재 위치(-33.333%)에서 한 칸 더 왼쪽(-66.666%)으로 이동
  $('.next').on('click', function () {
    if ($inner.is(':animated')) return; // 애니메이션 중 클릭 방지

    currentIndex++;
    $inner.stop().animate({ marginLeft: '-66.666%' }, 500, function () {
      $('.img-wrap:first').appendTo($inner); // 첫 번째를 뒤로 보냄
      $inner.css('margin-left', '-33.333%'); // 위치 리셋
      updateDots(currentIndex);
    });
  });

  //이전 버튼: 현재 위치(-33.333%)에서 오른쪽(0%)으로 당김
  $('.prev').on('click', function () {
    if ($inner.is(':animated')) return;

    currentIndex--;
    $inner.stop().animate({ marginLeft: '0%' }, 500, function () {
      $('.img-wrap:last').prependTo($inner); // 마지막을 앞으로 가져옴
      $inner.css('margin-left', '-33.333%'); // 위치 리셋
      updateDots(currentIndex);
    });
  });

  updateDots(currentIndex);
});