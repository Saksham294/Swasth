import React,{useState,useEffect} from 'react'
import './User.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Avatar, Button, Dialog, Typography } from '@mui/material';
import PostBox from '../PostBox/PostBox';
import {FaInstagram} from '@react-icons/all-files/fa/FaInstagram'
import {FaFacebook} from '@react-icons/all-files/fa/FaFacebook'
import {FaTwitter} from '@react-icons/all-files/fa/FaTwitter'
import {useSelector,useDispatch} from 'react-redux'
import { logoutUser } from '../../Actions/userActions';
import { getMyPosts } from '../../Actions/userActions';
import { ContentPasteOffSharp } from '@mui/icons-material';
import UserIcon from '../UserIcon/UserIcon';



const User = () => {
    const {user,loading:userLoading}=useSelector((state)=>state.user)

const dispatch=useDispatch()

const [followersToggle, setFollowersToggle] = useState(false)
const [following, setFollowingToggle] = useState(false)
let userImage="";
if(user.avatar!=undefined){
     userImage=user.avatar.url;
}

const {loading,error,posts}=useSelector((state)=>state.myPosts)
console.log(posts)




console.log(user.following)
const followersHandler=()=>{
    setFollowersToggle(!followersToggle)
}

const followingHandler=()=>{
    setFollowingToggle(!following)
}

    const logoutHandler=()=>{
dispatch(logoutUser())
console.log("Logged out")
    }

    useEffect(()=>{
        dispatch(getMyPosts())
        },[dispatch])


    return (
        <div className='containerBox'>
<div className="card">
    {userImage!=undefined? <Avatar    sx={{ width: 250, height: 250, marginLeft:"6rem",marginTop:"2rem" }} src={userImage}/>:<AccountCircleIcon sx={{fontSize:210,marginTop:"2rem",marginLeft:"8rem"}} className='account-icon'/> }
    {/* <AccountCircleIcon sx={{fontSize:210,marginTop:"2rem",marginLeft:"8rem"}} className='account-icon'/> */}
<Typography variant='h2' sx={{marginTop:"1rem"}} className='name'>{user.name}</Typography>

{/* <Button className='follow' variant='contained' sx={{backgroundColor:"#DE354C",marginTop:"2rem",marginLeft:"2rem",':hover':{bgcolor: '#DE354C', // theme.palette.primary.main
      color: 'white',}}}>Follow</Button> */}
<div className="desc"><Typography sx={{marginLeft:"1rem"}}>{user.bio}</Typography></div>
{/* <div className="socials">
    <div className="fbicon">
    <FaFacebook size={30}/>
    </div>
<div className="instaicon">
<FaInstagram size={30}/>
</div>
<div className="twticon">
<FaTwitter size={30}/>
</div> */}

{/* </div> */}
<div className="follows">
<button className='followersBtn' onClick={followersHandler}>
<div className="followers">
<p>Followers</p>
<p className='countFollowers'>{user.followers.length}</p>
</div>
<Dialog
              open={followersToggle}
              onClose={() => setFollowersToggle(!followersToggle)}
            >
                <div className="db"> <Typography variant="h4">Followers</Typography>
                
                {user.followers.map((item)=>(
                    <UserIcon userId={item._id} name={item.name} inPg={true} avatar={item.avatar==undefined?null:item.avatar.url}/>
                ))}
                </div>
            </Dialog>
</button>
<button className='followingsBtn' onClick={followingHandler} >
<div className="following"><p>Following</p>
<p className='countFollowing'>{user.following.length}</p>
</div>
<Dialog
              open={following}
              onClose={() => setFollowingToggle(!following)}
            >
                <div className="db"> <Typography variant="h4">Following</Typography>
                {user.following.map((item)=>(

                    <UserIcon key={item._id} userId={item._id} name={item.name} inPg={true} avatar={item.avatar==undefined?null:item.avatar.url}/>
                ))}
                </div>

            </Dialog>
</button>

</div>


</div>
<div className="rightSection">
<h1>Your Writings</h1>
{posts && posts.length>0? (
posts.map((post) => (
    <PostBox
      key={post._id}
      id={post._id}
     title={post.title}
     content={post.content}
     likeArray={post.likes}
     likes={post.likes.length}
     comments={post.comments.length}
     commentArray={post.comments}
     isDelete={true}
    />
  ) ,

))
:
          <Typography variant="h6">You have not made any post</Typography>
        }

{/* <PostBox title={posts[0].title} content={posts[0].content}/> */}


</div>

        </div>
    )
}

export default User
