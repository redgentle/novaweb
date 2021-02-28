$(document).ready(function(){
	$('.wrap div a').click(function(e){//'e' 파라미터? 선언해서 하단에 링크 깜빡임 없애는 e.preventDefault(); 메소드를 쓴다.
		var target = $($(this).attr("href")).offset().top;// 높이값불러와서
									//offset 은  top ,left 값을 불러올수있다.
		var headerHeight = $('header').height();//높이값을 불러와줌.
		$('body, html').animate({scrollTop: target-headerHeight});// target 위치값
		e.preventDefault();//깜빡임 현상 없애줌.#링크일때
	});
})



	//논리적 사고력훈련
$(window).scroll(function(){
	$('.section').each(function(index){

		var bodyHeight = $('body').height();
		var windowHeight = $(window).height();
		var scrollRange = bodyHeight-windowHeight; 

		var topRatio = $(this).offset().top / bodyHeight;
		var bottomRatio = topRatio + ($(this).height() / bodyHeight);
		var scrollRatio = $(window).scrollTop() / scrollRange;

		console.log(topRatio, bottomRatio, scrollRatio);


		if( scrollRatio >= topRatio &&  scrollRatio < bottomRatio ){
			$('header nav ul li').removeClass('active').eq(index).addClass('active');
			$('.section').removeClass('active').eq(index).addClass('active');
		}
	});

	console.log("-----");

	var scroll = $('body').scrollTop();
	$('#quick').stop().animate({
		top : scroll
	});
	/*
	$('.section').offset().top
	$('.section').offset().top + $('.section').height()

	var topTop = $('.top').offset().top; 
	var topBottom = $('.top').height();
	var middleBottom = $('.bottom').offset().top;
	var bottomBottom = $('body').height();
	

	if(scroll > topTop && scroll < topBottom){
		$('header nav ul li').removeClass('active');
		$('header nav ul li').eq(0).addClass('active');
	}else if(scroll > topBottom && scroll < middleBottom ){
		$('header nav ul li').removeClass('active');
		$('header nav ul li').eq(1).addClass('active');
	}else if(scroll > middleBottom && scroll < bottomBottom){
		$('header nav ul li').removeClass('active');
		$('header nav ul li').eq(2).addClass('active');
	}
	*/

});











		$(document).ready(function(){
			//아래 옵션들을 설정하지 않을 시 기본값으로 적용이 됩니다.
			$('.area').bannerSlider({
				imgs	: $('.area .imgs'),
				prev	: $('.area .btn_prev'),
				next	: $('.area .btn_next'),
				navi	: $('.area .navi'),
				type	: 'slide',	//이미지가 넘어가는 효과를 결정해줍니다. // slide, fade
				auto	: true,	//이미지를 자동으로 넘길지 결정해줍니다. // false, true
				delay	: 2000,		//이미지를 자동으로 넘길 시 넘어가는 시간을 정해줍니다. // 1000 = 1초
				speed	: 500		//이미지가 넘어가는 시간입니다. // 1000 = 1초
			});
		});




		$(document).ready(function() {
			$('.popup-gallery').magnificPopup({
				delegate: 'a',
				type: 'image',
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-img-mobile',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
					titleSrc: function(item) {
						return item.el.attr('title') + '<small>Print</small>';
					}
				}
			});
		});

		$(document).ready(function() {
			$('.popup-gallery2').magnificPopup({
				delegate: 'a',
				type: 'image',
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-img-mobile',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
					titleSrc: function(item) {
						return item.el.attr('title') + '<small>Package</small>';
					}
				}
			});
		});

		$(document).ready(function() {
			$('.popup-gallery3').magnificPopup({
				delegate: 'a',
				type: 'image',
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-img-mobile',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
					titleSrc: function(item) {
						return item.el.attr('title') + '<small>Web</small>';
					}
				}
			});
		});



(function($) {

$(document).ready(function() { 

  $('#print,#package,#web').each(function(){

    var img = $(this).find('img');




    $(this).hover(function(){

      img.attr('src',img.attr('src').replace('.jpg','_on.jpg')) //jpg일때
      img.attr('src',img.attr('src').replace('.gif','_on.gif')) //gif일때

      //...
      //다른 확장자가 필요하면 아래에 추가한다




    },function(){

      img.attr('src',img.attr('src').replace('_on.jpg','.jpg')) //jpg일때
      img.attr('src',img.attr('src').replace('.gif','_on.gif')) //gif일때

      //...

      //다른 확장자가 필요하면 아래에 추가한다

    })

  })

});

})(jQuery);




