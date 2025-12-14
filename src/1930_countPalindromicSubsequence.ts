function countPalindromicSubsequence(s: string): number {
  let count = 0;
  const uniqueChars = new Set(s);

  for (const char of Array.from(uniqueChars)) {
    const first = s.indexOf(char);
    const last = s.lastIndexOf(char);

    // Nếu tìm thấy 2 vị trí khác nhau và có khoảng cách > 1
    if (last - first > 1) {
      // Đếm số ký tự unique nằm giữa
      const betweenSet = new Set();
      for (let k = first + 1; k < last; k++) {
        betweenSet.add(s[k]);
      }
      count += betweenSet.size;
    }
  }

  return count;
}

// Test case
console.log(countPalindromicSubsequence("aabca")); // Expected output: 3
console.log(countPalindromicSubsequence("adc")); // Expected output: 0
console.log(countPalindromicSubsequence("bbcbaba")); // Expected output: 4
