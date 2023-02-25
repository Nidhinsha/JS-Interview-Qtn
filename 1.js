let input1 = "1234"
let input2="abcdefg"
let result =""
for (let i = 0,j=0; i < input1.length|| j< input2.length; i++,j++) {
    if (i < input1.length) {
        result +=input1[i]
    }
    if (j<input2.length) {
        result +=input2[j]
    }
    
}
console.log(result);