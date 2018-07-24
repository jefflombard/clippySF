import React, { Component } from 'react';
import clippy from 'clippyjs';

import './App.css';

class App extends Component {
    
    constructor(props){
        super(props);
        clippy.load('Clippy', agent => {
            agent.show();
            this.state = {
                agent
            }
        });
    }

    animate(msg){
        this.state.agent.animate();
    }
    
    render(){
        return (
            <a href="javascript:void(0)" onClick={this.animate.bind(this)}>
                <div className="clippy-container">
                </div>
            </a>

        );
    }
}

export default App;
