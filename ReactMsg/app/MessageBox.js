import React from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
export default class MessageBox extends React.Component{
    constructor(props){
        super(props);
        //在es6里，要通过这种方法初始化状态对象
        this.state = {messages:[]};
        this.props.model.list((messages)=>{
            this.setState({messages})
        })
    }
    //增加一条新的留言
    addMessage(message){
        this.props.model.add(message,(messages)=>{
            this.setState({messages:this.state.messages})
        });
    }
    deleteMessage(id){
        this.props.model.del(id,(messages)=>{
            this.setState({messages})
        })
    }
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="text-center">欢迎光临留言板</h3>
                </div>
                <div className="panel-body">
                    <MessageList deleteMessage={this.deleteMessage.bind(this)} messages={this.state.messages}/>
                </div>
                <div className="panel-footer">
                    <MessageForm click={this.addMessage.bind(this)}/>
                </div>
            </div>
        )
    }
}


