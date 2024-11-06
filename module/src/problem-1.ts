const sumArray = (array: number[]): number => {
    const sum: number = array.reduce((previous, current) => previous + current)
    console.log(sum)
    return sum;
}
(sumArray([1, 2, 3, 4, 5]))