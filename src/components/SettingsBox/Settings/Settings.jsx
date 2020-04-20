import React from 'react';
import style from "./Settings.module.css"
import Setting from "./Setting/Setting";

class SettingsBox extends React.Component {
    render = () => {
        return (
            <div className={style.settings}>
                <Setting error={this.props.settings.minScore >= this.props.settings.maxScore || this.props.settings.minScore < 0 ? "error" : ""}
                         onSettingChange={this.props.onSettingChange} name={"Start value"} value={this.props.settings.minScore}/>
                <Setting error={this.props.settings.minScore >= this.props.settings.maxScore || this.props.settings.maxScore < 0 ? "error" : ""}
                         onSettingChange={this.props.onSettingChange} name={"Max value"} value={this.props.settings.maxScore}/>
            </div>
        );
    }
}

export default SettingsBox;

