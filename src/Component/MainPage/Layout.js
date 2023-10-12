import React, {Component} from 'react';
import "./MainPage.css";
import Grid from '@mui/material/Grid';
import LeftSlide from '../MainPage/LeftSlidePanel/LeftSlide';
import MiddleSlide from '../MainPage/MiddleSlidePanel/MiddleSlide';
import RightSlide from '../MainPage/RightSlidePanel/RightSlide';

class Layout extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <div className = "layout_container">
                <Grid container>
                    <Grid item xs ={2} className = "left_slide_panel">
                        <LeftSlide/>
                    </Grid>
                    <Grid item xs ={8} className = "middle_slide_panel">
                        <MiddleSlide/>
                    </Grid>
                    <Grid item xs ={2} className = "right_slide_panel">
                        <RightSlide/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
 
export default Layout;