let numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const unique = (array) => {
  array.sort(function (a, b) {
    return a - b;
  });
  const final = [];
  final[0] = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] != array[i]) {
      final.push(array[i]);
    }
  }
  return final;
};

const value = unique(numbers);
console.log(value);
