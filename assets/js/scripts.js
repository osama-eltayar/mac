jQuery(document).ready(function($){
	var redirectDate = new Date("APRIL   18, 2022 00:00:00").getTime();
	var y = setInterval(function () {
    var now = new Date().getTime();

    var distance = redirectDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);




  if (days < "10") {
    days = "0" + days;
  }
  if (hours < "10") {
      hours = "0" + hours;
  } 
  if (minutes < "10") {
      minutes = "0" + minutes;
  } 
  if (seconds < "10") {
      seconds = "0" + seconds;
  }
  
  $("#days").html(days);
  $("#hours").html(hours);
  $("#minutes").html(minutes);
  $("#seconds").html(seconds);
    if (  days <= 0 && hours <= 0 && minutes <= 0 && weeks <= 0)
    {
      $("#days").remove();
      $("#hours").remove();
      $("#minutes").remove();
	  $("#minutes").remove();
    }
}, 1000);
}); 
 


