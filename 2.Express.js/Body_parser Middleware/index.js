import express from "express";
import bodyParser from "body-parser"
import {fileURLToPath} from "url";
import {dirname} from "path";

const __dirName=dirname(fileURLToPath(import.meta.url));

/*
Explanation
fileURLToPath:
Converts a file URL (like import.meta.url) into a file system path.
import.meta.url provides the URL of the current module.

dirname:
Extracts the directory name from the given file path.

eg : If your module is located at /project/src/index.js, the value of __dirName will be /project/src.
*/

const app=express();
const port=3000;

let bandname="";

function bNameGenerator(req, res, next)
{
    
    bandname=req.body["street"]+req.body["pet"];
    next();
}
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bNameGenerator);
 

app.get('/', (req, res) => {
    res.sendFile(__dirName +"/public/home.html");
  })

  app.post('/submit',(req,res)=>{
     console.log(req.body);
      res.send( `your band name is : ${bandname}`);
  });

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
})
