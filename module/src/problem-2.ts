const removeDuplicates = (numbers: number[]): number[] => {
    let newArray: number[] = []
    numbers.filter(number => {
        if (!newArray.includes(number)) {
            newArray.push(number)
        }
    })
    // console.log(newArray)
    return newArray;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))