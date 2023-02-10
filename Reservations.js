//Code to make sure that the end date is not before the start date
var start = document.getElementById('start-date');
var end = document.getElementById('end-date');

start.addEventListener('change', function () 
{
  if (start.value)
    end.min = start.value;
}, false);

end.addEventListener('change', function () 
{
  if (end.value)
    start.max = end.value;
}, false);

function ReservationComplete() {
    //Check if the form value is empty
    var a = document.forms["ReservationForm"]["name"].value;
    var b = document.forms["ReservationForm"]["email"].value;
    var c = document.forms["ReservationForm"]["phone"].value;
    var d = document.forms["ReservationForm"]["car"].value;
    var e = document.forms["ReservationForm"]["start-date"].value;
    var f = document.forms["ReservationForm"]["end-date"].value;
    var g = document.forms["ReservationForm"]["card-holder-name"].value;
    var h = document.forms["ReservationForm"]["card-number"].value;
    var i = document.forms["ReservationForm"]["expiration-date"].value;
    var j = document.forms["ReservationForm"]["cvv"].value;
  
  
    if (a == "" || b == "" || c == "" || d == "" || e == "" || f == "" || g == "" || h == "" || i == "" || j == "") {
    }
    else {
      window.location.href = "ReservationsComplete.html";
    }
  }