import React, {Component} from 'react';
import "./MainPage.css";
import { Avatar } from '@mui/material';

class ImageLayout extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <div className = "imagelayout_container">
                <div className = "imagelayout_child">
                    <div className = "imagelayout_child_icon">
                        <Avatar  src = {this.props.image}/>
                    </div>
                    <div className = "imagelayout_child_text">
                        {this.props.text}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ImageLayout;