const express=require('express');
const app=express();
const router=require('./route');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/',router);


app.listen (3000,()=>{
    console.log("hi farm app");
})