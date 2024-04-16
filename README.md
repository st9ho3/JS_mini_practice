

<h2>JavaScript Task Manager</h2>

<h3>Components:</h3>

<p><strong>Importing Modules:</strong> The program imports the <code>prompt-sync</code> module to enable user input via the console.</p>

<p><strong>Initialization:</strong> It initializes an empty array called <code>tasks</code> to store task objects, and a counter <code>count</code> to keep track of the indices of tasks.</p>

<h3>Functions:</h3>

<p><strong>add_task():</strong> This function prompts the user to input details for a new task (name, time, description), assigns an index to the task based on the current count, sets the task mode to "open", increments the count for the next task, and then adds the task object to the tasks array.</p>

<p><strong>remove_task():</strong> This function prompts the user to specify the order of the task they want to remove, then removes the corresponding task from the tasks array using the <code>splice</code> method.</p>

<p><strong>view_task():</strong> This function displays all tasks currently stored in the tasks array.</p>

<h3>Main Program:</h3>

<ol>
  <li>It starts by displaying a welcome message.</li>
  <li>Then, it enters a loop where it repeatedly prompts the user for their choice of action: add a task, remove a task, view tasks, or quit.</li>
  <li>Based on the user's choice, it calls the corresponding function or exits the loop if the user chooses to quit.</li>
</ol>

<p>Overall, this program provides a simple command-line interface for managing tasks, allowing users to add, remove, view tasks, and quit the program when done.</p>

