import { v4 as uuidv4 } from "uuid";

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.querySelector<HTMLFormElement>("#new-task-form");
const input = document.querySelector<HTMLInputElement>("#new-task-title");

type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

const tasks: Task[] = loadTasks();
tasks.forEach(task => addListItem(task))

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input?.value == "" || input?.value == null) return;

  const task: Task = {
    id: uuidv4(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };

  tasks.push(task);
  addListItem(task);
  saveTasks()
  input.value = "";
});

function addListItem(task: Task) {
    const item = document.createElement("li");
    const label = document.createElement("label");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.addEventListener("change", (e) => {
      task.completed = !task.completed;
      saveTasks()
  });
  checkBox.checked = task.completed;

  label.append(checkBox, task.title);
  item.append(label);
  list?.append(item);
}

function saveTasks() {
    localStorage.setItem("TASKS", JSON.stringify(tasks))
}

function loadTasks(): Task[] {
    const taskJSON = localStorage.getItem("TASKS")

    if (taskJSON == null) return []
    return JSON.parse(taskJSON)
}
