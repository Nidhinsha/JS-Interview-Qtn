const arr=[19,38,8759,647,87,7489,74,937,19]

function findMax(arr) {
    return arr.reduce((prev,curr)=>{
        return prev > curr ? prev : curr
    })
}
const result = findMax(arr)
console.log(result);