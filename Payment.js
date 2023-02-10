var list = document.getElementById('car');
var start = document.getElementById('start-date');
var end = document.getElementById('end-date');
var extracost = document.getElementById('extra-cost');
var final = document.getElementById('final-cost');

list.addEventListener('change',function(){
    calculateDayAndCost();
},false);

start.addEventListener('change', function () {
    if (start.value)
        end.min = start.value;
        calculateDayAndCost();
}, false);

end.addEventListener('change', function () {
    if (end.value)
        start.max = end.value;
        calculateDayAndCost();
}, false);

extracost.addEventListener('change',function(){
    calculateDayAndCost();
},false);

var tempfinal;

//Calculate the amount of days and parse it into the text box
function calculateDayAndCost()
{
    var startdate = new Date(document.getElementById("start-date").value);
    var enddate = new Date(document.getElementById("end-date").value);
    var date = ((enddate - startdate) / (24 * 3600 * 1000));
    if(isNaN(date))
    {
        document.getElementById("num-of-days").value = 0;
    }
    else
    {
        document.getElementById("num-of-days").value = date;
    }

    var totalcost = date * 60;
    if(isNaN(totalcost))
    {
        document.getElementById("total-cost").value = 0;
    }
    else
    {
        document.getElementById("total-cost").value = totalcost;
    }

    var extracostvalue = extracost.value;

    tempfinal = Number(totalcost) + Number(extracostvalue)
    

    if(isNaN(tempfinal))
    {
        document.getElementById('final-cost').value = 0;
    }
    else
    {
        document.getElementById('final-cost').value = tempfinal;
    }

}

function PaymentComplete()
{
    window.location.href = "PaymentComplete.html";
}
