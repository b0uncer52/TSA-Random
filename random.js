console.log("hiya");

var whole = document.getElementById("whole");

whole.addEventListener("click", function(event) {
	var randomNum = Math.random();
	var right = document.getElementsByClassName("right");
	var left = document.getElementsByClassName("left");
	var side;
	for(i = 0; i < right.length; i++) {
		right[i].classList.remove("visible");
	}
	for(i = 0; i < left.length; i++) {
		left[i].classList.remove("visible");
	}
	if(randomNum < .5) {
		side = right;
	}else {
		side = left;
	}
	for(i = 0; i < side.length; i++) {
		side[i].classList.add("visible");
	}
});