import React, {Component} from 'react';
import "./PostContainer.css";
import { Paper, Avatar } from '@mui/material';
import AccountIcon from '../../../Images/account_icon.png';
import LikePost from '../../../Images/like_icon.png';
import CommentPost from '../../../Images/comment_icon.png';
import SharePost from '../../../Images/share_icon.png';
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    isImageAvailable=(data)=>{
        return data == "" ? false:true;
    }
    render() { 
        return (  
            <div>
                <Paper className = "post_container">
                    <div className = "post_main">
                    <div className = "post_header">
                        <div className = "post_header_avatar">
                            <Avatar className = "post_avatar" src = {this.props.object.user_img}/>
                        </div>
                        <div className = "post_header_name">
                            {this.props.object.user_name}
                        </div>
                    </div>
                    <div className = "post_decriptsion">
                        {this.props.object.description}
                    </div>
                    <div className = "post_image">
                        {
                            this.isImageAvailable(this.props.object.post_img) ? <img src = {this.props.object.post_img}/> : <span></span>
                        }
                    </div>
                    <div className = "post_button">
                        <div className = "post_icon">
                            <img src={LikePost}/>
                        </div>
                        <div className = "post_icon">
                            <img src={CommentPost}/>
                        </div>
                        <div className = "post_icon">
                            <img src={SharePost}/>
                        </div>
                    </div>
                    <div>
                        <div className = "post_likecount">
                            {this.props.object.like_count} lượt thích
                        </div>
                    </div>
                    <div className = "post_comment">
                        <div>
                            {
                                this.isImageAvailable(this.props.object.usercomment_img) ? <img className = "post_commentimg" src = {this.props.object.usercomment_img}/> : <img className = "post_commentimg" src = {AccountIcon}/>
                            }
                            
                        </div>
                        <div>
                            <input className = "post_commentbox" type = "text" placeholder = "Viết bình luận"/>
                        </div>
                    </div>
                    <div className = "post_commentmore">
                        Xem thêm bình luận
                    </div>
                    </div>
                </Paper>
            </div>
        );
    }
}
 
export default Post;