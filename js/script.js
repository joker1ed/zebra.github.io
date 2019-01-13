$(document).ready(function(){
		$('ul.sf-menu').superfish({
			  cssArrows: false,
		});

		$('.shop-products-list .shop-item').on('click', function() {
			var path;
			path = $(this).attr('data-img-path');
			var price;
            price = $(this).attr('value');
            console.log(price);
            $('.s-main-btn #price span').html(price);
			$('.s-main-img img').fadeOut(400, function() {
				$('.s-main-img img').attr('src', path).fadeIn(400);
		  });
		});
		
	});