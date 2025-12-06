// ------------------------------
// Load tasks from localStorage
// ------------------------------
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// ------------------------------
// Display all tasks on page load
// ------------------------------
window.onload = () => {
    displayTasks(tasks);
};

// ------------------------------
// Add Task
// ------------------------------
document.getElementById("addBtn").addEventListener("click", function () {
    let taskText = document.getElementById("taskInput").value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(newTask);
    saveTasks();
    displayTasks(tasks);

    document.getElementById("taskInput").value = "";
});

// ------------------------------
// Save tasks to localStorage
// ------------------------------
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ------------------------------
// Display tasks
// ------------------------------
function displayTasks(taskArray) {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    taskArray.forEach(task => {
        let li = document.createElement("li");

        // Apply completed class
        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <span onclick="toggleComplete(${task.id})">${task.text}</span>
            <button class="removeBtn" onclick="removeTask(${task.id})">X</button>
        `;

        list.appendChild(li);
    });
}

// ------------------------------
// Toggle task completion
// ------------------------------
function toggleComplete(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        return task;
    });

    saveTasks();
    displayTasks(tasks);
}

// ------------------------------
// Remove task
// ------------------------------
function removeTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    displayTasks(tasks);
}

// ------------------------------
// Real-time Search Feature
// ------------------------------
document.getElementById("searchInput").addEventListener("input", function () {
    let searchValue = this.value.toLowerCase();

    let filtered = tasks.filter(task =>
        task.text.toLowerCase().includes(searchValue)
    );

    displayTasks(filtered);
});
