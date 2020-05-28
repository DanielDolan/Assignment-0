class MySolution {
  constructor() {
    this.flag = false;
  }

  binarySearch(nums, target) {
    var min = 0;
    var max = nums.length - 1;
    var guess;

    while(min <= max) {
        guess = Math.floor((max + min) / 2);

        if (nums[guess] === target) {
            flag=true;
        }
        else {
            flag=false;
        }

    }
  }
  
}
return flag;

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;