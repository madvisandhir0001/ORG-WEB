import { Avatar, Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Account from '../components/Account';
import RegisterCompany from '../components/RegisterCompany';
import UserProfile from '../components/UserProfile';
import CompanyCP from '../components/CompanyCP';
import { auth } from '../utils/firebase';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import HomeIcon from '@material-ui/icons/Home';
import { useSelector } from 'react-redux';
import { selectCompanyData, selectUserData } from '../features/appSlice';
import LoadingScreen from './LoadingScreen';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const userData = useSelector(selectUserData);
    const companyData = useSelector(selectCompanyData);
    const history = useHistory();
    const location = useLocation();
    console.log(companyData)
    // Redirect to first option in sidebar
    useEffect(() => { location?.pathname === '/user/dashboard' && history.push('/user/dashboard/profile') }, [])

    // Redirect to home page if user not authenticated
    useEffect(() => {
        if (!user && !loading) {
            history.push('/')
        }
    }, [user, loading])

    return (
        (userData && companyData) ?
            <Container data-aos="fade-down" data-aos-duration="1000">
                <Profile>
                    <Sidebar>
                        <SidebarHeader>
                            <Avatar style={{ width: '65px', height: '65px' }} src={userData?.profilePic} />
                            <h1>{userData.name.charAt(0).toUpperCase() + userData.name.slice(1)}</h1>
                        </SidebarHeader>
                        <Nav>
                            <Path to='/user/dashboard/profile'>
                                <Button
                                    variant="text"
                                    color="inherit"
                                    startIcon={<PersonOutlinedIcon />}
                                    endIcon={location?.pathname === '/user/dashboard/profile' && <ArrowRightAltIcon />}>
                                    Profile
                            </Button>
                            </Path>
                            {!companyData && <Path to='/user/dashboard/register company'>
                                <Button
                                    variant="text"
                                    color="inherit"
                                    startIcon={<BusinessOutlinedIcon />}
                                    endIcon={location?.pathname === '/user/dashboard/register company' && <ArrowRightAltIcon />}>
                                    Register Company</Button>
                            </Path>}
                            {companyData && <Path to={`/user/dashboard/company/${companyData?.title}`}>
                                <Button
                                    variant="text"
                                    color="inherit"
                                    startIcon={<BusinessOutlinedIcon />}
                                    endIcon={location?.pathname === `/user/dashboard/company/${companyData?.title}` && <ArrowRightAltIcon />}>
                                    {companyData.title}</Button>
                            </Path>}
                            {/* <Path to='/user/dashboard/account'>
                                <Button
                                    variant="text"
                                    color="inherit"
                                    startIcon={<DashboardOutlinedIcon />}
                                    endIcon={location?.pathname === '/user/dashboard/account' && <ArrowRightAltIcon />}>
                                    Account
                                </Button>
                            </Path> */}
                            <Path to='/'>
                                <Button
                                    variant="text"
                                    color="inherit"
                                    startIcon={<HomeIcon />}>
                                    Home
                            </Button>
                            </Path>
                        </Nav>
                        <IssueBox>
                            <h3>Having troubles?</h3>
                            <h4 onClick={() => history.push('/contact')}>Contact us</h4>
                        </IssueBox>
                    </Sidebar>
                    <Content>
                        <Route path="/user/dashboard/profile"><UserProfile userData={userData} /></Route>
                        <Route path="/user/dashboard/register company">{!companyData && <RegisterCompany userData={userData} />}</Route>
                        <Route path="/user/dashboard/company">{companyData && <CompanyCP userData={userData} />}</Route>
                        <Route path="/user/dashboard/account"><Account /></Route>
                    </Content>
                </Profile>
            </Container>
            :
            <LoadingScreen />
    )
}

export default Dashboard

const Container = styled.div`
    display: grid;
    place-items:center;
    height:100vh;
    width:100vw;
    `;
const Profile = styled.div`
    display: flex;
    background-color:white;
    height:70vh;
    width:70vw;
    border-radius:15px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2) ;
`;
const Sidebar = styled.div`
    background-color:#0D0D19;
    color:#A0A0AC;
    padding:10px;
    border-top-left-radius:15px;
    border-bottom-left-radius:15px;
    padding:10px;
    flex:.25;
    display: flex;
    flex-direction:column;
    align-items: center;
    position:relative;
`;
const SidebarHeader = styled.div`
    display: flex;
    color:#FEFEFF;
    align-items: center;
    >h1{
        font-size:28px;
        margin-left:20px;
        font-weight:400;
    }
`;
const Nav = styled.div`
    margin-top:100px;
    width: 100%;
    max-width:fit-content;
`;
const Path = styled(Link)`
    display: flex;
    flex:column;
    align-items: center;
    text-decoration:none !important;
    /* margin-bottom:50px; */
    text-transform:capitalize !important;
    >button{
        font-size:20px !important;
        white-space: nowrap;
    }
    >button:focus {
    outline: none !important;
}
`;
const Content = styled.div`
    flex:.75;
`;
const IssueBox = styled.div`
    background: rgb(27,26,40);
    background: linear-gradient(83deg, rgba(27,26,40,1) 0%, rgba(34,36,51,1) 100%);
    padding:30px;
    position:absolute;
    bottom:60px;
    border-radius:15px;
    >h3{
        font-size:18px;
        color:#9999A5;
    }
    >h4{
        font-size:16px;
        color:#EEEEF7;
        cursor: pointer;
        :hover{
            opacity:.8 ;
        }
    }
`;
const ContentHeader = styled.div``;
// const Container = styled.div``;
// #4E55EB #222433