// Сделайте функцию, которая отнимает от первого числа второе и делит на
// третье. Числа передаются параметром.

const task1 = (a, b, c) => (a - b) / c;

console.log('задача 1');
console.log(task1(10, 2, 4));
console.log('===============');

// Сделайте функцию, которая возвращает куб числа и его квадрат. Число
// передается параметром.

const task2 = (num) =>
  `кварат числа ${num} = ${Math.pow(num, 2)}, куб числа ${num} = ${Math.pow(
    num,
    3
  )}`;

console.log('задача 2');
console.log(task2(3));
console.log('===============');

// Напишите функции min и max, которые возвращают меньшее и большее из
// чисел a и b.

const min = (a, b) => (a - b >= 0 ? b : a);
const max = (a, b) => (a - b >= 0 ? a : b);

console.log('задача 3');
console.log(min(10, 5));
console.log(max(10, 5));
console.log('===============');

// Напишите две функции: первая ф-ция должна возвращать массив с
// числовыми значениями, диапазон которых должен вводиться пользователем
// с клавиатуры; вторая – выводить полученный массив.

const task4 = () => {
  const getNum = (str) => {
    const num = prompt(`введите ${str}`);

    if (isNaN(+num)) {
      alert('вы ввели не число!');
      return getNum(str);
    }

    if (num.length === 0) {
      alert('вы ввели пустую строку');
      return getNum(str);
    }

    return num;
  }; //проверяю на число

  let firstNum = +getNum('первое число');
  let secondNum = +getNum('второе число и оно должно быть больше первого');

  if (firstNum > secondNum) {
    alert('первое число должно быть меньше второго!');
    return task4();
  }

  const arr = [];

  for (let i = firstNum; i < secondNum; i++) {
    arr.push(i);
  }

  return arr;
};

console.log('задача 4');
console.log('закомментировал решение');
// console.log(task4()) //закомментировал, что бы не надоедали промпты
console.log('===============');

// Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false.

const isEven = (num) => (num % 2 === 0 ? true : false);

console.log('задача 5');
console.log(isEven(3));
console.log('===============');

// . Напишите ф-цию, в которую передается массив с целыми числами.
// Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей
// задачи.

const task6 = (arr) => arr.filter((item) => isEven(item));

console.log('задача 6');
console.log(task6([4, 8, 15, 16, 23, 42]));
console.log('===============');

//Задача 7 с пирамидкой

const task7 = function (num, symb) {
  const createPyramid = (num, symb) => {
    const mainArr = [];

    for (let i = 1; i <= num; i++) {
      const arr = [];

      for (let j = 1; j <= i; j++) {
        symb === undefined ? arr.push(i) : arr.push(symb);
      }

      mainArr.push(
        symb === undefined
          ? num < 10
            ? arr.join('')
            : arr.join(' ')
          : arr.join('')
      );
    }

    return mainArr;
  };

  const pyramid = createPyramid(num, symb);
  pyramid.map((item) => console.log(item));
};

console.log('задача 7');
task7(8); // проверяю с одним аргументом
task7(11, '*'); // проверяю с двумя аргументами
console.log('===============');

// Задача 8 с пирамидкой

const task8 = (row, reverse = false) => {
  
  const mainArr = [];
  const center = Math.floor((row * 2 + 1) / 2);

  for (
    let i = !reverse ? 0 : row;
    !reverse ? i < row : i >= 0;
    !reverse ? i++ : i--
  ) {
    const arr = [];

    for (let j = 1; j < row * 2; j++) {
      if (i === 0 && j === center) {
        arr.push('*');
        continue;
      }

      if (i > 0 && j >= center - i && j <= center + i) {
        arr.push('*');
        continue;
      }

      arr.push(' ');
    }

    mainArr.push(arr);
  }

  mainArr.map((item) => console.log(item.join('')));
};

console.log('задача 8');
console.log('обычный треугольник');
task8(7)
console.log(' ');
console.log('перевернутый треугольник');
task8(7, true) // в упор не понимаю по какой причине он дважды выводится (
console.log('===============');

// Напишите ф-цию, которая возвращает массив заполненный числами
// Фибоначи от 0 до 1000.

const task9 = (num) => {
  const arr = [0, 1];

  const addNewNumber = () => {
    const newNum = arr[arr.length - 1] + arr[arr.length - 2];

    arr.push(newNum);

    return arr[arr.length - 1] + arr[arr.length - 2] > num
      ? arr
      : addNewNumber();
  };

  return addNewNumber;
};

