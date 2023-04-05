//Задача 6

for (let i = 2; i <= 10; i++) {
    
    for (let j = 1; j <= 10; j++) {

        console.log(`${i} * ${j} = ${i * j}`)
        if (j === 10) console.log('...')
        
    }

}

// Задача 7

const task7 = (number) => {

    if (Number.isNaN(+number)) return 'вы ввели не число'
    

    let counter = 0

    for (; 1 ; ) {
        number /= 2
        counter++
        if (number < 50) break
    }

    return `чисало:${number}, необходимое колличество итераций: ${counter}`

}

console.log(task7(1000))

//Задача 8

const task8 = () => {
  let sum = 0;
  let counter = 0;

  for (; 1; ) {
    let number = +prompt('введите число');
    if (number == 0) break;
    if (!+number) {
      alert('вы ввели не число!');
      continue;
    }
    sum += number;
    counter++;
  }

  return `сумма введенных чисел: ${sum} ${
    counter > 0
      ? `, среднее арифметичское введенных чисел: ${(sum / counter).toFixed(2)}`
      : ''
  }`;
};

// console.log(task8());

// Задача 9

const task9 = (string) => {
  let min = Infinity;
  let max = -Infinity;

  string = string
    .trim()
    .split('')
    .filter((item) => item == ' ' || !isNaN(item) || item == '.')
    .join('');

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ' && i !== string.length - 1) continue;

    let numReverse = '';
    let num = '';

    const start = i === string.length - 1 ? i : i - 1;

    for (let j = start; j >= 0; j--) {
      if (string[j] === ' ') break;
      numReverse += string[j];
    }

    if (numReverse.length === 1) num = numReverse;
    else {
      for (let j = numReverse.length - 1; j >= 0; j--) {
        num += numReverse[j];
      }
    }

    if (+num < min) min = num;
    if (+num > max) max = num;
  }

  return `минимальное число будет равняться: ${min}, максимальное: ${max}`;
};

console.log(task9('asdas4 8 15 16 23 42.5'));

// Задача 10

const task10 = (number) => {
  if (!Number.isInteger(number)) return 'вы ввели не число';

  const numberLength = `всего чисел: ${number.toString().length}.`;

  let sum = 0;

  for (let i = 0; i < number.toString().length; i++) {
    sum += +number.toString()[i];
    console.log(number.toString()[i]);
  }

  const sumOfNumbers = `Сумма чисел числа ${number} равна ${sum}`;

  let reverse = '';

  for (let i = number.toString().length - 1; i >= 0; i--) {
    reverse += number.toString()[i];
  }

  const reverseNumber = `обратный порядок: числа ${number} равен ${reverse}`;

  return numberLength + ' ' + sumOfNumbers + ' ' + reverseNumber;
};

console.log(task10(12345));
