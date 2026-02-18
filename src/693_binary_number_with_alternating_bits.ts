function hasAlternatingBits(n: number): boolean {
    let a:number = -1;

    do {
        const x:number = n % 2;

        n = Math.floor(n/2);

        if (a === x) {
            return false;
        } else {
            a = x;
        }

    } while (n != 0);

    return true;
}

console.log(hasAlternatingBits(11));