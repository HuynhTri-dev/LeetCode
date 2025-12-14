// Phức tạp  $O(n^2)$ rồi nên cút
function removeDuplicates(nums: number[]): number {
  const len = nums.length;
  if (len === 0 || len === 1) return len;

  // Lưu trữ lại các số đã có
  let haveIn: number[] = [nums[0]];

  let k: number = 1;

  for (let i = 1; i < nums.length; i++) {
    let dup: boolean = false;

    // Check coi có trùng với haveIn ko
    for (let j = 0; j < haveIn.length; j++) {
      if (nums[i] == haveIn[j]) {
        dup = true;
        break;
      }
    }

    if (dup !== true) {
      haveIn.push(nums[i]);
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

// Nhanh hơn nhờ tìm kiếm từ set nhưng chưa phải nhanh nhất
function removeDuplicates2(nums: number[]): number {
  const len = nums.length;
  if (len === 0 || len === 1) return len;

  // Lưu trữ lại các số đã có
  const seen = new Set<number>();
  seen.add(nums[0]);

  let k: number = 1;

  for (let i = 1; i < nums.length; i++) {
    if (!seen.has(nums[i])) {
      nums[k] = nums[i];
      ++k;
      seen.add(nums[i]);
    }
  }

  return k;
}

// Trên kia tối ưu rồi, nhưng ko hiểu đề bài
/**
 * Đề bài là sắp xếp theo thứ tự tăng dần rồi nên mình
 * xử lý nó gọn hơn bằng cách so sánh theo cặp liền kề nhau
 *  */
function removeDuplicates3(nums: number[]): number {
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates3(nums));
console.log(nums);
