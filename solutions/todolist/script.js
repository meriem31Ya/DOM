const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  createTask({
    taskText,
  });
});

const createTask = ({ taskText }) => {
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    // Ajout des boutons
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "✓";
    doneBtn.addEventListener("click", () => {
      li.classList.toggle("done");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    // ajouter au local storage
    localStorage.setItem("tasks", taskList.innerHTML);
    taskInput.value = "";
  }
  return;
};
