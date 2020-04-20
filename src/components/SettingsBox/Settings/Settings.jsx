import React from 'react';
import style from "./Settings.module.css"
import Setting from "./Setting/Setting";

class SettingsBox extends React.Component {
    render = () => {
        return (
            <div className={style.settings}>
                <Setting error={this.props.minScore >= this.props.maxScore || this.props.minScore < 0 ? "error" : ""}
                         onSettingChange={this.props.onSettingChange} name={"Start value"} value={this.props.minScore}/>
                <Setting error={this.props.minScore >= this.props.maxScore || this.props.maxScore < 0 ? "error" : ""}
                         onSettingChange={this.props.onSettingChange} name={"Max value"} value={this.props.maxScore}/>
            </div>
        );
    }
}

export default SettingsBox;

