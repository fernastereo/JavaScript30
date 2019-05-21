const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

function shadow(e){
	const width = hero.offsetWidth;
	const height = hero.offsetHeight;
	//const { offsetWidth: width, offsetHeight: height } = hero; //this line is the same than two lines before

	let { offsetX: x, offsetY: y } = e;

	//this = hero
	//e.target = element where the mouse is now
	if (this !== e.target) {
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;
	}

	const xWalk = Math.round((x / width * walk) - (walk / 2));
	const yWalk = Math.round((y / height * walk) - (walk / 2));

	text.style.textShadow = `
		${xWalk}px ${yWalk}px 0 red,
		${xWalk * -1}px ${yWalk}px 0 blue
	`;
}

hero.addEventListener('mousemove', shadow);