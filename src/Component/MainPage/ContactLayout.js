import React, {Component} from 'react';
import "./MainPage.css";
import { Avatar } from '@mui/material';

class ContactLayout extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <div className = "contactlayout_container">
                <div className = "contactlayout_child">
                    <div className = "contactlayout_child_icon">
                        <Avatar  src = {this.props.image}/>
                    </div>
                    <div className = "contactlayout_child_text">
                        {this.props.text}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ContactLayout;