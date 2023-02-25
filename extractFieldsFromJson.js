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

const output = input.students.map((element)=>{
    return element.name
})
console.log(output);