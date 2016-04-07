var express = require('express');
var app = express();
var port = process.env.PORT || 8081;
app.use(function(req,res){
    var obj = {
        ipaddress: null,
        language: null,
        software: null,
    }
    var reg = /\(([^)]+)\)/i
    var ipaddress = req.get('x-forwarded-for');
    var language = req.get('accept-language').split(',');
    var software = req.get('user-agent').match(reg);
    obj.ipaddress = ipaddress;
    obj.language = language[0];
    obj.software = software[1];
    res.send(obj);
    
})

app.listen(port);