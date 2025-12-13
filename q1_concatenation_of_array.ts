// C1: Lưu trữ độ dài ban đầu (1ms)

function getConcatenation(nums: number[]): number[] {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    nums.push(nums[i]);
  }

  /**
   * Thao tác push() liên tục vào một mảng đang được truy cập có thể gây ra chi phí quản lý bộ nhớ
   * (ví dụ: mảng phải được cấp phát lại và sao chép khi hết dung lượng Heap).
   */

  return nums;
}

// C2: Sử dụng Spread Syntax (Cách hiện đại, ngắn gọn nhất) (1ms)
function getConcatenation2(nums: number[]): number[] {
  return [...nums, ...nums];
  /**
   * Đây là cách hiện đại và được tối ưu hóa cao trong các engine JS
   * (như V8) để tạo mảng mới nhanh chóng bằng cách sao chép các phần tử.
   */
}

// C3: Sử dụng concat (0ms)
function getConcatenation3(nums: number[]): number[] {
  return nums.concat(nums);
  /**
   * Tương tự như Spread Syntax, concat() là một phương thức gốc của mảng và được tối ưu hóa cực kỳ tốt ở cấp độ C++ bên trong engine V8.
   * Thường là phương thức nhanh nhất để nối mảng.
   * Được triển khai trực tiếp bằng code C++ trong engine V8.
   * Chúng tận dụng các kỹ thuật sao chép bộ nhớ nhanh nhất (ví dụ: memcpy), giúp chúng hoạt động cực kỳ hiệu quả,
   * thường nhanh hơn một vòng lặp JavaScript thuần túy.
   */
}

// C4: (0ms)
function getConcatenation4(nums: number[]): number[] {
  const result = new Array(nums.length * 2);

  for (let i = 0; i < nums.length * 2; i++) {
    const index = i % nums.length;
    result[i] = nums[index];
  }

  /**
   * Bằng cách cấp phát trước kích thước mảng (new Array(n * 2)), bạn giảm thiểu chi phí cấp phát lại bộ nhớ
   * (reallocation) trong quá trình vòng lặp, dẫn đến hiệu suất cao.
   */

  return result;
}

const nums = [1, 2, 1];
console.log(getConcatenation2(nums));
