function initializeDate() {
	let date = new Date();
	let hours = date.getHours(); // 0 - 23
	let minutes = date.getMinutes(); // 0 - 59
	let seconds = date.getSeconds(); // 0 - 59
	let meridiem = "AM";

	return { hours, minutes, seconds, meridiem };
}

window.addEventListener("DOMContentLoaded", function () {
	let btn_red = document.querySelector(".red");
	let btn_purple = document.querySelector(".purple");
	let btn_blue = document.querySelector(".blue");
	let btn_default_color = document.querySelector(".default-color");
	let time_setting = document.querySelectorAll(".time-setting");
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
		let { hours, minutes, seconds, meridiem } = initializeDate();

		// will also run in the military time
		// alert(hours);
		if (hours <= 18) {
			sun.style.display = "block";
			moon.style.display = "none";
			body.style.backgroundColor = "#bbb";
		} else {
			moon.style.display = "block";
			sun.style.display = "none";
			body.style.backgroundColor = "#2a2a2a";
		}

		if (hours == 0) {
			hours = 12;
		}

		if (hours > 12) {
			hours = hours - 12;
			meridiem = "PM";
		}

		hours = hours < 10 ? "0" + hours : hours;
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		let time = hours + ":" + minutes + ":" + seconds + " " + meridiem;
		clock_standard.innerText = time;
		clock_standard.textContent = time;

		//recursive
		// setTimeout(showTime, 1000); .. will also work because of onload

		setInterval(showStandardTime, 1000);
		// return time;
	}

	function showMiltaryTime() {
		let { hours, minutes, seconds, meridiem } = initializeDate();

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

		let time = hours + ":" + minutes + ":" + seconds + " " + meridiem;
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
			// console.log(this.classList.contains("standard-time"));
			if (this.classList.contains("military-time")) {
				clock_military.style.display = "block";
				clock_standard.style.display = "none";
			} else {
				clock_military.style.display = "none";
				clock_standard.style.display = "block";
			}
		});
	}
});
