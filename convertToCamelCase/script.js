let st = "This-Is-a-string-okay"
let st2 = "This_Is_a_string_okay"


function camel(str) {
    if (str.charAt(0) == str.charAt(0).toUpperCase()) {
        return str.split(/[-_]/).map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }).join('')
    } else {
        return str.split(/[-_]/)[0] + str.split(/[-_]/).slice(1).map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }).join('')
    }
}


console.log(camel('This-aintFor-theWeak'))
