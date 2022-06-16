function findMissVal(arr: number[]): number[] {
    let arr2: number[] = [];
    for (let i: number = 1; i <= 10; i++) {
        if (!arr.includes(i)) {
            arr2.push(i);
        }
    }

    return arr2;
}


const arr: number[] = [1, 2, 3, 4, 5];
console.log(findMissVal(arr));