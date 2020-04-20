import React from 'react';
import s from "./Counter.module.css"

class Counter extends React.Component {
    render = () => {
        return (
            <div className={s.counter}>
                <span>{this.props.score}</span>
            </div>
        );
    }
}

export default Counter;

