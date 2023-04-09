console.log('Задача 1');
// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

const task1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

task1([1, 2, 3, 4, 5]);
console.log('=============================');

console.log('Задача 2');

// Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
// быть положительными и отрицательными. Выведите на экран только отрицательные
// числа, которые больше -10, но меньше -3.

const task2 = (arr) => {
  arr.map((item) => {
    if (item > -10 && item < -3) console.log(item);
  });
};

task2([-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]);
console.log('=============================');

console.log('Задача 3');

// Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
// while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
// массива. Запишите ее в переменную result и выведите.

const task3 = () => {
  const arr = [];

  for (let i = 23; i < 57; i++) {
    arr.push(i);
  }

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])  // закомментировал, что бы не захламлять консоль
    result += arr[i];
  }

  let i = 0;

  while (i <= arr.length - 1) {
    // console.log(arr[i]) // закомментировал, что бы не захламлять консоль
    i++;
  }

  return result;
};

console.log(task3());
console.log('=============================');

console.log('Задача 4');

// Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или
// 5.

const task4 = (arr) => {
  arr.map((item) => {
    if (item[0] == 1 || item[0] == 2 || item[0] == 5) console.log(item);
  });
};

task4(['10', '20', '30', '50', '235', '3000']);
console.log('=============================');

console.log('Задача 5');

// Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
// дни недели, а выходные дни выведите жирным.

const task5 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const span = document.createElement('span');
    span.innerHTML = arr[i];
    span.style.marginRight = '10px';
    if (i === arr.length - 1 || i === arr.length - 2)
      span.style.fontWeight = 'bold';
    document.body.append(span);
  }
};

task5(['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']);
console.log('в HTML вывел');
console.log('=============================');

console.log('Задача 6');

// Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
// и получите последний элемент массива, используя свойство length.

const task6 = (number) => {
  const arr = [4, 8, 15, 16, 23];

  arr.push(number);

  return arr[arr.length - 1];
};

console.log(task6(42));
console.log('=============================');

console.log('Задача 7');

// Запросите у пользователя по очереди числовые значения при помощи prompt и
// сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое
// значение. Выведите получившийся массив на экран. Выполните сортировку чисел
// массива, и выведите его на экран.

const task7 = () => {
  const arr = [];

  const untillZero = () => {
    const value = prompt('введите число');
    if (isNaN(+value)) {
      alert('вы ввели не число!');
      return untillZero();
    }

    if (value === '')
      return arr.sort((operandA, operandB) => operandA - operandB);

    arr.push(value);

    return untillZero();
  };

  return untillZero;
};

const getArr = task7();
// console.log(getArr()); // закомментировал, что бы не надоедали промпты)
console.log('закомментировал, что бы не надоедали промпты)');
console.log('=============================');

console.log('Задача 8');

// Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
// используя цикл while и метод reverse.

const task8 = (arr) => {
  const arrClone = [...arr];
  console.log(arr.reverse());

  const arrReverse = [];
  
  let i = arr.length - 1;

  while (i >= 0) {
    arrReverse.push(arrClone[i]);
    i--;
  }

  console.log(arrReverse);
};

task8([12, false, 'Текст', 4, 2, -5, 0]);
console.log('=============================');

console.log('Задача 9');

// Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном
// целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].

const task9 = (arr) => {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) counter++;
  }

  return counter;
};

console.log(task9([5, 9, 21, , , 9, 78, , , , 6]));
console.log('=============================');

console.log('Задача 10');

// Найдите сумму элементов массива между двумя нулями (первым и последним нулями в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или [1,8,0,13,76,8,7,0,22,0,2,3,2].

const task10 = (arr) => {
  if (arr.filter((item) => item === 0).length < 2) return 0;

  return arr
    .filter((_, index) => {
      return (
        index > arr.findIndex((item) => item === 0) &&
        index < arr.lastIndexOf(0)
      );
    })
    .reduce((accum, item) => (accum += item));
};

console.log(task10([1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2]));
console.log('=============================');

console.log('Задача 11');

// Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает
// пользователь. Например: высота = 5, на экране:

const task11 = (height) => {
  const mainArr = [];

  for (let i = 0; i < height; i++) {
    let arr = [];
    for (let j = 0; j < height * 2 - 1; j++) {
      arr.push(' ');
    }
    arr = arr.map((_, index) => {
      if (i == 0) {
        if (index == (arr.length - 1) / 2) return '*';
        return ' ';
      }
      return index >= (arr.length - 1) / 2 - i &&
        index <= (arr.length - 1) / 2 + i
        ? '*'
        : ' ';
    });
    mainArr.push(arr.join(''));
  }

  mainArr.forEach((item) => console.log(item));
};

task11(12);

console.log('Задача от Владислава');
console.log('закомментировал вызов этой функции')

//Попробовал решить задачу про которую вы говорили на лекции

const task12 = (arr) => {
  const newArr = [];

  const isArr = (val) => {
    return Array.isArray(val) ? true : false;
  };

  const checkArr = (item) => {
    if (!isArr(item)) newArr.push(item);
    if (isArr(item)) return true;
  };

  const dangerRecursion = (arr) => {
    arr.map((item, index) => {
      if (checkArr(item)) dangerRecursion(arr[index]);
    });
  };

  dangerRecursion(arr);

  return newArr;
};

// task12([
//   4,
//   8,
//   15,
//   16,
//   [
//     [1, 2],
//     ['апельсин', 'мандарин'],
//     [
//       'hello world',
//       [
//         1,
//         2,
//         3,
//         [
//           'я первый элемент массива',
//           'я второй элемент массива',
//           'я третий элемент массива',
//         ],
//         'я СТРОКА',
//       ],
//     ],
//   ],
//   54,
//   ['всем привет я еще один массив', ['и я массив', ['я тоже массив']]],
//   100,
//   'последний элемент',
// ]).map((item) => console.log(item));

// Закомментировал тот вызов функции, что бы не захламлять консоль.
