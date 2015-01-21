window.addEventListener("load", function () {

document.getElementById("greeting").innerHTML = "Hello, Planet Earth!";



//Part 2:

var elements = document.getElementsByTagName("li");
for (var i = 0; i < elements.length; i++) {
	elements[i].style.backgroundColor = "yellow";
}


//Part 3:

var added = document.getElementsByTagName("li");
console.log("added", added)
// added.setAttribute("")
function crossout(event){ 
	event.target.setAttribute("class", "selected");
	console.log("hello");
}
console.log(added[0]);
console.log(added[1]);
added[0].addEventListener("click", crossout);
added[1].addEventListener("click", crossout);
added[2].addEventListener("click", crossout);
added[3].addEventListener("click", crossout);
added[4].addEventListener("click", crossout);
document.getElementById("reset").addEventListener("click", reset);
});