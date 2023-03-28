const getType = (val) => {
  return typeof val;
};

const task1 = () => {
  ['Привет', 123, 15.8, true, 'true'].map((item) => {
    console.log(item, getType(item));
  });
};

export { getType };
export default task1;

