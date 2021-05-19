import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import { Avatar, Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link as ATag } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { TrendingUpTwoTone } from '@material-ui/icons';

const HomeScreen = () => {
    const [user] = useAuthState(auth);
    const history = useHistory();
    const [showSettings, setShowSettings] = useState(false);
    const settingsRef = useRef();

    const useOutsideAlerter = ref => {
        useEffect(() => {
            const handleClickOutside = event => {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowSettings(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside)
        }, [ref]);
    }
    useOutsideAlerter(settingsRef);

    return (
        <Container>
            <Header>
                <Brand>
                    <img src="" alt="logo" />
                    <h1>Project Title</h1>
                </Brand>
                <Nav className="no-select">
                    <Link to="/">Home</Link>
                    <Link to="/categories">Categories</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Chat</Link>
                    {user && <Link to="/user/profile">Profile</Link>}
                </Nav>
                {!user ?
                    <Auth>
                        <Button onClick={() => history.push('/user/login')} variant="outlined" color="primary">Sign In</Button>
                        <Button onClick={() => history.push('/user/register')} variant="contained" color="primary" endIcon={<ArrowForwardIcon />}>Get Started</Button>
                    </Auth>
                    :
                    <User onMouseEnter={() => setShowSettings(true)} onClick={() => setShowSettings(true)}>
                        <Avatar style={{ width: '30px', height: '30px' }} src={user?.photoURL} />
                        <ArrowDropDownIcon style={{ color: 'gray' }} />
                    </User>
                }
                {showSettings &&
                    <Settings onClick={() => setShowSettings(false)} ref={settingsRef}>
                        <p onClick={() => history.push('/user/account')}>Account Settings</p>
                        <p onClick={() => history.push('/user/contact')}>Help</p>
                        <p onClick={() => history.push('/user/profile')}>Edit Profile</p>
                        <p onClick={() => history.push('/user/profile')}>Profile</p>
                        <p onClick={() => auth.signOut()}>Logout</p>
                    </Settings>
                }
            </Header>
            <Body>
                <Left>
                    <div>
                        <h1>TITLE</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <Button onClick={() => history.push('/user/register')} variant="contained" color="primary" endIcon={<ArrowForwardIcon />}>Get Started</Button>
                    </div>
                </Left>
                <Right>
                    <Circle></Circle>
                    <img src={'https://firebasestorage.googleapis.com/v0/b/org-ldh.appspot.com/o/assests%2FhomeScreen__rightLogo.png?alt=media&token=e6b2f0e2-346f-4f22-b052-999115dd350a'} />
                </Right>
            </Body>
            <Footer></Footer>
        </Container>
    )
}

export default HomeScreen

const Container = styled.div`
    -ms-overfle-style:none;
    scrollbar-width:none;
    /* max-height:100vh;
    max-width:100vw; */
`;
const Header = styled.div`
    display: flex;
    justify-content:space-between;
    padding:10px;
    align-items: center;
`;
const Brand = styled.div`
    display: flex;
    align-items: center;
    >img{
        height:40px;
        object-fit:contain;
    }
    >h1{
        font-size:20px;
        margin-left:20px;
    }
`;
const Nav = styled.div`
    flex:1;
    display: flex;
    justify-content:space-evenly;
    max-width:500px;
`;
const Link = styled(ATag)`
    color:gray;
    font-size:14px;
    font-weight:400;
    transition:all .25s ease-in-out;
    :hover{
    transform:scale(1.07);
    }
`;
const User = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;
const Auth = styled.div``;
const Body = styled.div`
    display: flex;
    height:95vh;
    position:relative;
    overflow:hidden;
`;
const Left = styled.div`
    flex:.5;
    height:100%;
    width:100%;
    display:grid;
    place-items:center;
    transform:scale(1.2);
    >div{
        width:400px;
    }
    >div >h1{
        margin-bottom: 20px;
    }
    >div >p{
        margin-bottom: 20px;
        text-align:justify;
    }
    >div>button:hover{
        transition:all .3s ease-in-out !important;
    }
    >div>button:hover{
        transform:scale(1.02) !important;
    }
    >div >p::-moz-selection,>div >h1::-moz-selection { /* Code for Firefox */
    color: white;
    background: #FF6260;
    }

    >div >p::selection,>div >h1::selection {
    color: white;
    background: #FF6260;
    }
`;
const Right = styled.div`
    flex:.5;
    height:100%;
    width:100%;
    display:grid;
    place-items:center;
    overflow:hidden !important;
    >img{
        height:450px;
        object-fit:contain;
        padding-right:50px;
        padding-top:50px;

    }
`;
const Circle = styled.div`
    background-color:#FF6260;
    height:1000px;
    width:1000px;
    border-radius:50%;
    z-index:-1;
    position:absolute;
    right:-15%;
    bottom:-20%;
    overflow:hidden !important;
`;
const Footer = styled.div``;
const Settings = styled.div`
    position:absolute;
    background-color:#323941;
    color:#ADBAC7;
    right:35px;
    top:46px;
    border-radius:10px;
    z-index:100;
    >p{
        padding:0;
        margin:0;
        padding:5px 10px;
        border-bottom:1px solid #ADBAC7;
        transition:all .25s ease-in-out;
        cursor: pointer;
    }
    p:last-of-type{
        border:none !important;
    }
    >p:hover{
        /* transform:scale(1.06); */
        background:#316DCA;
    }
`;