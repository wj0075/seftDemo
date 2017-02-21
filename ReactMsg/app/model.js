//导出一个提供数据持久化的模型层
import $ from 'jquery/dist/jquery';
module.exports = {
    //查询所有的留言
    list(callback){
       $.get('http://localhost:3000/messages').then(function (data) {
           callback(data)
       })
    },
    //增加一条新的留言
    add(message,callback){
        $.post('http://localhost:3000/messages',message).then(function (messages) {
            callback(messages);
        })
    },
    //删除一条留言
    del(id,callback){
        $.ajax({
            url:'http://localhost:3000/messages',
            method:'delete',
            data:{id}
        }).then(function (messages) {
            callback(messages)
        })
    }
};
