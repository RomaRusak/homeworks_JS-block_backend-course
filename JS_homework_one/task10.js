const task10 = () => {
  const poem = `
«индо земля зашаталась под ногами-и вырос,»;
«и заревел он голосом диким...»;
«блеснула молния и ударил гром,»;
«а так какое-то чудище, страшное и мохнатое,»;
«как будто из-под земли, перед купцом:»;
«Он подошёл и сорвал аленький цветочек.»;
«зверь не зверь, человек не человек,»;
«В ту же минуту, безо всяких туч,»;
    `;

  const parseString = (str) => {
    return str
      .split(';')
      .map((item) => item.trim().slice(1, [item.length - 2]))
      .filter((item) => item.length);
  };

  const text = parseString(poem);

  [6, 8, 3, 1, 5, 7, 4, 2].map((item) => console.log(text[item - 1]));
};

export default task10;
