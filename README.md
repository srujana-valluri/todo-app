# todo-app
# Enhanced Todo List Application

This project is an enhanced Todo List web application built using **HTML, CSS, and JavaScript**.  
It allows users to create, search, complete, and delete tasks.  
All tasks are stored in **localStorage** using a JSON array so data stays even after refreshing the page.

---

## 🚀 Features

### ✔ Add Tasks  
Users can type a task and click "Add Task" to add it to the list.

### ✔ Mark as Completed  
Click on any task to toggle its completed status (line-through effect).

### ✔ Delete Tasks  
Click the red "X" button to remove a task.

### ✔ Search Tasks  
Use the search bar to filter tasks in real time.

### ✔ LocalStorage Support  
All tasks are saved automatically as a JSON array:  
```json
[
  {
    "id": 12345678,
    "text": "Sample Task",
    "completed": false
  }
]


