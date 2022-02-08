class nonDuplicateNumber {
    constructor() {}
    static singleNumber(nums) {
      let unique = 0;
      for (let num in nums) {
        unique ^= nums[num];
      }
      return unique;
    }
  }
  
  let non_duplicate_number = nonDuplicateNumber.singleNumber([
    5, 4, 3, 5, 2, 4, 3,
  ]); // 2
  