{
    //

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

        return totalWords.length;

    }


    //
}