const divs = document.querySelectorAll('div');

function logText(e){
    console.log(this.classList.value);
    e.stopPropagation();
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true //execute the function for just one time
}));