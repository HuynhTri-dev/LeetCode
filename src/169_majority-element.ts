function majorityElement(nums: number[]): number {
  const n: number = nums.length;

  let leader: number = nums[0];
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (count === 0) {
      leader = nums[i];
    }
    if (nums[i] === leader) {
      count++;
    } else {
      count--;
    }
  }
  return leader;
}

const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
