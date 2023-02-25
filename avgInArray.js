const arr=[10,20,30,40,50]

const totalCount = arr.reduce((prev,curr)=>{
    return prev + curr
})

const arrLength = arr.length
console.log(totalCount/arrLength);