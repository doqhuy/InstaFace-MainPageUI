import React, {Component} from 'react';
import "./RightSlide.css";
import ContactLayout from '../ContactLayout';
import AccountIcon from "../../../Images/account_icon.png";

class RightSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }
    getData = () => {
        let jsondata = [
        {
            "image":"https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/336263312_597320118970616_2082796264399726042_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=fe8171&_nc_ohc=oUMpPq1ajJsAX8dJTUI&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBmsPpjRoORfkz1oiiO3U8zdOlds4xfsAcvLBhNLbL-IA&oe=65254D25",
            "text":"Đỗ Huy"
        },
        {
            "image":"https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/336263312_597320118970616_2082796264399726042_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=fe8171&_nc_ohc=oUMpPq1ajJsAX8dJTUI&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBmsPpjRoORfkz1oiiO3U8zdOlds4xfsAcvLBhNLbL-IA&oe=65254D25",
            "text":"Đỗ Huy"
        },
        {
            "image":"https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/336263312_597320118970616_2082796264399726042_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=fe8171&_nc_ohc=oUMpPq1ajJsAX8dJTUI&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBmsPpjRoORfkz1oiiO3U8zdOlds4xfsAcvLBhNLbL-IA&oe=65254D25",
            "text":"Đỗ Huy"
        },
        {
            "image":"https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/336263312_597320118970616_2082796264399726042_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=fe8171&_nc_ohc=oUMpPq1ajJsAX8dJTUI&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBmsPpjRoORfkz1oiiO3U8zdOlds4xfsAcvLBhNLbL-IA&oe=65254D25",
            "text":"Đỗ Huy"
        },
        {
            "image":"https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/336263312_597320118970616_2082796264399726042_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=fe8171&_nc_ohc=oUMpPq1ajJsAX8dJTUI&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBmsPpjRoORfkz1oiiO3U8zdOlds4xfsAcvLBhNLbL-IA&oe=65254D25",
            "text":"Đỗ Huy"
        },
        {
            "image":"https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/336263312_597320118970616_2082796264399726042_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=fe8171&_nc_ohc=oUMpPq1ajJsAX8dJTUI&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBmsPpjRoORfkz1oiiO3U8zdOlds4xfsAcvLBhNLbL-IA&oe=65254D25",
            "text":"Đỗ Huy"
        },
        {
            "image":"https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/336263312_597320118970616_2082796264399726042_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=fe8171&_nc_ohc=oUMpPq1ajJsAX8dJTUI&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBmsPpjRoORfkz1oiiO3U8zdOlds4xfsAcvLBhNLbL-IA&oe=65254D25",
            "text":"Đỗ Huy"
        },
        {
            "image":"https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/336263312_597320118970616_2082796264399726042_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=fe8171&_nc_ohc=oUMpPq1ajJsAX8dJTUI&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBmsPpjRoORfkz1oiiO3U8zdOlds4xfsAcvLBhNLbL-IA&oe=65254D25",
            "text":"Đỗ Huy"
        },
        {
            "image":"https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/336263312_597320118970616_2082796264399726042_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=fe8171&_nc_ohc=oUMpPq1ajJsAX8dJTUI&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBmsPpjRoORfkz1oiiO3U8zdOlds4xfsAcvLBhNLbL-IA&oe=65254D25",
            "text":"Đỗ Huy"
        },
        {
            "image":"https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/336263312_597320118970616_2082796264399726042_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=fe8171&_nc_ohc=oUMpPq1ajJsAX8dJTUI&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBmsPpjRoORfkz1oiiO3U8zdOlds4xfsAcvLBhNLbL-IA&oe=65254D25",
            "text":"Đỗ Huy"
        },
        {
            "image":"https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/336263312_597320118970616_2082796264399726042_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=fe8171&_nc_ohc=oUMpPq1ajJsAX8dJTUI&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBmsPpjRoORfkz1oiiO3U8zdOlds4xfsAcvLBhNLbL-IA&oe=65254D25",
            "text":"Đỗ Huy"
        },
        {
            "image":"https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/336263312_597320118970616_2082796264399726042_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=fe8171&_nc_ohc=oUMpPq1ajJsAX8dJTUI&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBmsPpjRoORfkz1oiiO3U8zdOlds4xfsAcvLBhNLbL-IA&oe=65254D25",
            "text":"Đỗ Huy"
        },
        {
            "image":"https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/336263312_597320118970616_2082796264399726042_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=fe8171&_nc_ohc=oUMpPq1ajJsAX8dJTUI&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBmsPpjRoORfkz1oiiO3U8zdOlds4xfsAcvLBhNLbL-IA&oe=65254D25",
            "text":"Đỗ Huy"
        }
    ];
    this.setState({data : jsondata});
    }
    componentDidMount(){
        this.getData();
    }
    render() { 
        return (  
            <div className = "right_container">
                <div className = "right_firts">
                    <div className = "right_header">
                        Người liên hệ
                    </div>
                    <div className = "right_content">
                    {
                        this.state.data.map( (item) => (
                            <ContactLayout image = {item.image} text = {item.text}/>
                        ))
                    }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default RightSlide;