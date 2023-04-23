class TaskList {
    #tasks = []

    setTasks() {
        let task = {}

        const name = document.getElementById('name')
        const details = document.getElementById('details')
        const id = this.#generateId()

        task.name = name.value
        task.details = details.value
        task.id = id
        this.#tasks.push(task)

        name.value = ''
        details.value = ''

        this.getTasks()
    }

    #generateId () {
        const id = Math.floor(Math.random() * 100 + 1);
        if (this.#tasks.some((item) => item.id === id)) return this.#generateId();
        return id;
      };

    getTasks() {
        this.#displayTasks()
    }

    removeTasks(id) {
        this.#tasks = this.#tasks.filter(item => item.id !== id)
        this.getTasks()
    }

    #displayTasks() {
            let timetable = document.getElementById('timetable')
            timetable.innerHTML = ''

            this.#tasks.map(item => {
                let newTr = document.createElement('tr')
                let newTd = document.createElement('td')
                let newTd2 = document.createElement('td')
                let newTd3 = document.createElement('td')
                let removeButton = document.createElement('button')
                removeButton.innerText = 'удалить'
                removeButton.addEventListener('click', () => this.removeTasks(item.id))

                timetable.append(newTr)
                newTr.appendChild(newTd)
                newTr.appendChild(newTd2)
                newTr.appendChild(newTd3)

                newTd.innerText = item.name
                newTd2.innerText = item.details
                newTd3.append(removeButton)
            })

           
    }
}