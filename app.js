const express = require('express');
const app = express();
app.use(express.static(__dirname + '/static'));
app.use('/', (req,res)=>{
    res.sendFile(__dirname+"/index.html");

});
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log("Started!")
})