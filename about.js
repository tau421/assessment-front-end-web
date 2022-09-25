console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Submission successful!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function userCompliment(evt) {
	alert('Looking good!')
}

let picCompliment = document.querySelector('img')

picCompliment.addEventListener('mouseover', userCompliment)