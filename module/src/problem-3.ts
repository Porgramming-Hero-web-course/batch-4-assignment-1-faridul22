const countWordOccurrences = (sentence: string, word: string): number => {

    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();


    const makeArrayBySentenceWords = lowerCaseSentence.split(' ');
    const totalWords: string[] = []

    makeArrayBySentenceWords.filter(sentenceWord => {
        if (lowerCaseWord === sentenceWord) {
            totalWords.push(sentenceWord)
        }
    })

    // console.log(makeArrayBySentenceWords)
    // console.log(totalWords)
    // console.log(totalWords.length)

    return totalWords.length;

}
const sentence = "I love typescript because Typescript"
const word = "typescript"

const result = countWordOccurrences(sentence, word);
console.log(result)