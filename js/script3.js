const items = document.querySelectorAll("img");
addEventListeners();// << call listeners.
var completion = false;


// Check Puzzle Completion
checkGame = setInterval(function() {
	var flag = 0;

	const imageList = [
		'file:///C:/Users/Manuel/Downloads/Puzzle/imgs/img3/img3.1.1.jpg',
		'file:///C:/Users/Manuel/Downloads/Puzzle/imgs/img3/img3.2.1.jpg',
		'file:///C:/Users/Manuel/Downloads/Puzzle/imgs/img3/img3.3.1.jpg',
		'file:///C:/Users/Manuel/Downloads/Puzzle/imgs/img3/img3.4.1.jpg',
		'file:///C:/Users/Manuel/Downloads/Puzzle/imgs/img3/img3.1.2.jpg',
		'file:///C:/Users/Manuel/Downloads/Puzzle/imgs/img3/img3.2.2.jpg',
		'file:///C:/Users/Manuel/Downloads/Puzzle/imgs/img3/img3.3.2.jpg',
		'file:///C:/Users/Manuel/Downloads/Puzzle/imgs/img3/img3.4.2.jpg',
		'file:///C:/Users/Manuel/Downloads/Puzzle/imgs/img3/img3.1.3.jpg',
		'file:///C:/Users/Manuel/Downloads/Puzzle/imgs/img3/img3.2.3.jpg',
		'file:///C:/Users/Manuel/Downloads/Puzzle/imgs/img3/img3.3.3.jpg',
		'file:///C:/Users/Manuel/Downloads/Puzzle/imgs/img3/img3.4.3.jpg'
	];

	for(var i=0; i<imageList.length; i++) {
		console.log(items[i].src);
		if(items[i].src == imageList[i]){
			++flag;
		} else {}
	}
	if(flag == 12){
		for (var i=0; i<imageList.length; i++) {
			completion = true;
			document.querySelectorAll('.list img')[i].style.margin = "0px";
			document.querySelector('.list').style.boxShadow = "10px 10px 15px white, -10px -10px 15px lightblue";
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
	console.log(first);
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
var countdown = 50;

timer = setInterval(function () {
	countdown = countdown-1;
	document.getElementById('clock').innerHTML = countdown;

	if(completion == true){
		clearInterval(timer);
		document.getElementById('clock').innerHTML = "00";
		document.getElementById('clock').style.backgroundColor = "white";
	}

	if (countdown == 0) {
		clearInterval(timer);
		document.getElementById('clock').innerHTML = "00";
		document.getElementById('clock').style.backgroundColor = "red";

		setTimeout(function(){
			window.location.replace("index.html");
		}, 1000);
	}
}, 1000);