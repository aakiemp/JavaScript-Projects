//counting the duplicate characters in a string

let str1 = "abcde" //0
let str2 = "ababbcdeb" //2 a,b
let str3 = "indivisibility" //1 ix6
let str4 = "ndivisibilities" //2 i,s
let str5 = "aA11" //2 a,1
let str6 = "aabBcde" //2 A,B


function duplicateCount(text) {

    return (text.toLowerCase().split('').sort().join('').match(/(.)(\1+)/gi) || []).length


}
console.log(duplicateCount(str1))

