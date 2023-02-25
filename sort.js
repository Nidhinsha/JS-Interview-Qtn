const arr=[4,3,5,3,6,3,7,4,78,5,2,5]

arr.sort((a,b)=>{
    return a - b
})

console.log(arr);

const str='str'

let result =' '
for (let i = str.length; i >=0; i--) {
    result +=str[i]
}
console.log(result);