$(document).ready(function () {
	// 햄버거 버튼 클릭 이벤트
	$('.m-menu-btn').on('click', function () {
		console.log("버튼 클릭됨!"); // 작동 확인용 ( 콘솔창에서 확인 가능)

		// gnb에 active 클래스를 토글
		$('.gnb').toggleClass('active');

		// 아이콘 변경 (선택사항)
		const icon = $(this).find('span');
		if ($('.gnb').hasClass('active')) {
			icon.text('close'); // 닫기 아이콘으로 변경
		} else {
			icon.text('menu'); // 다시 메뉴 아이콘으로
		}
	});
});
