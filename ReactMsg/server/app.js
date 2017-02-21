let Message = require('./model').Message;
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:true}));
app.use(function (req,res,next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,OPTIONS');
    if(req.method=='OPTIONS'){
        res.end();
    }else {
        next();
    }

});
app.get('/messages',function (req, res) {
   Message.find({},function (err, doc) {
       res.send(doc)
   })

});
app.post('/messages',function (req, res) {
    let data = req.body;
    Message.create(data,function (err, doc) {
        Message.find({},function (err, messages) {
            res.send(messages);
        })
    })
});
app.delete('/messages',function (req, res) {
   let id = req.body.id;
   Message.remove({_id:id},function (err, doc) {
       Message.find({},function (err, doc) {
           res.send(doc);
       })
   })
});

app.listen(3000);
