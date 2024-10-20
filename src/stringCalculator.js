function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const delimiterLine = numbers.split("\n")[0];
    delimiter = new RegExp(delimiterLine[2]);
    numbers = numbers.split("\n")[1];
  }

  const numArray = numbers.split(delimiter).map(Number);
  const negatives = numArray.filter(num => num < 0);
  if (negatives.length) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
