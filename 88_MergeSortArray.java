// import java.util.Arrays;
// import java.util.stream.IntStream;

// class Solution {
//     public void merge(int[] nums1, int m, int[] nums2, int n) {
//         // 1. Chuyển arr1 thành IntStream và lọc bỏ số 0 (SỬA LẠI: Lấy m phần tử đầu)
//         // Lỗi cũ: .filter(x -> x == 0); -> Lấy số 0
//         // SỬA: Lấy m phần tử đầu, không cần lọc nếu dùng Arrays.stream(nums1, 0, m)
//         IntStream stream1 = Arrays.stream(nums1, 0, m);

//         // 2. Chuyển arr2 thành IntStream (SỬA LẠI: Lấy tất cả n phần tử)
//         IntStream stream2 = Arrays.stream(nums2);

//         // 3. Nối hai Stream lại, sắp xếp (Sorted) và chuyển thành mảng result
//         int[] result = IntStream.concat(stream1, stream2)
//                                 .sorted() // Dùng .sorted() của Stream để sắp xếp luôn
//                                 .toArray();
        
//         // 4. KHÔNG CẦN gọi Arrays.sort(result) nữa vì đã sắp xếp ở bước 3.
//         // BƯỚC QUAN TRỌNG: Ghi kết quả trở lại vào nums1
//         if (result.length > 0) {
//              // System.arraycopy(src, srcPos, dest, destPos, length)
//              System.arraycopy(result, 0, nums1, 0, result.length); 
//         }
        
//         // Lưu ý: Nếu bạn muốn dùng Arrays.sort(result), code sẽ là:
//         // Arrays.sort(result);
//         // System.arraycopy(result, 0, nums1, 0, result.length);
//     }
// }

class Solution {
    /**
     * Nối hai mảng đã sắp xếp (nums1 và nums2) vào nums1,
     * bắt đầu từ cuối mảng để tránh ghi đè các phần tử quan trọng.
     */
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        // Khởi tạo các con trỏ
        int p1 = m - 1;       // Con trỏ cuối cùng của phần tử có nghĩa trong nums1
        int p2 = n - 1;       // Con trỏ cuối cùng của nums2
        int p = m + n - 1;    // Con trỏ cuối cùng của mảng kết quả (nums1)

        // 1. Duyệt từ cuối mảng (p) cho đến khi chúng ta đã xử lý hết nums2 (p2 < 0)
        while (p2 >= 0) {
            // Trường hợp 1: p1 đã hết (p1 < 0) hoặc phần tử tại nums1[p1] nhỏ hơn nums2[p2]
            // Hoặc: p1 vẫn còn và phần tử tại nums1[p1] >= nums2[p2]
            
            // Nếu p1 vẫn còn và phần tử ở nums1 lớn hơn (hoặc bằng)
            if (p1 >= 0 && nums1[p1] > nums2[p2]) {
                // Đặt phần tử lớn hơn (từ nums1) vào vị trí hiện tại của p
                nums1[p] = nums1[p1];
                p1--; // Di chuyển p1 về phía trước (bên trái)
            } else {
                // Đặt phần tử lớn hơn (từ nums2) vào vị trí hiện tại của p
                // Trường hợp này bao gồm khi p1 < 0 (nums1 đã hết phần tử)
                nums1[p] = nums2[p2];
                p2--; // Di chuyển p2 về phía trước (bên trái)
            }
            // Di chuyển con trỏ ghi kết quả về phía trước
            p--;
        }
        // Ghi chú: Nếu còn phần tử nào trong nums1 (p1 >= 0), chúng đã ở đúng vị trí,
        // không cần phải di chuyển gì thêm.
        // Chỉ khi còn phần tử trong nums2 (p2 >= 0), chúng ta mới cần xử lý,
        // nhưng vòng lặp while đã đảm bảo xử lý hết nums2.
    }
}