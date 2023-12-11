import { Form, Task, TaskEntry } from "./Element.js";

let form = new Form();
let taskEntry = new TaskEntry();
let task = new Task();

window.onload = () => {
    taskEntry.create();
    form.onsubmit = () => {
        task.create(taskEntry);
        taskEntry.destroy();
    };
};

window.onkeydown = (key) => {
    if (key.code === 'Enter' && task.exists()) {
        task.complete();
    }
}