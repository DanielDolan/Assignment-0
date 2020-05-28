function countOfAllIndexMatchingNumbers(nums) {
  let count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums.indexOf([i]) == nums[i]){
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;