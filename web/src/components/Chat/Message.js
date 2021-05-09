import React from 'react'
const style = {
    myMessage:{
        textAlign:'right'
    },
    otherMessage:{
        textAlign:'left'
    }
}
export default function Message(props) {
    const { c, index, isMe } = props;
    if (isMe) {

        return (
            <div key={index}>
                <div class="alert alert-success" role="alert" style={style.myMessage}>{c[0]}:{c[1]}</div>
            </div>

        )
    }
    else {
        return (
            <div key={index}>
                <div class="alert alert-warning" role="alert" style={style.otherMessage} >{c[0]}:{c[1]}</div>
            </div>
        )
    }
}
