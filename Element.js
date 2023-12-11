class Element {
    constructor(type, id, parentId) {
        this.type = type;
        this.id = id;
        this.parentId = parentId;
    }

    get element() {
        return document.getElementById(this.id);
    }

    get _parent() {
        return document.getElementById(this.parentId);
    }

    create() {
        let elem = document.createElement(this.type);
        elem.setAttribute('id', this.id);

        this._parent.appendChild(elem);
    }

    destroy() {
        this.element.remove();
    }

    appendChild(element) {
        this.element.appendChild(element.element);
    }
}

export class Form extends Element {
    constructor(id, parentId) {
        super('form', id, parentId);
    }

    set onsubmit(fcn) {
        this.element.onsubmit = fcn;
    }

    create() {
        super.create();
        this.element.setAttribute('action', 'javascript:;');
    }
}

export class TaskEntry extends Element {
    constructor(id, parentId) {
        super('input', id, parentId);
    }

    get value() {
        return this.element.value;
    }

    createFirstTime() {
        this.create();
        this.element.setAttribute('placeholder', 'What is one thing you will do?');
    }

    create() {
        super.create();
        this.element.setAttribute('type', 'text');
        this.element.onblur = this.element.focus;
        this.element.focus();
    }

    destroy() {
        this.element.onblur = null;
        super.destroy();
    }
}

export class Task extends Element {
    constructor(id, parentId) {
        super('p', id, parentId);
    }

    create(value) {
        super.create();
        this.element.appendChild(document.createTextNode(value));
    }
}