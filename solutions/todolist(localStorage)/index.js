const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let taskId = 0;

// Charger les tâches sauvegardées
window.onload = () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((task) => createTask(task));
  taskId = savedTasks.length ? savedTasks[savedTasks.length - 1].id + 1 : 0;
};

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    createTask({ id: new Date().getTime(), text: taskText, done: false });
    saveTasks();
    taskInput.value = "";
  }
});

const createTask = ({ id, text, done }) => {
  const li = document.createElement("li");
  li.setAttribute("data-id", id);
  li.textContent = `${text} (ID: ${id})`;

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✓";
  doneBtn.addEventListener("click", () => {
    li.classList.toggle("done");
    updateDoneStatus(id, li.classList.contains("done"));
    saveTasks();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.addEventListener("click", () => {
    li.remove();
    removeTask(id);
    saveTasks();
  });

  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);
  if (done) li.classList.add("done");
  taskList.appendChild(li);
};

const saveTasks = () => {
  const tasks = [];
  taskList.querySelectorAll("li").forEach((li) => {
    const id = parseInt(li.getAttribute("data-id"));
    const text = li.childNodes[0].textContent.replace(/ \(ID:.*\)/, "");
    const done = li.classList.contains("done");
    tasks.push({ id, text, done });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const updateDoneStatus = (id, doneStatus) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const task = tasks.find((t) => t.id === id);
  if (task) task.done = doneStatus;
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const removeTask = (id) => {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((t) => t.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
