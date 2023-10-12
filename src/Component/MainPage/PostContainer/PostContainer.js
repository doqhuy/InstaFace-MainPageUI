import React, {Component} from 'react';
import "./PostContainer.css";
import Post from './Post';
class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
    }
    getData=() =>{
        let json=[
            {
                "post_id":1,
                "user_id":1,
                "user_img":"https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/336263312_597320118970616_2082796264399726042_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=fe8171&_nc_ohc=oUMpPq1ajJsAX8dJTUI&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBmsPpjRoORfkz1oiiO3U8zdOlds4xfsAcvLBhNLbL-IA&oe=65254D25",
                "user_name":"Đỗ Huy",
                "description":"Hello InstaFace",
                "post_img":"https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/282518359_1361702360961301_6544760357815792319_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=52f669&_nc_ohc=eiipiwMVlcIAX_qGSHI&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfDnfR-1CC2dWrmwDNxRewJDqU8vs8T--zLqeHTNfYSoPA&oe=65242672",
                "like_count":"1.012.345",
                "usercomment_img":"https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/336263312_597320118970616_2082796264399726042_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=fe8171&_nc_ohc=oUMpPq1ajJsAX8dJTUI&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBmsPpjRoORfkz1oiiO3U8zdOlds4xfsAcvLBhNLbL-IA&oe=65254D25"
            },
            {
                "post_id":2,
                "user_id":2,
                "user_img":"",
                "user_name":"Đỗ Hùng",
                "description":"Nice day!",
                "post_img":"https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/385255893_1702830640181803_841501019946540054_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5614bc&_nc_ohc=drodP3wLco8AX-fS85I&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfClvzWtvZBM5MHt_16kCWLp2WUdrcTaP3MAZ4XaHveyWg&oe=652760FE",
                "like_count":"2.112.345",
                "usercomment_img":"https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/336263312_597320118970616_2082796264399726042_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=fe8171&_nc_ohc=oUMpPq1ajJsAX8dJTUI&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBmsPpjRoORfkz1oiiO3U8zdOlds4xfsAcvLBhNLbL-IA&oe=65254D25"

            },
            {
                "post_id":3,
                "user_id":3,
                "user_img":"",
                "user_name":"Đỗ Hiền",
                "description":"Javascript cân hết 😀",
                "post_img":"https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/386759302_701365875359473_6147686064322353772_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=49d041&_nc_ohc=AY0IL8FhAMoAX-VgXN3&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfARC3ArEI3PfHDxN2R5IUQlNV6eESUiIQVws-NcxeQmOg&oe=6527B04C",
                "like_count":"1.512.345",
                "usercomment_img":"https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/336263312_597320118970616_2082796264399726042_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=fe8171&_nc_ohc=oUMpPq1ajJsAX8dJTUI&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBmsPpjRoORfkz1oiiO3U8zdOlds4xfsAcvLBhNLbL-IA&oe=65254D25"

            },
            {
                "post_id":4,
                "user_id":2,
                "user_img":"",
                "user_name":"Đỗ Hùng",
                "description":"Nice day!",
                "post_img":"",
                "like_count":"2.112.345",
                "usercomment_img":"https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/336263312_597320118970616_2082796264399726042_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=fe8171&_nc_ohc=oUMpPq1ajJsAX8dJTUI&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBmsPpjRoORfkz1oiiO3U8zdOlds4xfsAcvLBhNLbL-IA&oe=65254D25"

            }
        ]
        this.setState({data:json});
    }
    componentDidMount(){
        this.getData();
    }
    render() { 
        return (  
            <div className = "postcontainer_main">
                {
                    this.state.data.map((item)=>(
                        <Post object={item}/>
                    ))
                }
            </div>
        );
    }
}
 
export default PostContainer;