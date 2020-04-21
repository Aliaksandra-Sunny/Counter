import React from 'react';
import s from "./Button.module.css"

class Button extends React.Component {

    render = (props) => {
        return (
            <div className={s.button}>
                <button disabled={this.props.button.disable} data-name={this.props.button.name} onClick={this.props.handleClick}>{this.props.button.name}</button>
            </div>
        );
    }
}

export default Button;

