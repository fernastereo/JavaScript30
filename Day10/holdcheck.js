const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e){
	//check if they had the shift key down
	//and check that they are checking it
	let inBetween = false;
	if (e.shiftKey && this.checked) {
		//go ahead and do what we please
		//loop over every single checkbox
		checkboxes.forEach(checkBox =>{
			if(checkBox === this || checkBox === lastChecked){
				inBetween = !inBetween;
			}
			if (inBetween) {
				checkBox.checked = true;
			}
		});
	}
	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
