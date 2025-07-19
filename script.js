function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
  
    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;
      li.onclick = () => li.classList.toggle("completed");
      document.getElementById("taskList").appendChild(li);
      input.value = "";
    }
  }
  
