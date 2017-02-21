import React from 'react';
export default class MessageList extends React.Component{
    render(){
        return (
            <ul className="list-group">
                {
                    this.props.messages.map((item, index)=> {
                       return <li key={index} className="list-group-item">
                            {item.name}:{item.content} <button onClick={()=>this.props.deleteMessage(item._id)} className="btn btn-danger pull-right btn-xs">删除</button><span className="pull-right" style={{marginRight:'10px'}}>{new Date(item.createAt).toLocaleString()}</span>
                        </li>
                    })
                }
            </ul>
        )
    }
}
