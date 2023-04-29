class NodeConstructor {
    static createNode (tagName, attributes, text) {
        let elem = document.createElement(`${tagName}`)

        const addAtributes = (elem, attributes) => {
            attributes.forEach(attr => {
                elem.setAttribute(attr[0], attr[1])
            })
            return elem
        }

        const addInnerText = (elem, text) => {
            elem.innerHTML = `${text}`
            return elem
        }
        
        switch (arguments.length) {
            case 1:
                return elem
            case 2:
                return Array.isArray(arguments[1])
                ? addAtributes(elem, attributes)
                : addInnerText(elem, attributes)        
            case 3:
                elem = addAtributes(elem, attributes)
                return addInnerText(elem, text)
        }
    }
}

class Todo {
    constructor(description, id, checkStatus) {
        this.description = description
        this.todoActive = checkStatus
        this.id = id
    }

    toggleActiveStatus() {
        this.todoActive = !this.todoActive
    }

    set editVal (val) {
        this.description = val
    }
}

class TodoList {
    constructor () {
        this.todos = []
    }

    addTodo (description, checkStatus) {
        const id = this.#generateId()
        const todo = new Todo(description, id, checkStatus)
        this.todos = [...this.todos, todo]
    }

    removeTodo (id) {
        this.todos = [...this.todos].filter(item => item.id !== id)
    }

    edit (id, value) {
        const item = this.todos.find(item => item.id === id)
        item.editVal = value
    }

    #generateId () {
        const id = Math.floor(Math.random() * 100 + 1);
        if (this.todos.some((item) => item.id === id)) return this.#generateId();
        return id;
    };

    toggleActiveStatus(id) {
        const item = this.todos.find(item => item.id === id)
        item.toggleActiveStatus()
    }
}

class TodoListUI extends TodoList {
    constructor () {
        super()
        this.#init()
    }

    #init() {
        const container = NodeConstructor.createNode('div', [['class', 'container']])
        const todoWrapper = NodeConstructor.createNode('div', [['class', 'todolist-wrapper']])
        const todoHead = NodeConstructor.createNode('header', [['class', 'todo-header']], 'ToDo LiSt')
        const todoBody = NodeConstructor.createNode('div', [['class', 'todo-body']])
        const todoInputWrapper = NodeConstructor.createNode('div', [['class', 'todo-input-wrapper']])
        const todoInput = NodeConstructor.createNode('input', [['class', 'todo-input'], ['type', 'text'], ['placeholder','Type your task...']])
        const addButton = NodeConstructor.createNode('button', [['class', 'todo-add-button']], 'Add todo')
        const todosWrapper = NodeConstructor.createNode('div', [['class', 'todos-wrapper']])
        const todoSystem = NodeConstructor.createNode('p', [['class', 'system-messages']])

        document.body.insertBefore(container, document.querySelector('script'))
        container.append(todoWrapper)
        todoWrapper.append(todoHead, todoBody)
        todoBody.append(todoInputWrapper, todosWrapper)
        todoInputWrapper.append(todoInput, addButton, todoSystem)

        addButton.addEventListener('click', () => {
            this.add()
        })
        
       
        this.#localStorageInit()
    }

    #render() {
        const {todos} = this
        document.querySelector('.system-messages').innerText = ''
        document.querySelector('.todos-wrapper').innerHTML = ''

        todos.forEach(todo => {
            const todoWrapper = NodeConstructor.createNode('div', [['class', 'todo-item-wrapper']])
            const customCheckboxWrapper = NodeConstructor.createNode('div', [['class', 'custom-checkbox-wrapper']])
            const checkbox = NodeConstructor.createNode('div', !todo.todoActive ? [['class', 'input-item-checkbox checkbox-active']] : [['class', 'input-item-checkbox checkbox-unactive']])
            const todoDescription = NodeConstructor.createNode('p',[
                todo.todoActive 
                ? ['class', 'todo-description']
                : ['class', 'todo-description todo-compleated']
            ], todo.description)
            const buttonsWrapper = NodeConstructor.createNode('div', [['class', 'buttons-wrapper']])
            const removeButton = NodeConstructor.createNode('button', [['class', 'todo-button']], 'remove')
            const editButton = NodeConstructor.createNode('button', [['class', 'todo-button']], 'edit')

            document.querySelector('.todos-wrapper').append(todoWrapper)
            todoWrapper.append(customCheckboxWrapper, todoDescription, buttonsWrapper)
            customCheckboxWrapper.append(checkbox)
            buttonsWrapper.append(removeButton)
            if (todo.todoActive) buttonsWrapper.append(editButton)

            checkbox.addEventListener('click', () => {
                this.toggleActiveStatus(todo.id)
                this.#render()
            })

            removeButton.addEventListener('click', () => {
                this.removeTodo(todo.id)
                this.#render()
            })

            editButton.addEventListener('click', () => {
                editButton.innerText = 'Save'
                todoDescription.setAttribute('contenteditable', 'true')
                todoDescription.classList.add('editable')
                document.querySelector('.system-messages').innerHTML = 
                "You can eddit you todo now.<br/>please don't forget to save your changes"

                editButton.addEventListener('click', () => {
                    this.edit(todo.id ,todoDescription.innerText)
                    this.#render()
                })
            })
        })

        this.#saveInLocalStorage()
    }

    add () {
        const input = document.querySelector('.todo-input')

        if (this.#validation()) {
            super.addTodo(input.value, true)
            input.value = ''
            this.#render()
        } else {
            document.querySelector('.system-messages').innerText = 'you cannot add empty task!'
        }
       
    }

    #validation () {
      return document.querySelector('.todo-input').value.trim().length > 0 ? true : false
    }

    #saveInLocalStorage () {
       const data = JSON.stringify(this.todos)
       localStorage.setItem('todosData', data)
    }

    #localStorageInit () {
        const data = JSON.parse(localStorage.getItem('todosData'))
        if (data !== null && data.length > 0) {
            
            data.forEach(item => {
                super.addTodo(item.description, item.todoActive)
            })

            this.#render()
        }
    }
}

const todoList = new TodoListUI()
