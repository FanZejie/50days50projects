var containsDuplicate = function (nums) {
  let arr = [];
  let res = false;
  nums.forEach((num) => {
    if (!arr.includes(num)) {
      arr.push(num);
    } else {
      res = true;
    }
  });
  return res;
};

console.log(containsDuplicate([1, 2, 3, 1]));
