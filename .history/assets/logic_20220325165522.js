


function updateTime(){
var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").html(currentDate);
}

updateTime();
setInterval(function() {
  updateTime();
}, 1000);
