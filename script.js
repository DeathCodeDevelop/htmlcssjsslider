const sliderContainer = document.getElementById("slider-container");
const slider = document.getElementById("slider");

let count = 0;
let counter = 0;
let dots = [];
let step = 0;

window.addEventListener('resize', Resize);

function Resize() {
	step = document.getElementById("slider-container").clientWidth;
	console.log(step);
	GoToSlide(0);
}

function StartSlider () {
	let dotContainer = document.getElementById("slider-dot-container");
	count = slider.childElementCount;

	for (let i = 0; i < count; i++) {
		let dot = document.createElement("div");
		dot.setAttribute("onclick", `GoToSlide(${i})`);
		dot.setAttribute("class", "slider-dot");
		dotContainer.appendChild(dot);
		dots.push(dot);
	}

	step = sliderContainer.clientWidth;
	slider.style.width = `${100*count}%`;

	for (let i = 0; i < count; i++) {
		document.getElementsByClassName("slide")[i].style.width = `${100 / count}%`;
	}
}

StartSlider();

function NextSlide() {
	
	if (counter < count - 1)
		counter++;
	else
		counter = 0;

	GoToSlide(counter);
}

function PrevSlide() {

	if (counter > 0)
		counter--;
	else
		counter = count - 1;

	GoToSlide(counter);
}

function GoToSlide(slide) {
	counter = slide;
	slider.style.transform = `translateX(${-step*counter}px)`;

	for	(let i = 0; i < count; i++) {
		dots[i].className = "slider-dot";
	}

	dots[slide].className = "slider-dot slider-dot-active";;
}

ShowSlides();

function ShowSlides() {
	NextSlide();
	setTimeout(ShowSlides, 4000);
}
