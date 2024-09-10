//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import {dirname} from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

const __dirname= dirname(fileURLToPath(import.meta.url));
const app= express();
const port=3000;

var isAuthorized=false;
app.use(bodyParser.urlencoded({extended:true}));

function matched(req,res,next){
    const pass="ILoveProgramming";
    if(req.body["password"]===pass){
        isAuthorized=true;
       
    }
    next();
}
app.use(matched);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");

});
app.post("/check",(req,res)=>{
    if(isAuthorized){
        res.sendFile(__dirname+"/public/secret.html");
    }
    else{
        res.sendFile(__dirname+"/public/index.html");
 
    }
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  
//app.use(matched);