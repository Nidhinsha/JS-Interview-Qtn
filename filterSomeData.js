const input ={
    "students":[
        {
            name:"thappu",
            id:1
        },
        {
            name:"nidhinsha",
            id:2
        },
        {
            name:"sdfs",
            id:3
        }
    ]
}
const output = input.students.filter((item)=>{
  return item.id > 1 
    
  
})
console.log(output);