import { Form, Task, TaskEntry } from "./Element.js";

const form = new Form('dontainer', 'body');
const taskEntry = new TaskEntry('taskEntry', 'body');
const task = new Task('task', 'body');

window.onload = function () {
    taskEntry.create();
    // form.appendChild(taskEntry);
    // form.onsubmit = function () {
    //     task.create(taskEntry.value);
    //     taskEntry.destroy();
    // }
};

window.onkeyup = function (event) {
    task.create(event.code);
};