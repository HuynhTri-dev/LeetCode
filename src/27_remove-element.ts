function removeElement(nums: number[], val: number): number {
  const len = nums.length;
  let k: number = 1;

  for (let i = 0; i < len; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
    } else {
      continue;
    }

    k++;
  }

  return k;
}

// const nums: number[] = [0, 1, 2, 2, 3, 0, 4, 2];
// console.log(removeElement(nums, 2));
// console.log(nums);
