import React from 'react';
export default class MessageForm extends React.Component{
    addMessage(e){
        e.preventDefault();//要阻止表单的默认提交
        //es5和es6不一样，方法里的this指针不一样，es5中事件处理函数中的指针指向当前组件的实例，在es6中指针指向null
        let message = {
            name:this.refs.name.value,
            content:this.refs.content.value
        };
        this.props.click(message);
        this.refs.content.value=''
    }
    render(){
        return (
            <form onSubmit={this.addMessage.bind(this)} action="" role="form" className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="name" className="control-label col-md-1">名字</label>
                    <div className="col-md-11">
                        <input ref="name" type="text" id="name" className="form-control" required/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-md-1" htmlFor="contenr">内容</label>
                    <div className="col-md-11">
                        <textarea ref="content" name="content" id="content" cols="30" rows="10" className="form-control" required></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-offset-1 col-md-12">
                        <button className="btn btn-primary" type="submit">留言</button>
                    </div>
                </div>
            </form>
        )
    }
}
