function minimumTotal(triangle: number[][]): number {
    const n = triangle.length;

    const dp:number[] = [...triangle[n-1]];

    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);
        }
    }

    return dp[0];
}

console.log(minimumTotal([[-1],[2,3],[1,-1,-3]]))