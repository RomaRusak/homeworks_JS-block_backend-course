// задание 1

// const name = prompt('как вас зовут?');
// const age = prompt('сколько вам лет?');
// const city = prompt('в каком городе вы живете?');
// const phone = prompt('введите ваш номер телефона');
// const email = prompt('введите вашу почту');
// const company = prompt('где вы работаете?');

// console.log(`«Меня зовут ${name}. Мне ${age} лет. Я проживаю в
// городе ${city} и работаю в компании ${company}. Мои контактные данные:
// ${phone}, ${email} `);

// Задание 2

// const yearOfBirth = new Date().getFullYear() - +age;

// Задание 3
// могу только в таком варианте решить
const string = '123321'

const getArray = (str) => str.split('').map((item) => +item);

const firstSum = getArray(string).reduce(
    (accum, item, index) => (index <= 2 ? (accum += item) : accum),
    0
);

const secondSum = getArray(string).reduce(
    (accum, item, index) => (index > 2 ? (accum += item) : accum),
    0
);

console.log(firstSum === secondSum ? 'да' : 'нет')

// Задание 4

const a$4 = 0;

console.log(a$4 > 0 ? 'верно' : 'неверно');

// Задание 5

const a$5 = 10;
const b$5 = 2;

console.log(
  `сумма: ${a$5 + b$5}, разность: ${a$5 - b$5}, произведение: ${
    a$5 * b$5
  }, частное: ${a$5 / b$5}${
    a$5 + b$5 > 1 ? ', квадрат суммы: ' + Math.pow(a$5 + b$5, 2) : ''
  }`
);

//Задание 6

console.log(
  (a$5 > 2 && a$5 < 11) || (b$5 >= 6 && b$5 < 14) ? 'верно' : 'неверно'
);

//Задание 7

const n = 15;

console.log(
  `число попадет в ${
    n % 15 === 0 ? n / 15 : Math.floor(n / 15) + 1
  } четверть часа`
);

//Задание 8

const day$8 = 10;

console.log(
  `день попадет в ${
    day$8 % 10 === 0 ? day$8 / 10 : Math.floor(day$8 / 10) + 1
  } декаду`
);

//Задание 9

const day$9 = 761;

const years =
  day$9 < 365
    ? 'указанное количество дней меньше года'
    : `указанное количество дней в годах будет равно: ${day$9 / 365}`;

const mounth =
  day$9 < 31
    ? 'указанное количество дней меньше месяца'
    : `указанное количество дней в месяцах будет равно: ${day$9 / 31}`;

const weeks =
  day$9 < 7
    ? 'указанное количество дней меньше недели'
    : `указанное количество дней в неделях будет равно: ${day$9 / 7}`;

const hours = `указанное количество дней в часах будет равно: ${day$9 * 24}`;
const minutes = `указанное количество дней в минутах будет равно: ${
  day$9 * 1440
}`;
const seconds = `указанное количество дней в секундах будет равно: ${
  day$9 * 86400
}`;

console.log(years);
console.log(mounth);
console.log(weeks);
console.log(hours);
console.log(minutes);
console.log(seconds);

//Задание 10

const day$10 = Number.isInteger(day$9) ? day$9 : Math.ceil(day$9);

let mounth$10;

if (day$10 < 366) {
  mounth$10 = day$10 % 31 === 0 ? day$10 / 31 : Math.floor(day$10 / 31) + 1;
} else {
  const remainder = day$10 % 365;
  mounth$10 =
    remainder % 31 === 0 ? remainder / 31 : Math.floor(remainder / 31) + 1;
}

switch (mounth$10) {
  case 1:
    console.log('январь, зима');
    break;
  case 2:
    console.log('февраль, зима');
    break;
  case 3:
    console.log('март, весна');
    break;
  case 4:
    console.log('апрель, весна');
    break;
  case 5:
    console.log('май, весна');
    break;
  case 6:
    console.log('июнь, лето');
    break;
  case 7:
    console.log('июль, лето');
    break;
  case 8:
    console.log('август, лето');
    break;
  case 9:
    console.log('сентябрь, осень');
    break;
  case 10:
    console.log('октябрь, осень');
    break;
  case 11:
    console.log('ноябрь, осень');
    break;
  case 12:
    console.log('декабрь, зима');
    break;
}
