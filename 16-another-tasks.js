"user strict";

const ToDoList = {
  tasks: [],
  taskId: 0,

  addTask(title, priority) {
    const id = ++this.taskId;
    this.tasks.push({ title, id, priority });
  },

  deleteTaskById(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  },

  updateTaskById(newTitle, id, anotherPriority) {
    this.tasks.map((task) => {
      if (task.id === id) {
        (task.title = newTitle) || (task.priority = anotherPriority);
      }
    });
  },

  sortTasksByPriority() {
    this.tasks.sort((a, b) => a.priority - b.priority);
  },
};

const newTask = {
  tasks: [
    {
      id: 0,
      name: "тест",
      description: "описание",
      order: 0,
    },
  ],
  taskId: 0,
};

const addTaskFunc = ToDoList.addTask.bind(newTask);
const updateTaskByIdFunc = ToDoList.updateTaskById.bind(newTask);
const deleteTaskByIdFunc = ToDoList.deleteTaskById.bind(newTask);
const sortTasksByPriorityFunc = ToDoList.sortTasksByPriority.bind(newTask);

addTaskFunc("Покормить кота", 3);
addTaskFunc("Купить продукты", 1);
addTaskFunc("Погулять с собакой", 2);
console.log(newTask.tasks);

updateTaskByIdFunc("Сделать уроки", 2, 1);
console.log(newTask.tasks);

deleteTaskByIdFunc(1);
console.log(newTask.tasks);

sortTasksByPriorityFunc();
console.log(newTask.tasks);
