// Import the prompt-sync module to get user input
const prompt = require("prompt-sync")();

// Initialize an empty array to store tasks
var tasks = [];

// Initialize a counter for task indices
var count = 1;

// Function to add a task to the tasks array
function add_task() {
    // Create an empty task object
    var task = {};
    // Assign the current count as the index of the task
    task.index = count;
    // Prompt the user for task details
    task.name = prompt("Enter task's name: ");
    task.time = prompt("Enter the time in minutes: ");
    task.description = prompt("Enter description: ");
    // Set the task mode to "open"
    task.mode = "open";
    // Increment the count for the next task
    count += 1;
    // Push the task object into the tasks array
    tasks.push(task);
    // Provide feedback to the user
    console.log("Task added successfully!");
}

// Function to remove a task from the tasks array
function remove_task() {
    // Prompt the user for the order of the task to remove
    var remove_order = parseInt(prompt("Enter the order of the task you want to remove: "));
    // Use splice to remove the task at the specified index
    tasks.splice(remove_order - 1, 1);
    // Provide feedback to the user
    console.log("Task removed successfully!");
}

// Function to view all tasks in the tasks array
function view_task() {
    // Display all tasks in the tasks array
    console.log("Tasks:");
    console.log(tasks);
}

// Main program
console.log("Welcome to your Task Manager!");

// Main loop to repeatedly prompt the user for actions
while (true) {
    // Prompt the user for their choice
    var user_choice = prompt("Enter 'a' to add, 'r' to remove, 'v' to view, or 'q' to quit: ");
    // Process user's choice
    if (user_choice.toLowerCase() === "a") {
        add_task();
    } else if (user_choice.toLowerCase() === "r") {
        remove_task();
    } else if (user_choice.toLowerCase() === "v") {
        view_task();
    } else if (user_choice.toLowerCase() === "q") {
        // Exit the loop if the user chooses to quit
        console.log("Have a Nice Day!");
        break;
    } else {
        // Display an error message for invalid input
        console.log("Please enter a valid prompt!");
    }
}
