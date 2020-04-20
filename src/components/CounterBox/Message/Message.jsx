import React from 'react';
import style from "./Message.module.css"

class Message extends React.Component {
    render = () => {
        return (
            <div className={style.message}>
                <span className={this.props.error? style.error: ""}>{this.props.message}</span>
            </div>
        );
    }
}

export default Message;

