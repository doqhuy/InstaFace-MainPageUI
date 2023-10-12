import React, {Component} from 'react';
import "./UploadSection.css";
import {Paper, Avatar} from '@mui/material';
import ImageIcon from "../../../../Images/image_icon.png";

class UploadSection extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        return (  
            <div className = "uploadsection_container">
                <Paper>
                    <div className = "uploadsection_main">
                        <div>
                            <img className = "uploadsection_img" src ="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/336263312_597320118970616_2082796264399726042_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=fe8171&_nc_ohc=oUMpPq1ajJsAX8dJTUI&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBmsPpjRoORfkz1oiiO3U8zdOlds4xfsAcvLBhNLbL-IA&oe=65254D25"/>
                        </div>
                        <div>
                            <input className = "uploadsection_box" type = "text" placeholder = "Ngày hôm nay bạn có gì mới, chia sẻ ngay!"/>
                        </div>
                        <div className = "uploadsection_button">
                            <div  className = "uploadsection_buttonimg">
                                <img src = {ImageIcon} />
                            </div>
                            <div className = "uploadsection_buttonname">Ảnh/video</div>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}
 
export default UploadSection;
;