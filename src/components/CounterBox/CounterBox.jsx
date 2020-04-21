import React from 'react';
import s from "./CounterBox.module.css"
import Counter from "./Counter/Counter";
import Button from "../Button/Button";
import Message from "./Message/Message";

class CounterBox extends React.Component {
    render = () => {
        let buttonElements = this.props.buttons.slice(0, 2).map((button,index) => {
            return (
                <Button key={index} button={button} handleClick={this.props.handleClick}/>
            )
        });
        return (
            <div className={s.counterBox}>
                {this.props.counterBox.menu ?
                    <Message error={this.props.counterBox.error} message={this.props.counterBox.message}/> :
                    <Counter score={this.props.counterBox.score}/>
                }
                <div className={s.buttons}>
                    {buttonElements}
                </div>
            </div>
        );
    }
}

export default CounterBox;

