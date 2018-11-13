events();

function events () {
	//create instance of UI constructor
	let ui = new UI();
	// smooth scroll to anchor
	let scroll = new SmoothScroll('a[data-scroll]');

	document.addEventListener('scroll', ui.fixHeader.bind(this));

	document.querySelector('.header__btn').addEventListener('click', ui.showMenu);

	document.querySelector('.video-section').addEventListener('click', ui.playVideo);
}

function UI () {
	this.fixHeader = function () {
		//console.log(this.scrollY);
		if (this.scrollY > 10) {
			document.querySelector('.header').classList.add('header--fixed');
		} else if (this.scrollY <= 10 && document.querySelector('.nav').dataset.active !== "1"){
			document.querySelector('.header').classList.remove('header--fixed');
		}
	}

	this.showMenu = function (event) {
		let nav = document.querySelector('.nav'),
				btnImg = document.querySelector('.header__btn img'),
				header = document.querySelector('.header');
		event.preventDefault();
		if (nav.dataset.active === "1"){
			nav.dataset.active = "0";
			nav.style = "";
			nav.classList.toggle('nav--mobile-active');

			btnImg.src = "images/svg/menu.svg";
			if (window.scrollY < 10) {
					header.classList.remove('header--fixed');
			}	
		}else {
			btnImg.src = "images/svg/cancel.svg";
			header.classList.add('header--fixed');

			nav.dataset.active = "1";
			nav.style.display = "flex";
			nav.classList.toggle('nav--mobile-active');
		}
	}

	this.playVideo = function (event) {
		let video = document.querySelector('.video-section__video'),
				videoControls = document.querySelector('.video-section__control');videoControls
		console.log(event);
		if (event.target.classList.contains('play') 
			|| event.target.parentElement.classList.contains('play')) {
			videoControls.style.zIndex = "-1";
			video.style.zIndex = "1";
			video.play();
			video.dataset.played = "true";
		}
		if (event.target.classList.contains('video-section__video') && video.dataset.played === "true") {
			video.pause();
			video.dataset.played = "false";
			videoControls.style.zIndex = "2";
		} 
	}
}