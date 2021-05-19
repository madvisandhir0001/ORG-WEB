import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, users } from '../utils/firebase';
import { Avatar, Button } from '@material-ui/core';
import { useHistory } from 'react-router';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link as ATag } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Header = () => {
    const [user] = useAuthState(auth);
    const history = useHistory();
    const [userData, setUserData] = useState([]);
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

    useEffect(() => {
        if (user) {
            users.doc(user.email).onSnapshot(snapshot => setUserData(snapshot.data()));
        }
    }, [user]);

    useOutsideAlerter(settingsRef);

    return (
        <Container>
            <Brand>
                <img src="" alt="logo" />
                <h1>Project Title</h1>
            </Brand>
            <Nav className="no-select">
                <Link to="/">Home</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Chat</Link>
                {user && <Link to="/user/dashboard/profile">Profile</Link>}
            </Nav>
            {!user ?
                <Auth>
                    <Button onClick={() => history.push('/user/login')} variant="outlined" color="primary">Sign In</Button>
                    <Button style={{ marginLeft: '10px' }} onClick={() => history.push('/user/register')} variant="contained" color="primary"
                    // endIcon={<ArrowForwardIcon />}
                    >Get Started</Button>
                </Auth>
                :
                <User onMouseEnter={() => setShowSettings(true)} onClick={() => setShowSettings(true)}>
                    <Avatar style={{ width: '30px', height: '30px' }} src={userData?.profilePic} />
                    <ArrowDropDownIcon style={{ color: 'gray' }} />
                </User>
            }
            {showSettings &&
                <Settings onClick={() => setShowSettings(false)} ref={settingsRef}>
                    <p onClick={() => history.push('/user/dashboard/profile')}>Dashboard</p>
                    <p onClick={() => history.push('/user/dashboard/profile')}>Profile</p>
                    <p onClick={() => history.push('/user/dashboard/account')}>Account Settings</p>
                    <p onClick={() => history.push('/user/contact')}>Help</p>
                    <p onClick={() => auth.signOut()}>Logout</p>
                </Settings>
            }
        </Container>
    )
}

export default Header

const Container = styled.div`
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