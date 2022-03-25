
function updateTime(){
var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").html(currentDate);
}

setInterval(function() {
  updateTime();
}, 1000);


const timeBlocks = Array.from(document.getElementsByClassName('time-block'));
var currentTime = moment().format('HH');
console.log(timeBlocks[0].children[1])

for (let i = 0; i < timeBlocks.length; i++) {

  var timeBlockId = parseInt(timeBlocks[i].id);
  var time = parseInt(currentTime);

  if (timeBlockId < time) {
    timeBlocks[i].children[1].addClass('past');
  }
  if (timeBlockId > time) {
    timeBlocks[i].children[1].className += 'future';
  }
  if (timeBlockId === time) {
    timeBlocks[i].children[1].className += 'present';
  }
}

updateTime();
setInterval(function() {
  updateTime();
}, 1000);


