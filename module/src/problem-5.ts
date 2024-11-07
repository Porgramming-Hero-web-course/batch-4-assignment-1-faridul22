const getProperty = <T, K extends keyof T>(inputObject: T, inputKey: K): T[K] => {
    return inputObject[inputKey]
}

// Sample Input:
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));