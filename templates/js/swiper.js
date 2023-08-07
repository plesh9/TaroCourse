function initSliders() {
	if (document.querySelector('.comments-page__slider')) {
		new Swiper('.comments-page__slider', { 
			loop: true,
			slidesPerView: 1,
			spaceBetween: 15,
			speed: 800,
			autoplay: {
				delay: 2000,
				disableOnInteraction: true,
			},
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				767: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
			},
		});
	}
}
initSliders()

