const fs =require('node:fs') ; // CJS (common js) methoed .

// fs.writeFile('msg.txt',"Hello from node native module!",(err)=>{
//     if (err) throw err;
//   console.log('The file has been saved!');
// });


fs.readFile("msg.txt",'utf8',(err,data)=>{
    if (err) throw err;
    console.log(data);
})
