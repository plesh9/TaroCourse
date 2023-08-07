/* RETURN TRUE IF MOBILE DEVICE  =========================================================================================================================================================================================================================================================================== */
let isMobile = {Android: function () {return navigator.userAgent.match(/Android/i);},BlackBerry: function () {return navigator.userAgent.match(/BlackBerry/i);},iOS: function () {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function () {return navigator.userAgent.match(/Opera Mini/i);},Windows: function () {return navigator.userAgent.match(/IEMobile/i);},any: function () {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());},};

// lock body
let bodyLockStatus = true;
let bodyUnlock = (delay = 100) => {
	let body = document.querySelector("body");
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll("[data-lp]");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			document.documentElement.classList.remove("lock");
		}, delay);
		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
}
let bodyLock = (delay = 100) => {
	let body = document.querySelector("body");
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll("[data-lp]");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		document.documentElement.classList.add("lock");

		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
}
let bodyLockToggle = (delay = 100) => {
	if (document.documentElement.classList.contains('lock')) {
		bodyUnlock(delay);
	} else {
		bodyLock(delay);
	}
}
// Open menu
function menuInit() {
	if (document.querySelector(".icon-menu")) {
		document.addEventListener("click", function (e) {
			if (bodyLockStatus && e.target.closest('.icon-menu')) {
				bodyLockToggle();
				document.documentElement.classList.toggle("menu-open");
			}
		});
	};
}
menuInit()

// close menu on click item

const closeMenuOnClickItem = () => {
	document.addEventListener("click", function (e) {
		if (document.documentElement.classList.contains("menu-open") && e.target.closest('.menu__item')) {
			bodyLockToggle();
			document.documentElement.classList.toggle("menu-open");
		}
	});
}
closeMenuOnClickItem()

/* SCROLL TO BLOCK  =========================================================================================================================================================================================================================================================================== */
const anchors = document.querySelectorAll('a[href^="#"]')
// Цикл по всем ссылкам
for(let anchor of anchors) {
	anchor.addEventListener("click", function(e) {
		e.preventDefault()
		const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
		document.querySelector(goto).scrollIntoView({
		behavior: "smooth",
		block: "start"
		})
	})
}

/* SCROLL ACTIONS  =========================================================================================================================================================================================================================================================================== */
window.addEventListener("scroll", scrollDocument)
const toTopBtn = document.querySelector('.up')
const banner = document.querySelector('.banner')

if (toTopBtn){
	window.addEventListener("click", function (e) {
		let target = e.target
		// CLICK toTopBtn
		if (target.closest('.up')){
			scrollToTop(target)
		}
	});
}

function scrollDocument() {
  const offset = window.pageYOffset;

  if (offset > 1000) {
    if (toTopBtn){
        toTopBtn.classList.add('up-active')
    }

  } else {
    if (toTopBtn){
      toTopBtn.classList.remove('up-active')
    }
  }
}

function scrollToTop(clickElement) {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -35);
    setTimeout(scrollToTop, 0);
  }
}

// observer
const changeNav = (entries, observer) => {
	entries.forEach((entry) => {
		if(entry.isIntersecting && entry.intersectionRatio >= 0.55 || window.pageYOffset == 0) {
			document.documentElement.classList.remove("banner-show");
		} else {
			document.documentElement.classList.add("banner-show");
		}
	});
}

const options = {
	threshold: 0.55
}

const observer = new IntersectionObserver(changeNav, options);

const points = document.querySelectorAll('[data-obs]');


if (points.length){
	points.forEach(e => observer.observe(e))
}

// form
const formBox = document.querySelector('.footer-meet-page')
const mobileForm = document.querySelector('.mobile-form')
window.addEventListener('click', (e) => {
	let target = e.target
	if (target.closest('.footer-meet-page__btn') && window.innerWidth > 767.98){
		formBox.classList.add('showForm')
	}
	if (target.closest('.footer-meet-page__btn') && window.innerWidth <= 767.98){
		bodyLockToggle();
		mobileForm.classList.add('showForm')
	}
	if (target.closest('.form__close')){
		bodyLockToggle();
		mobileForm.classList.remove('showForm')
	}
})