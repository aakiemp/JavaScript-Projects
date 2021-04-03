function alphabetPosition(text) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let alphaArr = alphabet.split('')
    let textArr = text.toLowerCase().split('')

    let newTextArr = textArr.filter(letter => {
        if ((/[a-zA-Z]/).test(letter)) {
            console.log("Yes: " + letter)
            return true
        } else {
            console.log("Cannot Use: " + letter)
            return false
        }
    }).map(letter => {
        let textChar = letter
        let alphaLetter = alphaArr.find(alphaLetter => alphaLetter == textChar)
        let alphaPos = alphaArr.indexOf(alphaLetter) + 1

        if (alphaLetter == textChar) {

            return alphaPos
        } else {
            console.log("Unexpected input: " + letter)


        }
    })
    text = newTextArr.join(' ')
    console.log(text)
    return text
}
alphabetPosition("The sunset sets at twelve o' clock.")