console.log('задача 9');
const addNumber = task9(1000);
console.log(addNumber());
console.log('===============');

// const task9_two = function (num) {
//   const arr = [0, 1];

//   const addNewNumber = () => {
//     const newNum = arr[arr.length - 1] + arr[arr.length - 2];

//     arr.push(newNum);

//     return arr[arr.length - 1] + arr[arr.length - 2] > num
//       ? arr
//       : addNewNumber();
//   };

//   return addNewNumber;

// } (1000)

// console.log(task9_two())
// console.log('===============')
// тут попробовал по другому немного реализовать замыкание

// Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
// опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). Исп. Рекурсию

const task10 = (num) => {
  num = num
    .toString()
    .split('')
    .reduce((accum, item) => {
      return (accum += +item);
    }, 0);

  return num > 9 ? task10(num) : num;
};

console.log('задача 10');
console.log(task10(880005553535));
console.log('===============');

// Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл.

const task11 = (arr) => {
  let counter = 0;

  const show = () => {
    console.log(arr[counter]);
    counter++;
    if (counter < arr.length) return show();
  };

  return show;
};

console.log('задача 11');
const showArr = task11([4, 8, 15, 16, 23, 42]);
showArr();
console.log('===============');

//12 задача

const task12 = () => {
  const getData = (promptValue) => {
    const value = prompt(`пожалуйста введите ${promptValue}`);
    if (value.length === 0) {
      alert('вы ничего не ввели!');
      return getData(promptValue);
    }
    return value;
  }; //ругаюсь на пустую строку

  const star = '*';

  const name = getData('ваше имя');
  const surname = getData('вашу фамилию');
  const patronymic = getData('ваше отчество');
  const groupNumber = getData('номер вашей группы');

  const lineOne = 'Домашняя работа: «Функции»';
  const lineTwo = `Выполнил: студент гр. ${groupNumber}`;
  const lineThree = `${name} ${surname} ${patronymic}`;

  let lines = [lineOne, lineTwo, lineThree];

  const maxLength = Math.max(...lines.map((item) => item.length)); // нахожу самую длинную строку

  const addSpace = (str) => {
    for (let i = str.length; i < maxLength; i++) {
      str.push(' ');
    }

    return str;
  };

  const addStar = (arr) => {
    for (let i = arr.length; i < maxLength; i++) {
      arr.push(star);
    }

    return arr;
  };

  lines = lines
    .map((item) => item.split(''))
    .map((item) => {
      if (item.length < maxLength) return addSpace(item);
      return item;
    }); // добавляю пробелы, что бы выравнять все строки до самой длинной

  const top = addStar([]);
  const bottom = addStar([]);

  lines.push(bottom);
  lines.unshift(top);

  lines = lines.map((item) => {
    return [star, ...item, star].join('');
  }); //добавляю самую первую и самую последнюю звездочку в каждой строке

  return lines;
};

console.log('Задача 12');
console.log('закомментировал решение');
// task12().map(item => console.log(item)) // закомментировал, что бы не надоедали промпты)
console.log('===============');

// Напишите ф-цию, которая должна проверить правильность ввода адреса
// эл. почты, неиспользуя регулярные выражения. Почта верна при условии:
// a. весь адрес не должен содержать русские буквы и спецсимволы, кроме
// одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут
// быть первыми и последними в адресе, и идти подряд, например: «..», «@.»,
// «.@» или «@@», «_@», «@-», «--» и т.п.
// b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
// имя может содержать только буквы, цифры, но не быть первыми и
// единственными в имени, и точку;
// c. после последней точки и после @, домен верхнего уровня (ru, by, com и
// т.п.) не может быть длиной менее 2 и более 11 символов.

