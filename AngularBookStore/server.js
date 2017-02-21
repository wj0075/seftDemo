let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let app = express();
let book = require('./routes/books');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'/')));
app.use('/books',book);
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'))
});
app.listen(9090);