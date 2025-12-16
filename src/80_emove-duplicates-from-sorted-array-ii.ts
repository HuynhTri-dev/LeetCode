// Quá chậm :))) (59ms)

function removeDuplicates80(nums: number[]): number {
  let slow = 0;
  let repeat: number = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[slow] === nums[fast] && repeat === 0) {
      repeat++;
      slow++;
      nums[slow] = nums[fast];
    }

    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
      repeat = 0;
    }
  }

  return slow + 1;
}

// Đăng cấp (47ms) 0ms chắc do ngôn ngữ quá :)))
const removeDuplicates80_1 = (nums: number[]): number => {
  let l: number = 0;
  let len: number = nums.length;

  for (let r: number = 0; r < len; r++) {
    if (
      nums[l] === nums[r] &&
      (nums[l + 1] === nums[r + 1] || nums[l] === nums[r + 1])
    ) {
      // r++ is automatic, don't do anything
      // l will lag
    } else {
      // nums[r] is differnet from nums[l];
      l++;
      nums[l] = nums[r];
    }
  }

  return l + 1;
};

const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates80_1(nums));
console.log(nums);
