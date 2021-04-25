var longestCommonPrefix = function (strs) {
    if (strs.length == 0) { return '' }
    let firstWord = strs[0]

    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < firstWord.length; j++)
            //find loop word and letter
            if (strs[i][j] != firstWord[j]) {
                firstWord = firstWord.slice(0, j)
                console.log(firstWord)
            }
    }
    return firstWord

};