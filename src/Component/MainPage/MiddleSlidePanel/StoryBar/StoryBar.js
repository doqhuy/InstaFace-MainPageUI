import React, {Component} from 'react';
import Story from '../StoryBar/Story';
import "./StoryBar.css";

class StoryBar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        return (  
            <div className = "storybar_container">
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
            </div>
        );
    }
}
 
export default StoryBar;