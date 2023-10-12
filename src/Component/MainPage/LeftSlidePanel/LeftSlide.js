import React, {Component} from 'react';
import "./LeftSlide.css";
import ImageLayout from '../ImageLayout';
import AccountIcon from "../../../Images/account_icon.png";
import HomeIcon from "../../../Images/home_icon.png";
import MessageIcon from "../../../Images/message_icon.png";
import FriendIcon from "../../../Images/friend_icon.png";
import GameIcon from "../../../Images/game_icon.png";

class LeftSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }
    getData = () => {
        let jsondata = [
        {
            "image":AccountIcon,
            "text":"Đỗ Huy"
        },
        {
            "image":HomeIcon,
            "text":"Trang chủ"
        },
        {
            "image":MessageIcon,
            "text":"Tin nhắn"
        },
        {
            "image":FriendIcon,
            "text":"Bạn bè"
        },
        {
            "image":GameIcon,
            "text":"Trò chơi"
        }
    ];
    this.setState({data : jsondata});
    }
    componentDidMount(){
        this.getData();
    }
    render() { 
        return (  
            <div className = "left_container">
                {
                    this.state.data.map( (item) => (
                        <ImageLayout image = {item.image} text = {item.text}/>
                    ))
                }
                <div className = "left_container_last">
                    <div className = "left_container_last_text">Giới thiệu</div>
                    <div className = "left_container_last_text">Hỗ trợ và báo cáo</div>
                    <div className = "left_container_last_text">Góp ý kiến</div>
                </div>
            </div>
        );
    }
    
}
 
export default LeftSlide;