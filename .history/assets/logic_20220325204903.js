// displays date and time a the top of the page. 
function updateTime(){
var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").html(currentDate);
}
//refreshes the date/time every 1000ms
setInterval(function() {
  updateTime();
}, 1000);


const timeBlocks = Array.from(document.getElementsByClassName('time-block'));
var currentTime = moment().format('HH');
// assigns the past present and future classes to the text content areas based on what time it is. 
for (let i = 0; i < timeBlocks.length; i++) {

  var timeBlockId = parseInt(timeBlocks[i].id);
  var time = parseInt(currentTime);

  if (timeBlockId < time) {
    timeBlocks[i].children[1].className += 'past';
  }
  if (timeBlockId > time) {
    timeBlocks[i].children[1].className += 'future';
  }
  if (timeBlockId === time) {
    timeBlocks[i].children[1].className += 'present';
  }
}

$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var timeSlot = $(this).parent().attr("id");
  localStorage.setItem(timeSlot, text);
});

// function loadContent() {
for (var i = 8; i < 21; i++) {
  var savedContent = localStorage.getItem(i);
  var textAreaEl = document.getElementById(`hr${i}`);
  // textAreaEl.textContent = savedContent;
  console.log(textContent);
// }

}
loadContent();
updateTime();



