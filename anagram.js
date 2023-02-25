let str1 = 'how'
let str2 = 'who'

function checkAnagram(str1,str2){
    // first we will change all str into small letters
    let a = str1.toLowerCase()
    let b = str2.toLowerCase()
    // we will split the str into single elements
    // sort it 
    a = a.split("").sort().join("")
    b = b.split("").sort().join("")
    return a === b
}

console.log(checkAnagram(str1,str2));