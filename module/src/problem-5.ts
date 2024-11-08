{
    //

    const getProperty = <T, K extends keyof T>(inputObject: T, inputKey: K): T[K] => {
        return inputObject[inputKey]
    }

    //
}