const task13 = (mail) => {
  const ivalidValue = 'не валидно!';

  mail = mail.split('').map((item) => item.toLowerCase());

  const ivalidSymbols = [
    'а',
    'б',
    'в',
    'г',
    'д',
    'е',
    'ё',
    'ж',
    'з',
    'и',
    'й',
    'к',
    'л',
    'м',
    'н',
    'о',
    'п',
    'р',
    'с',
    'т',
    'у',
    'ф',
    'х',
    'ц',
    'ч',
    'ш',
    'щ',
    'ъ',
    'ы',
    'ь',
    'э',
    'ю',
    'я',
    '!',
    '№',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '+',
    '"',
    '#',
    '%',
    ':',
    '?',
    '=',
  ];

  //даже не буду пытататься ввести все символы, все равно про какой-нибудь забуду)

  const oncePossible = ['@', '_', '-', '.'];

  const numbersArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  if (mail.some((item) => ivalidSymbols.some((inv) => inv === item)))
    return ivalidValue; // проверяю на недопустимые символы

  if (
    oncePossible.some(
      (item) => item === mail[0] || item === mail[mail.length - 1]
    )
  )
    return ivalidValue; // проверяю, что допустимые символы не в начале и не в конце

  const checkSequence = (mail) => {
    mail = mail.map((item) => oncePossible.some((onc) => onc === item));

    for (let i = 0; i < mail.length; i++) {
      if (i === 0) continue;
      if (mail[i] === true && mail[i - 1] === true) return false;
    }

    return true;
  }; // тут только последовательность проверяю

  const checkOncePossible = (mail) => {
    let oncePossibleClone = [...oncePossible];

    const removeSymbol = (symbol) => {
      oncePossibleClone = oncePossibleClone.filter((item) => item != symbol);
    };

    let newMail = mail.filter((item) => {
      if (!oncePossible.some((symb) => symb === item)) return true;
      if (oncePossibleClone.some((onc) => onc === item)) {
        removeSymbol(item);
        return true;
      }
    }); // тут что допустимый символ не больше 1 раза встретиться только раз

    if (newMail.length != mail.length) return true;
  }; //тут проверяю, что бы допустимые символы по разу

  const checkMinOnce = (mail) => {
    let flag = false;

    const mustHave = ['@', '.'];

    mustHave.map((item) => {
      if (!mail.find((let) => let == item)) flag = true;
    });

    return flag;
  }; // тут что допустимый символ не встретиться КАЖДЫЙ не менее 1 раза

  const checkDomainName = (mail) => {
    const invalidSymbols = ['@', '-', '_'];

    let flag = false;

    invalidSymbols.map((item) => {
      if (mail.find((let) => let == item)) flag = true;
    });

    numbersArr.map((item) => {
      if (mail.find((let) => let == item)) flag = true;
    });

    return flag;
  }; // тут что в доменном имени максимум из символов будет точка и не будет цифр

  const checkFirtLastUserName = (mail) => {
    let flag = false;

    numbersArr.map((item) => {
      if (mail.find((let) => let == item)) flag = true;
    });

    return flag;
  }; // проверяю,что бы 1 и последний символ пользовательского имени не был цифрой

  const checkDomainMailNameLength = (mail) => {
    if (mail.length < 2 || mail.length > 11) return true;
  }; //проверка на длина доменного имени

  if (!checkSequence(mail)) return ivalidValue; // Проверяю, что бы допустимые символы не встречались 2 и более раза подряд

  if (checkOncePossible(mail)) return ivalidValue; // Проверяю, что бы допустимые символ встречался не чаще чем по разу и не больше

  if (checkMinOnce(mail)) return ivalidValue; // Мне кажется, что требования допускает разночтение (, я так понимаю, что обязательными символами является [@, .] а [-, _] опциональны

  const adSymbolIndex = mail.findIndex((item) => item === '@'); //нахожу индекс собаки

  const userMailName = mail.slice(0, adSymbolIndex); //нашел пользовательское имя

  if (userMailName.length <= 2) return ivalidValue; // проверка на длину пользовательского имени

  const domainMailName = mail.slice(adSymbolIndex + 1); // нашел доменное имя

  if (checkDomainName(domainMailName)) return ivalidValue;

  if (
    checkFirtLastUserName([
      userMailName[0],
      userMailName[userMailName.length - 1],
    ])
  )
    return ivalidValue; // Раньше была проверка, что 1 и последний символ всего емейла не может быть допустимым символом и проверка, что 2 допустимые символа друг за другом не следуеют, тут делаю просто проверку на числа (1 и послдний символ пользовательского имени не должен равняться числу)

  if (checkDomainMailNameLength(domainMailName)) return ivalidValue;

  return 'ваша почта валидна';
};

console.log('Задача 13');
console.log(task13('Roma-rusak@gmail.com'));

// мне кажется, что тут много разночтений в задании. Попытался реализовать в соответствии с моим понимание требований)
