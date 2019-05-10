const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8}];

function makeGreen(){
	const p = document.querySelector('p');
	p.style.color = '#BADA55';
	p.style.fontSize = '50px';
}

//regular
console.log('hello!');

//interpolated
console.log('hello this is %s string', 'xxxx');

//styled
console.log('%c Some styled text', 'font-family: Times New Roman; background: blue; color: white;');

//warning
console.warn('Warning!');

//error
console.error('Big Error!');

//info:
console.info('Some Info here!');

//testing
const p = document.querySelector('p')
console.assert(p.classList.contains('class_name'), 'Wrong Class!');

//clearing
console.clear();

//viewing DOM elements
console.log(p);
console.dir(p);
console.clear();

//Grouping together
dogs.forEach(dog => {
	console.group(`${dog.name}`);
	console.log(`This is ${dog.name}`);
	console.log(`${dog.name} is ${dog.age} years old`);
	console.log(`${dog.name} is ${dog.age * 7} dog years old`);
	console.groupEnd(`${dog.name}`);
});

//Counting
console.count('whatever');
console.count('whatever');
console.count('whatever');
console.count('whatever');
console.count('whatever');
console.count('whatever');


//timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
	.then(data => data.json())
	.then(data => {
		console.timeEnd('fetching data');
		console.log(data);
	});

//Table
console.table(dogs);