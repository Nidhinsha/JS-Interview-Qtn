const arr=[1,2,8,2,9,8]

const maxFunction=(arr)=>{
    return arr.reduce((pre,curr)=>{
        return pre > curr ? pre : curr 
    })
}
console.log(maxFunction(arr));