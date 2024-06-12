var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

numbers.sort(function (a, b) {
  return a - b;
});

const unique = (nums) => {
  let final = [];
  final[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] != nums[i]) {
      final.push(nums[i]);
    }
  }
  return final;
};

const value = unique(numbers);

console.log(value[value.length-1]);
