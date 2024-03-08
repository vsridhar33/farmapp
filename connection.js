 const {createPool}=require('mysql2');
 const pool=createPool({
    host:'localhost',
    user:'root',
    password:'qwerty123',
    port:'3306',
    database:'farmapp'
 });

 module.exports=pool