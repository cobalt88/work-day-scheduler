// var timeBlock0 = document.getElementById('hr-9A');
// var timeBlock1 = document.getElementById('hr-10A');
// var timeBlock2 = document.getElementById('hr-11A');
// var timeBlock3 = document.getElementById('hr-12P');
// var timeBlock4 = document.getElementById('hr-1P');
// var timeBlock5 = document.getElementById('hr-2P');
// var timeBlock6 = document.getElementById('hr-3P');
// var timeBlock7 = document.getElementById('hr-4P');
// var timeBlock8 = document.getElementById('hr-5P');
// var timeBlock9 = document.getElementById('hr-6P');
// var timeBlock10 = document.getElementById('hr-7P');
// var timeBlock11 = document.getElementById('hr-8P');
// var timeBlock12 = document.getElementById('hr-9P');



function updateTime(){
var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").html(currentDate);
}

setInterval(function() {
  updateTime();
}, 1000);


const timeBlocks = Array.from(document.getElementsByClassName('time-block'));
var currentTime = moment().format('HHmm');
console.log(timeBlocks[0].children[1])

for (let i = 0; i < timeBlocks.length; i++) {
  var timeBlockId = parseInt(timeBlocks[i].id);
  console.log(timeBlockId);
  // if (timeBlocks[i].id > currentTime) {
  //   timeBlocks[i].children[1].className += 'past';
  // }
}

updateTime();
setInterval(function() {
  updateTime();
}, 1000);


