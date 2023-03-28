import task1 from './task1.js';
import task2 from './task2.js';
import task3 from './task3.js';
import task4 from './task4.js';
import task5 from './task5.js';
import task6 from './task6.js';
import task7 from './task7.js';
import task8 from './task8.js';
import task9 from './task9.js';
import task10 from './task10.js';

const answers = [
  task1,
  task2,
  task3,
  task4,
  task5,
  task6,
  task7,
  task8,
  task9,
  task10,
];

answers.map((func) => {
  console.log(`==========${func.name}==========`);
  func();
});

