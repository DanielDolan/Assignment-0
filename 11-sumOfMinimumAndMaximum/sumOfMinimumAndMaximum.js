function sumOfMinimumAndMaximum(nums) {
  let maxValue=nums[0];
  let minValue=nums[0]
  
  for (var i = 1; i < nums.length; i++) {
      if (nums[i] < minValue){
      minValue = nums[i];
      }
      if (nums[i] > maxValue){
      maxValue = nums[i];
      }
  }
  sum= minValue+maxValue
  return sum;
}
// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;