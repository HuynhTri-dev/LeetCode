function maxFrequencyElements(nums: number[]): number {
    let has: number[][] = [[nums[0], 1]];

    for (let i = 1; i< nums.length; i++) {
        let foundNum = has.find((num) => num[0] === nums[i]);

        foundNum ? foundNum[1]++ : has.push([nums[i], 1]);
    }

    const maxFrequency = has.sort((a, b) => b[1] - a[1]);
    const countFrequency = has.filter((num) => num[1] == maxFrequency[0][1]);

    console.log(has);
    console.log(maxFrequency);
    console.log(countFrequency);

    return  countFrequency.length * maxFrequency[0][1];
}

console.log(maxFrequencyElements([1,2,2,3,1,4]));