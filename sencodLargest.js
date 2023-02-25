const arr=[1,2,8,2,9,8]

const largest=(arr)=>{
    firstLargest = Math.max(...arr)
   index = arr.indexOf(firstLargest)
   arr.splice(index,1)
   firstLargest = Math.max(...arr)
   return(firstLargest)
}
console.log(largest(arr));