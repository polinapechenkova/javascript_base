"user strict";

const ToDoList = {
  tasks: [],
  taskId: 0,

  addTask: function (title, priority) {
    const id = ++this.taskId;
    this.tasks.push({ title, id, priority });
  },

  deleteTaskById: function (id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  },

  updateTaskById: function (newTitle, id, anotherPriority) {
    this.tasks.map((task) => {
      if (task.id === id) {
        (task.title = newTitle) || (task.priority = anotherPriority);
      }
    });
  },

  sortTasksByPriority: function () {
    this.tasks.sort((a, b) => a.priority - b.priority);
  },
};

ToDoList.addTask("Помыть посуду", 1);
ToDoList.addTask("Погулять с собакой", 2);
ToDoList.addTask("Купить продукты", 3);
console.log(ToDoList.tasks);

ToDoList.deleteTaskById(1);
console.log(ToDoList.tasks);

ToDoList.updateTaskById("Закончить проект", 2, 1);
console.log(ToDoList.tasks);

ToDoList.sortTasksByPriority();
console.log(ToDoList.tasks);
