var colorButton = document.querySelector('button');
var body = document.body;
var color = true;

// colorButton.addEventListener('click', function () {
// 	if (color) {
// 		body.style.background = 'black';
// 	} else {
// 		body.style.background = 'white';
// 	}
// 	color = !color;
// });

colorButton.addEventListener('click', function () {
	body.classList.toggle('black');
});
