const express = require("express");
const app = express();

app.get('/',function(req,res) {
    res.sendFile('/app/htmlfile.html');
  });


app.listen(8000,function(){
    console.log("Success")
});