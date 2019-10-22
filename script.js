// Render Current Date

var currentDate = moment().format("MMM Do YY");
var currentDay = moment().format('dddd');

console.log(currentDate);
console.log(currentDay);

$('#currentDay').append(currentDay + ", " + currentDate);
$('#currentDay').css("color", "#06AED5");

// Storage of Tasks & Event Listener

var taskForm = document.getElementById("taskForm");
var newTask9Am = document.getElementById("newTask9Am");
var newTask10Am = document.getElementById("newTask10Am");
var newTask11Am = document.getElementById("newTask11Am");
var newTask12Pm = document.getElementById("newTask12Pm");
var newTask1Pm = document.getElementById("newTask1Pm");
var newTask2Pm = document.getElementById("newTask2Pm");
var newTask3Pm = document.getElementById("newTask3Pm");
var newTask4Pm = document.getElementById("newTask4Pm");
var newTask5Pm = document.getElementById("newTask5Pm");

taskForm.addEventListener("submit", function (event) {

    localStorage.setItem("9 AM Task", newTask9Am.value);
    localStorage.setItem("10 AM Task", newTask10Am.value);
    localStorage.setItem("11 AM Task", newTask11Am.value);
    localStorage.setItem("12 PM Task", newTask12Pm.value);
    localStorage.setItem("1 PM Task", newTask1Pm.value);
    localStorage.setItem("2 PM Task", newTask2Pm.value);
    localStorage.setItem("3 PM Task", newTask3Pm.value);
    localStorage.setItem("4 PM Task", newTask4Pm.value);
    localStorage.setItem("5 PM Task", newTask5Pm.value);


});

// Render Tasks to Text Area

window.onload = function () {

    var savedValue9Am = localStorage.getItem("9 AM Task");
    var savedValue10Am = localStorage.getItem("10 AM Task");
    var savedValue11Am = localStorage.getItem("11 AM Task");
    var savedValue12Pm = localStorage.getItem("12 PM Task");
    var savedValue1Pm = localStorage.getItem("1 PM Task");
    var savedValue2Pm = localStorage.getItem("2 PM Task");
    var savedValue3Pm = localStorage.getItem("3 PM Task");
    var savedValue4Pm = localStorage.getItem("4 PM Task");
    var savedValue5Pm = localStorage.getItem("5 PM Task");

    document.getElementById("newTask9Am").value = savedValue9Am;
    document.getElementById("newTask10Am").value = savedValue10Am;
    document.getElementById("newTask11Am").value = savedValue11Am;
    document.getElementById("newTask12Pm").value = savedValue12Pm;
    document.getElementById("newTask1Pm").value = savedValue1Pm;
    document.getElementById("newTask2Pm").value = savedValue2Pm;
    document.getElementById("newTask3Pm").value = savedValue3Pm;
    document.getElementById("newTask4Pm").value = savedValue4Pm;
    document.getElementById("newTask5Pm").value = savedValue5Pm;

};

