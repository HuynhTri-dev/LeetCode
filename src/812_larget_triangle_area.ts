function area(
    x1:number, y1:number,
    x2:number, y2:number,
    x3:number, y3:number
): number {
    return Math.abs(
        x1*(y2 - y3) +
        x2*(y3 - y1) +
        x3*(y1 - y2)
    ) / 2;
}


function largestTriangleArea(points: number[][]): number {
    let maxArea:number = 0;
    for (let i:number = 0; i < points.length; i++) {
        for (let j:number = i + 1; j < points.length; j++) {
            for (let z:number = j + 1; z < points.length; z++) {
                const [x1, y1] = points[i];
                const [x2, y2] = points[j];
                const [x3, y3] = points[z];
                const newArea = area(x1,y1,x2,y2,x3,y3);
                if(newArea > maxArea) {
                    maxArea = newArea;
                }
            }
        }
    }

    return maxArea;
}

console.log(largestTriangleArea([[1,0],[0,0],[0,1]]));

// S=1/2|(x1​(y2​−y3​)+x2​(y3​−y1​)+x3​(y1​−y2​)|