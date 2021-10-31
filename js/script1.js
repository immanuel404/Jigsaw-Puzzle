const items = document.querySelectorAll("img");
addEventListeners();// << call listeners.
var completion = false;


// Check Puzzle Completion
checkGame = setInterval(function() {
	var flag = 0;

	const imageList = [
		'https://immanuel404.github.io/web_Game3-Jigsaw/imgs/img1/img1.1.1.jpg',
		'https://immanuel404.github.io/web_Game3-Jigsaw/imgs/img1/img1.2.1.jpg',
		'https://immanuel404.github.io/web_Game3-Jigsaw/imgs/img1/img1.3.1.jpg',
		'https://immanuel404.github.io/web_Game3-Jigsaw/imgs/img1/img1.4.1.jpg',
		'https://immanuel404.github.io/web_Game3-Jigsaw/imgs/img1/img1.1.2.jpg',
		'https://immanuel404.github.io/web_Game3-Jigsaw/imgs/img1/img1.2.2.jpg',
		'https://immanuel404.github.io/web_Game3-Jigsaw/imgs/img1/img1.3.2.jpg',
		'https://immanuel404.github.io/web_Game3-Jigsaw/imgs/img1/img1.4.2.jpg',
		'https://immanuel404.github.io/web_Game3-Jigsaw/imgs/img1/img1.1.3.jpg',
		'https://immanuel404.github.io/web_Game3-Jigsaw/imgs/img1/img1.2.3.jpg',
		'https://immanuel404.github.io/web_Game3-Jigsaw/imgs/img1/img1.3.3.jpg',
		'https://immanuel404.github.io/web_Game3-Jigsaw/imgs/img1/img1.4.3.jpg'
	];

	for (var i=0; i<imageList.length; i++) {
		// console.log(items[i].src);
		if(items[i].src == imageList[i]){
			++flag;
			// console.log(flag);
		} else {}
	}
	if(flag == 12){
		for (var i=0; i<imageList.length; i++) {
			completion = true;
			document.querySelectorAll('.list img')[i].style.margin = "0px";
			document.querySelector('.list').style.boxShadow = "12px 12px 18px white, -12px -12px 18px skyblue";
			clearInterval(checkGame);
			var sound = new Audio("sound/applause.mp3");
			sound.play();
		}
	}
}, 1000);



// Add EventListeners
function addEventListeners() {
	items.forEach(item => {
		item.addEventListener('dragstart', dragStart);
		item.addEventListener('dragover', dragOver);
		item.addEventListener('drop', dragDrop);
	});
}
// Drag & Drop Listeners
var dragStartIndex = "";
var dragEndIndex = "";

function dragStart(e) {
	console.log('Event: ', 'dragstart');
	dragStartIndex = e.target.id;

	const first = document.getElementById(dragStartIndex).src;
	// console.log(first);
}

function dragOver(e) {
	e.preventDefault();
	console.log('Event: ', 'dragOver');
}

function dragDrop(e) {
	e.preventDefault();
	console.log('Event: ', 'dragDrop');
	dragEndIndex = e.target.id;

	swapItems(dragStartIndex, dragEndIndex);
}
// Swap List Items
function swapItems(fromIndex, toIndex) {
	// console.log(fromIndex, toIndex);
	const first = document.getElementById(fromIndex).src;
	const second = document.getElementById(toIndex).src;
	// console.log(first);
	document.getElementById(toIndex).src = first;
	document.getElementById(fromIndex).src = second;
}


// CountDown Timer
var countdown = 30;

timer = setInterval(function () {
	countdown = countdown-1;
	document.getElementById('clock').innerHTML = countdown;

	if(completion == true){
		document.getElementById('clock').innerHTML = "00";
		document.getElementById('clock').style.backgroundColor = "white";
		clearInterval(timer);
	}

	if (countdown == 0) {
		document.getElementById('clock').innerHTML = "00";
		document.getElementById('clock').style.backgroundColor = "red";
		clearInterval(timer);

		setTimeout(function(){
			window.location.replace("index.html");
		}, 1000);
	}
}, 1000);
