function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let p1: number = m - 1;      // Con trỏ cuối phần tử thực của nums1
    let p2: number = n - 1;      // Con trỏ cuối nums2
    let p: number = m + n - 1;   // Con trỏ tại vị trí cuối cùng của nums1 (m+n)

    // Chạy ngược từ cuối mảng về đầu
    while (p2 >= 0) {
        // Nếu nums1 vẫn còn phần tử và phần tử tại p1 lớn hơn tại p2
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            // Nếu nums2 lớn hơn hoặc nums1 đã hết phần tử (p1 < 0)
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
        console.log(nums1); // Xem tiến trình gộp
    }
}

let nums3: number[] = [1, 2, 3, 0, 0, 0];
merge(nums3, 3, [2, 5, 6], 3);
console.log("Kết quả cuối cùng:", nums3);