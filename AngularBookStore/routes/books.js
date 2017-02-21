let express = require('express');
let fs = require('fs');
let router = express.Router();
function readBooks(callback) {
    fs.readFile('./books.json','utf8',function (err, data) {
        if (err||data==''){
            callback([]);
        }else {
            callback(JSON.parse(data))
        }
    })
}
function writeBooks(data, callback) {
    fs.writeFile('./books.json',JSON.stringify(data),callback);
}
router.get('/',(req,res)=>{
   readBooks((data)=>{
       res.send(data);
   })
});
router.get('/:id',(req,res)=>{
    let id = req.params.id;
    readBooks(data=>{
        let book = data.find(item=>{
            return item.id==id;
        });
        res.send(book)
    })

});
router.post('/',(req,res)=>{
    let book = req.body;
    readBooks(data=>{
        book['id']=data.length==0?1:parseInt(data[data.length-1]['id'])+1;
        data.push(book);
        writeBooks(data,()=>{
            res.send(book);
        })
    })
});
router.delete('/:id',(req,res)=>{
   readBooks(function (data) {
       data = data.filter(item=>{
           return item.id!=req.params.id;
       });
       writeBooks(data,()=>{
           res.send({})
       })
   })
});
router.put('/:id',(req,res)=>{
    let book = req.body;
    readBooks(data=>{
      data = data.map(item=>{
            if (item.id==req.params.id){
                return book;
            }
            return item;
        });
        writeBooks(data,()=>{
            res.send(book)
        })
    })
});
module.exports=router;
