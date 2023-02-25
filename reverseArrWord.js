const str ='hello whatsup homie'

const reverseStr = reverseStrBySep(str,"")
function reverseStrBySep(str,seperator) {
    return str.split(seperator).reverse().join(seperator)
}
console.log(reverseStr);