import { Form, Task, TaskEntry } from "./Element.js";

const form = new Form('dontainer', 'body');
const taskEntry = new TaskEntry('taskEntry', 'dontainer');
const task = new Task('task', 'dontainer');

window.onload = function () {
    form.create();
    taskEntry.createFirstTime();
    form.onsubmit = completeTaskEntry;
};

function completeTaskEntry() {
    task.create(taskEntry.value);
    taskEntry.destroy();
    form.onsubmit = completeTask;
}

function completeTask() {
    task.destroy();
    taskEntry.create();
    form.onsubmit = completeTaskEntry;
}