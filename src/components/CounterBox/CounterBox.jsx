import React from 'react';
import s from "./CounterBox.module.css"
import Counter from "./Counter/Counter";
import Button from "../Button/Button";

class CounterBox extends React.Component {
    render = () => {
        let buttonElements=this.props.buttons.slice(0,2).map((button)=>{
            return(
                <Button button={button}/>
            )
        });
        return (
            <div className={s.counterBox}>
                <Counter score={this.props.score}/>
                <div className={s.buttons}>
                    {buttonElements}
                </div>
            </div>
        );
    }
}

export default CounterBox;

