const arr=[1,2,8,2,9,8]
let result = []
for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i]===arr[j]) {  
            result.push(arr[j])
        }
    }  
}
console.log(result);

// with filter method

const output = arr.filter((element,index,arr)=>arr.indexOf(element)!= index)
console.log(output);