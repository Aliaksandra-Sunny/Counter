import React from 'react';
import './App.css';
import CounterBox from "./components/CounterBox/CounterBox";
import SettingsBox from "./components/SettingsBox/SettingsBox";

class App extends React.Component {


    allowedButton = (name) => {
        let newButtons = this.state.buttons.map(b => {
            if (b.name === name)
                return {...b, disable: false};
            else
                return {...b};
        });
        this.setState({
                buttons: newButtons,
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
            }
        )
    };

    onSettingChange = (name, newScore) => {

        this.allowedButton("set");
        this.setState({
                [name]: Number(newScore),
            }, () => {
                if (newScore < 0 || this.state.minScore >= this.state.maxScore)
                    this.disabledButton("set")
            }
        );
    };

    incrementScore = () => {
        if (this.state.score < this.state.maxScore) {
            let newScore = this.state.score + 1;
            this.setState({
                    score: newScore,
                }, () => {
                    if (this.state.score === this.state.maxScore)
                        this.disabledButton("inc");
                }
            );
            if (newScore === this.state.minScore + 1) {
                this.allowedButton("reset")
            }
        }
    };

    resetScore = () => {
        this.disabledButton("reset");
        this.setState({
                score: this.state.minScore,
            }, () => this.allowedButton("inc")
        );

    };

    setScore = () => {
        this.setState({
            score: this.state.minScore,
        }, ()=>{
            this.allowedButton("inc");
            }
        );
        this.disabledButton("reset");
        this.disabledButton("set");
    };

    state = {
        score: 0,
        minScore: 0,
        maxScore: 10,
        buttons: [
            {name: "inc", disable: false, function: this.incrementScore},
            {name: "reset", disable: true, function: this.resetScore},
            {name: "set", disable: true, function: this.setScore},
        ],
    };

    render = () => {
        return (
            <div className="counter">
                <SettingsBox onSettingChange={this.onSettingChange} buttons={this.state.buttons}
                             minScore={this.state.minScore} maxScore={this.state.maxScore}/>
                <CounterBox buttons={this.state.buttons} score={this.state.score}/>
            </div>
        );
    }
}

export default App;
