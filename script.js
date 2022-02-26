// start function when document is ready
$(document).ready(function () {
  // setting date to the current date and time
  var date = moment().format("dddd, MMMM Do, YYYY");
  $("#currentDay").text(date);

  // declaring all global variables
  var currentTime = moment().hours();
  var saveButton = $(".saveBtn");
  var timeBlock = $(".time-block");

  setColor();

  // function to set the color according the time of day
  function setColor() {
    // loop through each time block class and for each...
    timeBlock.each(function () {
      //set hour block variable equal to the specific id number
      var hourBlock = $(this).attr("id");

      // if the current time of day is greater than the id number
      if (currentTime > hourBlock) {
        $(this).addClass("past");
      }

      // if the current time of day is equal to the id number
      else if (currentTime == hourBlock) {
        $(this).removeClass("past");
        $(this).addClass("present");
      }

      // if the current time of day is less than the id number
      else if (currentTime < hourBlock) {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  showTask();

  // when clicking on the save button to local storage
  saveButton.on("click", function (event) {
    event.preventDefault();
    var timeBlockId = $(this).attr("id");
    var task = $(this).siblings(".time-block").val();
    localStorage.setItem(timeBlockId, task);
    showTask();
  });

  // pull from local storage to show what has been saved to calendar
  function showTask() {
    for (var i = 9; i < 18; i++) {
      var task = localStorage.getItem(i);
      console.log(task);
      $("#" + i + "").text(task);
    }
  }
});
