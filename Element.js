function get(id) {
    return document.getElementById(id);
}

function create(type, id, parentId) {
    let parent = get(parentId);
    let element = document.createElement(type);
    element.setAttribute('id', id);
    parent.appendChild(element);
    return element;
}

export class Form {
    set onsubmit(func) {
        get('dontainer').onsubmit = func;
    }
}

export class TaskEntry {
    create() {
        this.element = create('input', 'taskEntry', 'dontainer');
        this.element.setAttribute('type', 'text');
        this.element.onblur = this.element.focus;
        this.element.focus();
    }

    destroy() {
        this.element.onblur = null;
        this.element.remove();
    }
}

export class Task {

    create(taskEntry) {
        this.element = create('p', 'task', 'dontainer');
        this.element.appendChild(document.createTextNode(taskEntry.element.value));
        this.element.onclick = () => {
            this.crossOut();
            setTimeout(() => {
                this.destroy();
                taskEntry.create();
            }, 400);
        }
    }

    exists() {
        return get('task');
    }

    complete() {
        this.element.onclick();
    }

    crossOut() {
        this.element.style.textDecorationLine = 'line-through';
    }

    destroy() {
        this.element.remove();
    }
}