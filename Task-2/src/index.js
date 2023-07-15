import { setItem } from './list/storage.js';
import { getTasksList } from './list/tasksGateway.js';
import { renderTasks } from './list/render.js';
import { initTodoListHandlers } from './list/toDoList.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then((tasksList) => {
    setItem('tasksList', tasksList);
    renderTasks();
  });
  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
