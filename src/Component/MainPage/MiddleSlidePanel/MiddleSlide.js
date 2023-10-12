import React, {Component} from 'react';
import StoryBar from '../MiddleSlidePanel/StoryBar/StoryBar';
import UploadSection from '../MiddleSlidePanel/UploadSection/UploadSection';
import PostContainer from '../PostContainer/PostContainer';
import "../../MainPage/MainPage.css";
class MiddletSlide extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <div className = "middle_container">
                <StoryBar/>
                <UploadSection/>
                <PostContainer/>
            </div>
        );
    }
}
 
export default MiddletSlide;