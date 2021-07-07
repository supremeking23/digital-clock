window.addEventListener("DOMContentLoaded", function () {
	let btn_red = document.querySelector(".red");
	let btn_purple = document.querySelector(".purple");
	let btn_blue = document.querySelector(".blue");
	let btn_default_color = document.querySelector(".default-color");
	let btn_military_time = document.querySelector(".military-time");
	let btn_standard_time = document.querySelector(".standard-time");
	let time_setting = document.querySelectorAll(".time-setting");
	let clock_outer = document.querySelector(".clock");
	let clock_standard = document.querySelector(".clock-standard h2");
	let clock_military = document.querySelector(".clock-military h2");

	let sun = document.querySelector(".sun");
	let moon = document.querySelector(".moon");
	let body = document.querySelector("body");

	btn_red.addEventListener("click", function () {
		clock_standard.style.color = "#ff1744";
		clock_military.style.color = "#ff1744";
	});

	btn_purple.addEventListener("click", function () {
		clock_standard.style.color = "#d500f9";
		clock_military.style.color = "#d500f9";
	});

	btn_blue.addEventListener("click", function () {
		clock_standard.style.color = "#2196f3";
		clock_military.style.color = "#2196f3";
	});

	btn_default_color.addEventListener("click", function () {
		clock_standard.style.color = "#fff";
		clock_military.style.color = "#fff";
	});

	function showStandardTime() {
		var date = new Date();

		var hours = date.getHours(); // 0 - 23
		var minutes = date.getMinutes(); // 0 - 59
		var seconds = date.getSeconds(); // 0 - 59
		var meridiem = "AM";

		if (hours == 0) {
			hours = 12;
		}

		if (hours > 12) {
			hours = hours - 12;
			meridiem = "PM";
		}

		// will also run in the military time
		if (hours < 17) {
			sun.style.display = "block";
			moon.style.display = "none";
			body.style.backgroundColor = "#bbb";
		} else {
			moon.style.display = "block";
			sun.style.display = "none";
			body.style.backgroundColor = "#2a2a2a";
		}

		// if (hours > 14) {
		// 	sun.style.display = "block";
		// 	moon.style.display = "none";
		// } else {
		// 	moon.style.display = "block";
		// 	sun.style.display = "none";
		// }

		hours = hours < 10 ? "0" + hours : hours;
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		var time = hours + ":" + minutes + ":" + seconds + " " + meridiem;
		clock_standard.innerText = time;
		clock_standard.textContent = time;

		//recursive
		// setTimeout(showTime, 1000); .. will also work because of onload

		setInterval(showStandardTime, 1000);
		// return time;
	}

	function showMiltaryTime() {
		var date = new Date();

		// date = new Intl.DateTimeFormat("en-AU", options).format(date);

		var hours = date.getHours(); // 0 - 23
		var minutes = date.getMinutes(); // 0 - 59
		var seconds = date.getSeconds(); // 0 - 59
		var meridiem = "AM";

		// if (hour == 0) {
		// 	hour = 23;
		// }

		if (hours > 12) {
			// h = h - 12;
			meridiem = "PM";
		}

		hours = hours < 10 ? "0" + hours : hours;
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		var time = hours + ":" + minutes + ":" + seconds + " " + meridiem;
		clock_military.innerText = time;
		clock_military.textContent = time;

		//recursive
		// setTimeout(showTime, 1000); .. will also work because of onload

		setInterval(showMiltaryTime, 1000);
		// return time;
	}

	showStandardTime();
	showMiltaryTime();

	for (let i = 0; i < time_setting.length; i++) {
		time_setting[i].addEventListener("click", function () {
			console.log(this.classList.contains("standard-time"));
			if (this.classList.contains("military-time")) {
				clock_military.style.display = "block";
				clock_standard.style.display = "none";
			} else {
				clock_military.style.display = "none";
				clock_standard.style.display = "block";
			}
		});
	}

	// btn_military_time.addEventListener("click", function () {
	// 	clearInterval(default_set);
	// 	clock.innerHTML = 10011010;
	// });

	// btn_standard_time.addEventListener("click", function () {
	// 	setInterval(() => {
	// 		clock.innerHTML = showStandardTime();
	// 	}, 1000);
	// });
});
