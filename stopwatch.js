window.onload = function (){
   
   var seconds = 0;
   var tens= 0;
   var Interval;
   //create variables for fields
   var addTens = document.getElementById("tens");
   var addSeconds = document.getElementById("seconds");

   //create variable for buttons
   var buttonStart = document.getElementById("button-start");
   var buttonStop = document.getElementById("button-stop");
   var buttonReset = document.getElementById("button-reset");

   buttonStart.onclick = function(){
   	clearInterval(Interval);
   	Interval = setInterval(startTimer, 10);
   } 
   
   
   buttonStop.onclick = function() {
       clearInterval(Interval);
   }
  

  	buttonReset.onclick = function() {
	    clearInterval(Interval);
	    tens = "00";
	  	seconds = "00";
	    addTens.innerHTML = tens;
	  	addSeconds.innerHTML = seconds;
  }


  function startTimer(){
  	tens++;

  	if(tens < 9){
  		addTens.innerHTML = "0" + tens;
  	}
  	if(tens > 9){
  		addTens.innerHTML = tens;
  	}

  	if(tens > 99){
  		seconds++;
  		addSeconds.innerHTML = "0" + seconds;
  		//resetting the tens
  		tens = 0;
  		addTens.innerHTML = "0" + 0;
  	}

  	if (seconds > 9){
  		addSeconds.innerHTML = seconds;
  	}
  }
  
  function showTime(){
  	var date = new Date();
  	var hour = date.getHours();
  	var minute = date.getMinutes();
  	var seconds = date.getSeconds();
  	var session = "AM";
 

  if(hour==0){
  	h = 12;
  }

  if(hour>12){
  	hour = hour-12;
  	session = "PM";
  }

  hour = (hour<10) ? "0" + hour : hour;
  minute = (minute<10) ? "0" +minute : minute;
  seconds = (seconds<10) ? "0" +seconds : seconds;


  var time = hour + ":" + minute + ":" + seconds + " " + session;

  document.getElementById("displayClock").innerHTML = time;

  document.getElementById("displayClock").textContent = time;

  setTimeout(showTime, 1000);

  console.log(time);
}

showTime();

}
