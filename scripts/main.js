var myImage = document.querySelector("img");

myImage.onclick = function() {
	var mySrc = myImage.getAttribute("src");
	if (mySrc === "./images/firefox.jpg") {
		myImage.setAttribute("src", "./images/Bite.jpg");
	} else {
		myImage.setAttribute("src", "./images/firefox.jpg");
	}
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
	var myName = prompt("Please enter your name.") //asks the user to enter some data, and stores that data in a variable after the user presses OK.
	
	localStorage.setItem("name", myName); //create and store a data item called 'name', and set its value to the myName variable that contains the name the user entered.
	
	myHeading.textContent = "Welcome, " + myName; //set the textContent of the heading to a string, plus the user's name.
	
	//initialization code, as it sets up the app when it first loads:
	if (!localStorage.getItem("name")) {
		setUserName();
	} else {
		var storedName = localStorage.getItem("name");
		myHeading.textContent = "Welcome, " + storedName;
	}
}

myButton.onclick = function() {
	setUserName();
}