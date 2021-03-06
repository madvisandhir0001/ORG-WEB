import React, { useEffect, useRef, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import { Avatar, Button, CircularProgress } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router';
import { Link as ATag } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useSelector } from 'react-redux';
import { selectCompanyData, selectUserData } from '../features/appSlice';
import styled from 'styled-components';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Header = () => {
    const [user, loading] = useAuthState(auth);
    const history = useHistory();
    const userData = useSelector(selectUserData);

    const companyData = useSelector(selectCompanyData);
    const [showSettings, setShowSettings] = useState(false);
    const settingsRef = useRef();
    const location = useLocation();
    const pathName = location.pathname;
    const hideAuthButtons = pathName === "/user/register" || pathName === "/user/login";

    const useOutsideAlerter = ref => {
        useEffect(() => {
            const handleClickOutside = event => {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowSettings(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside)
        }, [ref]);
    }
    useOutsideAlerter(settingsRef);

    useEffect(() => {
        setTimeout(() => {
            const header = document.getElementById('header')
            header.classList.remove("animate__animated")
            header.classList.remove("animate__zoomInDown")
        }, 2000)
    }, [])

    return (
        <Container
            id="header"
            className="animate__animated animate__zoomInDown"
        >
            <Brand onClick={() => history.push('/')}>
                <img src="https://firebasestorage.googleapis.com/v0/b/org-ldh.appspot.com/o/assests%2Flogo.png?alt=media&token=d9484d8d-ba9b-4d21-8006-01b2e875a415" alt="app__logo" />
                <h1>Way to Success</h1>
            </Brand>
            <Nav className="no-select">
                <Link to="/" className={pathName === '/' && "header-nav-active"}>Home</Link>
                {/* <Link to="/categories" className={pathName === '/categories' && "header-nav-active"}>Categories</Link> */}
                <Link to="/about" className={pathName === '/about' && "header-nav-active"}>About Us</Link>
                <Link to="/contact" className={pathName === '/contact' && "header-nav-active"}>Contact Us</Link>
                {user && <Link to="/user/dashboard/profile" className={pathName === '/user/dashboard/profile' && "header-nav-active"}>Profile</Link>}
            </Nav>
            {
                !loading ?
                    (!user ?
                        (!hideAuthButtons &&
                            <Auth>
                                <Button onClick={() => history.push('/user/login')} variant="outlined" color="primary">Sign In</Button>
                                <Button style={{ marginLeft: '10px' }} onClick={() => history.push('/user/register')} variant="contained" color="primary"
                                // endIcon={<ArrowForwardIcon />}
                                >Get Started</Button>
                            </Auth>
                        )
                        :
                        <User onMouseEnter={() => setShowSettings(true)} onClick={() => setShowSettings(true)}>
                            <Avatar style={{ width: '30px', height: '30px' }} src={userData?.profilePic} />
                            <ArrowDropDownIcon style={{ color: 'gray' }} />
                        </User>)
                    :
                    <CircularProgress size={20} />
            }
            {
                showSettings &&
                <Settings onClick={() => setShowSettings(false)} ref={settingsRef}>
                    {userData?.role === 'admin' && <p onClick={() => history.push('/admin')}>Admin Block</p>}
                    <p onClick={() => history.push('/user/dashboard/profile')}>Dashboard</p>
                    <p onClick={() => history.push('/user/dashboard/profile')}>Edit Profile</p>
                    {/* <p onClick={() => history.push('/user/dashboard/account')}>Account Settings</p> */}
                    {!companyData && <p onClick={() => history.push('/user/dashboard/register company')}>Add Company</p>}
                    {companyData && <p onClick={() => history.push('/user/dashboard/company')}>{companyData?.title}</p>}
                    <p onClick={() => history.push('/contact')}>Help</p>
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
    padding:5px 10px;
    align-items: center;
    background-color:white;
    border-bottom: 1px solid lightgray;
    z-index:1 !important;

    /* ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;  
    scrollbar-width: none; */
`;
const Brand = styled.div`
    display: flex;
    align-items: center;
    cursor:pointer;
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
    z-index:1 !important;
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