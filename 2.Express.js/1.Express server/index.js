import express from "express";
const app=express();
const port=3000;

app.get("/",(req,res)=>{ 
res.send("<h1>Home Page<h1>");
}
);
app.post("/register",(req,res)=>{
 
    res.sendStatus(201);
});
app.put("/user",(req,res)=>{
 
    res.sendStatus(200);
});
app.patch("/user/knight007",(req,res)=>{
 
    res.sendStatus(200);
});
app.delete("/user/knight007",(req,res)=>{
 
    res.sendStatus(200);
});
app.get("/about",(req,res)=>{
   
    res.send("<h2>This is Knight_007! , learning Express.js<h2><p>contact : +91 xxxxx xxxxx</p>");
    });
app.listen(port,()=>{

    console.log(`Server is running on port ${port}.`);

})