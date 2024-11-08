{
    //

    const removeDuplicates = (numbers: number[]): number[] => {
        let newArray: number[] = []
        numbers.filter(number => {
            if (!newArray.includes(number)) {
                newArray.push(number)
            }
        })
        return newArray;
    }


    //
}