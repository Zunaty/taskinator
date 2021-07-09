var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var createTaskHandler = function(event) { 
    event.preventDefault(); 

    // holding the info for info and info type
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // creating a list item
    var listItemEl = document.createElement("li"); 
    listItemEl.className = "task-item";

    // creating div item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.classname = "task-info";

    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    listItemEl.appendChild(taskInfoEl);
    tasksToDoEl.appendChild(listItemEl); 
    }; 

formEl.addEventListener("submit", createTaskHandler);