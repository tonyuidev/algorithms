class twoSum {
    static sum(nums: string | any[], target: number) {
      let values = {};
      for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (diff in values) {
          return [i, values[diff]];
        }
        values[nums[i]] = i;
      }
      return [];
    }
  }
  
let two_sum = twoSum.sum([2,7,11,11], 22) // [3,2]