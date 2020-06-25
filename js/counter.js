// Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2020 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="counter-"
    document.getElementById("counter-d").innerHTML = days;
    document.getElementById("counter-h").innerHTML = hours;
    document.getElementById("counter-m").innerHTML = minutes;
    document.getElementById("counter-s").innerHTML = seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter-d").innerHTML = "00";
        document.getElementById("counter-h").innerHTML = "00";
        document.getElementById("counter-m").innerHTML = "00";
        document.getElementById("counter-s").innerHTML = "00";
    }
}, 1000);