function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    map.set(nums[0], 0);

    console.log(map);


    for (let i = 1; i < nums.length - 1; i++) {
        let x = nums[i] - target;

        if (map.has(x)) {
            return [map.get(x)!, i];
        } else {

            map.set(nums[i], i);
        }
    }

    return []
}

const nums1 = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums1, target));

