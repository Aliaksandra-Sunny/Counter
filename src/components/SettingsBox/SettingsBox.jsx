import React from 'react';
import s from "./SettingsBox.module.css"
import Button from "../Button/Button";
import Settings from "./Settings/Settings";

class SettingsBox extends React.Component {
    render = () => {
        let buttonElements=this.props.buttons.slice(2,3).map((button, index)=>{
            return(
                <Button key={index} button={button} handleClick={this.props.handleClick}/>
            )
        });
        return (
            <div className={s.settingsBox}>
                <Settings onSettingChange={this.props.onSettingChange} settings={this.props.settingsBox}/>
                <div className={s.buttons}>
                    {buttonElements}
                </div>
            </div>
        );
    }
}

export default SettingsBox;

