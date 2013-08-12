
	function start(){
		navigator.notification.beep(1);
		console.log('22');
		var x=document.getElementById('ac');
		
		startWatch();
	
	}

	
function startWatch() {
	var x = document.getElementById('ac');
	x.innerHTML='bs';

function s(a) { x.textContent = a.x;}
function onError() {alert('onError!');}
var options = { frequency: 1000 };  

var watchID = navigator.accelerometer.watchAcceleration(s, onError, options);

}