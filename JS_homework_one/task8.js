const task8 = () => {
  const a = 8,
        b = 3;

  const f1 = (a, b) => {
    return (16 - a + 2 * b) / 2;
  };

  const f2 = (a, b) => {
    return (a - 15 * b) / (b - 6);
  };

  const f3 = (a, b) => {
    return 23780 / (1 + 2 + a + b);
  };

  [f1, f2, f3].map((func) => console.log(func(a, b)));
};

export default task8;
