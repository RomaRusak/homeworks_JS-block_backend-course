import { getType } from './task1.js';

const a7 = 100 / 25;

const task2 = () => {
  const a1 = 5 % 3;
  const a2 = 3 % 5;
  const a3 = 5 + '3';
  const a4 = '5' - 3;
  const a5 = 75 + 'кг';
  const a6 = 785 * 653;
  const a8 = 0 * 0;
  const a9 = 0 / 2;
  const a10 = 89 / 0;
  const a11 = 98 + 2;
  const a12 = 5 - 98;
  const a13 = (8 + 56 * 4) / 5;
  const a14 = ((9 - 12) * 7) / (5 + 2);
  const a15 = +'123';
  const a16 = 1 || 0;
  const a17 = false || true;
  const a18 = true > 0;

  [
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7,
    a8,
    a9,
    a10,
    a11,
    a12,
    a13,
    a14,
    a15,
    a16,
    a17,
    a18,
  ].map((item) => {
    console.log(item, getType(item));
  });
};
export { a7 };
export default task2;
