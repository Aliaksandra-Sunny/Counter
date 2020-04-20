import React from 'react';
import s from "./Button.module.css"

class Button extends React.Component {

    render = (props) => {
        return (
            <div className={s.button}>
                <button disabled={this.props.button.disable} onClick={this.props.button.function}>{this.props.button.name}</button>
            </div>
        );
    }
}

export default Button;

