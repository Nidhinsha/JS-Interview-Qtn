const arr=[19,38,8759,647,87,7489,74,937,19]

const unique =arr.filter((element,index,arr)=>{
   return arr.indexOf(element) == index
})

console.log(unique);