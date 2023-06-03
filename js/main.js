(function ($) {
	"use strict";

	// Spinner
	var spinner = function () {
		setTimeout(function () {
			if ($("#spinner").length > 0) {
				$("#spinner").removeClass("show");
			}
		}, 1);
	};
	spinner();

	// Initiate the wowjs
	new WOW().init();

	// Sticky Navbar
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			$(".sticky-top").addClass("shadow-sm").css("top", "0px");
		} else {
			$(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
		}
	});

	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			$(".back-to-top").fadeIn("slow");
		} else {
			$(".back-to-top").fadeOut("slow");
		}
	});
	$(".back-to-top").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
		return false;
	});

	// Testimonials carousel
	$(".testimonial-carousel").owlCarousel({
		autoplay: true,
		smartSpeed: 1000,
		items: 1,
		dots: false,
		loop: true,
		nav: true,
		navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
	});
})(jQuery);

const form = document.querySelector(".js-mailer-form");

if (form) {
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const name = form.querySelector("input[name=name]").value;
		const phone = form.querySelector("input[name=phone]").value;
		const email = form.querySelector("input[name=email]").value;
		const type = form.querySelector("input[name=type]").value;
		const message = form.querySelector("textarea[name=message]").value;

		emailjs
			.send(
				"service_7f6ozr2",
				"template_myzntx5",
				{
					from_name: name,
					to_name: "Роман",
					from_email: email,
					to_email: "belkovv86@gmail.com",
					message: `
							Имя: ${name} <br>
							Почта: ${email} <br>
							Телефон: ${phone} <br>
							Тип обращения: ${type} <br>
							Сообщение: ${message} <br>
						`,
				},
				"2porjTWLL4kuYRNh0"
			)
			.then(
				() => {
					alert("Сообщение отправленно");
				},
				(error) => {
					console.log(error);
				}
			);
	});
}
