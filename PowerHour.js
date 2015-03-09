var numShots = 0;
var timePerShot = 0;
var curTime = 0;
var totalTime = 0;

var secondTimer;
var refreshTimer;

function update() {
	curTime++;
	document.getElementById("time").innerHTML = curTime + "s";

	console.log(totalTime/timePerShot);
};

function timerPerShot() {
	document.getElementById('audiotag1').play();
	numShots ++;
	document.getElementById("numShots").innerHTML = "Shots taken: " + numShots;
	curTime = 0;
}

function init() {
	timePerShot = document.getElementById("timePerShotInput").value;
	totalTime = document.getElementById("totalTimeInput").value;

	numShots = 0;
	curTime = 0;

	secondTimer = setInterval(update, 1000);
	refreshTimer = setInterval(timerPerShot, timePerShot*1000);
}

function stop() {
	clearInterval(secondTimer);
	clearInterval(refreshTimer);
}