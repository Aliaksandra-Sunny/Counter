import React from 'react';
import style from "./Setting.module.css"

class SettingsBox extends React.Component {
    onInputChange = (e) => {
        this.props.onSettingChange(this.props.name==="Start value"? "minScore": "maxScore", e.target.value)
    };

    render = () => {
        return (
            <div className={style.setting}>
                <span>{this.props.name}:</span>
                <input className={style[this.props.error]} onChange={this.onInputChange} type="number" value={this.props.value}/>
            </div>
        );
    }
}

export default SettingsBox;

