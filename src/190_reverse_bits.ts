// Đề yêu cầu đảo số bằng bit, nhưng tính ra lúc tính chuyển từ thập sang bit thì mình lấy xuôi là được

// Chuyển thập phân -> bit (xuôi)
function toBit(x: number):number[] {
    let bit:number[] = [];
    let du = 0;
    do {
        du = x % 2;
        x = (x-du) / 2;
        bit.push(du);

    } while (x != 0);

    while (bit.length < 32) {
        bit.push(0);
    }

    return bit;
}
// Chuyển từ bit -> thập phân
function toDecimal(x:number[]): number {
    let y:number = 0;
    console.log(x);
    for (let i = x.length - 1; i >=0; i--) {
        y += x[i] * (2 ** (32-i-1));
    }

    return y;
}

function reverseBits(n: number): number {
    console.log(n);
    return toDecimal(toBit(n));
}

console.log(reverseBits(43261596));
