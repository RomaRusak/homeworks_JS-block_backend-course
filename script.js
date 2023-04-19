// Контакты. Возм. методы: добавление нового контакта (ввод ФИО, возраст, телефон, эл.почта), проверка введенной информации, например: проверить возраст – должен бытьцелым неотрицательным числом больше 18, вывод информации о конкретном контакте, вывод всех контактов.

class User {
  constructor({ name, surname, email, age, phone, id }) {
    this.name = name || null;
    this.surname = surname || null;
    this.email = email || null;
    this.age = age || null;
    this.phone = phone || null;
    this.id = id;
  }

  setData (data) {
    Object.assign(this, data);
  };
}

class ContactList {
  constructor() {
    this.switch = false;
    this.contacts = [];
  }

  setSwitch() {
    this.switch = !this.switch;
    return this;
  }

  addContact (data) {
    if (!this.switch) return console.log('я выключен!');

    if (isNaN(+data.age) || data.age < 18)
      return console.log('возраст должен быть больше 18!');
    data.id = this.#generateId();
    this.contacts.push(new User(data));
    return this;
  }; // добавляю контакт

  #generateId () {
    const id = Math.floor(Math.random() * 100 + 1);
    if (this.contacts.some((item) => item.id === id)) return this.generateId();
    return id;
  }; // добавляю id

  removeContact ({ name }) {
    if (!this.switch) return console.log('я выключен!');

    const { id } = this.contacts.find((contact) => contact.name === name);
    this.contacts = this.contacts.filter((contact) => contact.id != id);
    return this;
  }; //удаляем контакт

  setContact (name, data) {
    if (!this.switch) return console.log('я выключен!');

    const { id } = this.contacts.find((contact) => contact.name === name);
    if (!id) return console.log('контакт не найден!');

    this.contacts.map((user) => {
      if (user.id === id) user.setData(data);
    });

    return this
  }; // редактируем контакт

  showContact (name) {
    this.contacts.map((contact) => {
      if (contact.name === name) console.log(contact);
    });
  };

  showAllContacts () {
    this.contacts.map((contact) => console.log(contact));
  };
}

const borderBottom = '=======================';

const contactList = new ContactList(); //создал телефонную книгу
contactList.setSwitch(); //включил телефон
contactList.addContact({
  name: 'Рома',
  surname: 'Русак',
  email: 'roma@gmail.com',
  age: 26,
  phone: '+375 25 313 58 39',
}); //добавил Рому
contactList.addContact({
  name: 'Никита',
  surname: 'Иванов',
  email: 'nikita@gmail.com',
  age: 26,
  phone: '+375 25 111 22 33',
}); //добавил Никиту
contactList.addContact({ name: 'Вася', age: 15 }); // добавил Васю
contactList.addContact({
  name: 'Лера',
  surname: 'Петрова',
  email: 'lera@gmail.com',
  age: 25,
  phone: '+375 25 444 55 66',
}); //добавил Леру
contactList.removeContact({ name: 'Рома' }); //удалил Рому
contactList.setContact('Лера', { name: 'Леша', surname: 'РАБОТА' }); // перезаписал Леру
contactList.showContact('Леша'); // попросил показать Лешу
contactList.showAllContacts(); // попросил показать всех
