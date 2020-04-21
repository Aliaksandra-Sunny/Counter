import React from 'react';
import './App.css';
import CounterBox from "./components/CounterBox/CounterBox";
import SettingsBox from "./components/SettingsBox/SettingsBox";
import {saveState} from "./saveState";
import {restoreState} from "./restoreState";

class App extends React.Component {

    state = {
        settingsBox: {
            minScore: 0,
            maxScore: 10,
        },
        counterBox: {
            score: 0,
            menu: false,
            error: false,
            message: "Enter values and press 'set'",
        },
        buttons: [
            {name: "inc", disable: false},
            {name: "reset", disable: true},
            {name: "set", disable: true},
        ],
    };

    componentDidMount() {
        this.restoreState();
    }

    restoreState = () => {
       let state = restoreState("our-state");
       if(state){
           this.setState(state);
       }
    };

    handleClick = (event) => {
        const btnName= event.currentTarget.dataset.name;
        switch(btnName){
            case 'inc': this.incrementScore(); break;
            case 'set': this.setScore(); break;
            case 'reset': this.resetScore(); break;
        }
    };

    allowedButton = (name) => {
        let newButtons = this.state.buttons.map(b => {
            if (b.name === name)
                return {...b, disable: false};
            else
                return {...b};
        });
        this.setState({
                buttons: newButtons,
            }, () => {
                saveState("our-state", this.state)
            }
        )
    };

    disabledButton = (name) => {
        let newButtons = this.state.buttons.map(b => {
            if (b.name === name)
                return {...b, disable: true};
            else
                return {...b};
        });
        this.setState({
                buttons: newButtons,
            }, () => {
                saveState("our-state", this.state)
            }
        )
    };

    onSettingChange = (name, newScore) => {
        setTimeout(() => {
            this.disabledButton("inc");
            this.disabledButton("reset");
        }, 0);
        this.allowedButton("set");
        let newSettingsBox = {...this.state.settingsBox, [name]: newScore};
        let newCounterBox = {...this.state.counterBox, menu: true};
        this.setState({
                settingsBox: newSettingsBox,
                counterBox: newCounterBox,
            }, () => {
                saveState("our-state", this.state);
                debugger
                if (newScore < 0 || this.state.settingsBox.minScore >= this.state.settingsBox.maxScore) {
                    this.setState({
                        counterBox: {...this.state.counterBox, error: true, message: "Incorrect value!"},
                    }, () => saveState("our-state", this.state));
                    this.disabledButton("set")
                } else {
                    this.setState({
                        counterBox: {...this.state.counterBox, error: false, message: "Enter values and press 'set'"},
                    }, () => saveState("our-state", this.state));
                }
            }
        );
    };

    incrementScore = () => {
        if (this.state.counterBox.score < this.state.settingsBox.maxScore) {
            if (this.state.counterBox.score + 1 === this.state.settingsBox.minScore + 1) {
                this.allowedButton("reset")
            }
            let newCounterBox = {...this.state.counterBox, score: +this.state.counterBox.score + 1};
            this.setState({
                    counterBox: newCounterBox,
                }, () => {
                    saveState("our-state", this.state);
                    if (this.state.counterBox.score === this.state.settingsBox.maxScore)
                        this.disabledButton("inc");
                }
            );
        }
    };

    resetScore = () => {
        this.disabledButton("reset");
        let newCounterBox = {...this.state.counterBox, score: this.state.settingsBox.minScore};
        this.setState({
                counterBox: newCounterBox,
            }, () => {
                saveState("our-state", this.state);
                this.allowedButton("inc");
            }
        );

    };

    setScore = () => {
        let newCounterBox = {...this.state.counterBox, menu: false, score: this.state.settingsBox.minScore};
        this.setState({
                counterBox: newCounterBox,
            }, () => {
                saveState("our-state", this.state);
                this.disabledButton("set")
            }
        );
        this.allowedButton("inc");
    };

    render = () => {
        return (
            <div className="counter">
                <SettingsBox onSettingChange={this.onSettingChange} buttons={this.state.buttons}
                             settingsBox={this.state.settingsBox} handleClick={this.handleClick}/>
                <CounterBox counterBox={this.state.counterBox} buttons={this.state.buttons} handleClick={this.handleClick}/>
            </div>
        );
    }
}

export default App;
