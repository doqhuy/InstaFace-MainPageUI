import React, {Component} from 'react';
import "./NavBar.css";
import Grid from '@mui/material/Grid';
import InstafaceLogo from "../../Images/logo.png";
import NotificationIcon from "../../Images/notification_icon.png";
import MessageIcon from "../../Images/message_icon.png";
import AccountIcon from "../../Images/account_icon.png";
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
    }
    getData=() =>{
        let json=[
            {
                "user_id":12345678,
                "user_img":"https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/336263312_597320118970616_2082796264399726042_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=fe8171&_nc_ohc=oUMpPq1ajJsAX8dJTUI&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBmsPpjRoORfkz1oiiO3U8zdOlds4xfsAcvLBhNLbL-IA&oe=65254D25",
                "user_name":"Đỗ Huy",
            }
        ]
        this.setState({data:json});
    }
    isImageAvailable=(data)=>{
        return data == "" ? false:true;
    }
    componentDidMount(){
        this.getData();
    }
    
    render() { 
        return ( 
            <div className="navbar_container">
                <Grid container className="navbar_main">
                    <Grid item xs ={3}>
                        <div className = "navbar_leftbar">
                            <img className = "navbar_leftbar_logo" src = {InstafaceLogo}/>
                            <div className = "navbar_leftbar_text">InstaFace</div>
                            {/* <div className = "navbar_leftbar_text_none">IF</div> */}
                        </div>
                    </Grid>
                    <Grid item xs ={6}>
                        <div className = "navbar_middlebar">
                            <input className = "navbar_middlebar_search" type = "text" placeholder = "Tìm kiếm trên InstaFace"></input>
                        </div>
                    </Grid>

                    <Grid item xs ={3}>
                        { 
                        this.state.data.map( (item) => (
                        <div className = "navbar_rightbar">
                            <div className = "navbar_rightbar_notifi">
                                <Stack spacing={3} direction="row" sx={{ color: 'action.active' }}>
                                    <Badge badgeContent={100} color="error" invisible={false} size="small" anchorOrigin={{ vertical: 'bottom',horizontal: 'right',}}>
                                        <IconButton aria-label="notification" className = "navbar_notifi">
                                            <img src = {NotificationIcon}/>
                                        </IconButton>
                                    </Badge>
                                </Stack>
                            </div>
                            <div className = "navbar_rightbar_mess">
                                <Stack spacing={2} direction="row" sx={{ color: 'action.active' }}>
                                    <Badge badgeContent={0} color="error" invisible={false} size="small" anchorOrigin={{ vertical: 'bottom',horizontal: 'right',}}>
                                        <IconButton aria-label="message" className = "navbar_mess">
                                            <img src = {MessageIcon}/>
                                        </IconButton>
                                    </Badge>
                                </Stack>
                            </div>
                            <div className = "navbar_rightbar_profile">
                                <IconButton aria-label="message" className = "navbar_profile">
                                    {
                                    this.isImageAvailable(item.user_img) ? <div><img className = "navbar_profileimg" src = {item.user_img}/></div> : <img className = "navbar_profileimg" src = {AccountIcon}/>
                                    }
                                    {/* <div><img className = "navbar_profileimg" src = {item.user_img}/></div> */}
                                    <div className = "navbar_profilename"><p>{item.user_name}</p></div>
                                </IconButton>
                            </div>
                        </div>
                        ))
                        }
                    </Grid>
                    
                </Grid>
            </div>
         );
    }
}
 
export default NavBar;