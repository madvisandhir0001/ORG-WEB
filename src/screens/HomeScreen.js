import React from 'react'
import styled from 'styled-components'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import { Avatar, Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const HomeScreen = () => {
    const [user] = useAuthState(auth);
    const history = useHistory();
    return (
        <Container>
            <Header>
                <Brand>
                    <img src="https://www.dynadot.com/domain/logo/org-logo1437113194.png" />
                    <h1>ORG LDH</h1>
                </Brand>
                <Nav>
                    <h3>Products</h3>
                    <h3>Templates</h3>
                    <h3>Pricing</h3>
                    <h3>Customers</h3>
                </Nav>
                {!user ?
                    <Auth>
                        <Button onClick={() => history.push('/user/login')} variant="outlined" color="primary">Sign In</Button>
                    </Auth>
                    :
                    <User>
                        <Avatar onClick={() => auth.signOut()} src={user?.photoURL} />
                    </User>
                }
            </Header>
            <Body>
                <Left>
                    <div>
                        <h1>description</h1>
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
    
    ::-webkit-scrollbar{
        display: none;
    }
    -ms-overfle-style:none;
    scrollbar-width:none;
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
    >h3{
        color:gray;
        font-size:14px;
        font-weight:400;
    }
`;
const User = styled.div``;
const Auth = styled.div``;
const Body = styled.div`
    display: flex;
    height:80vh;
    overflow:hidden;
`;
const Left = styled.div`
    flex:.5;
    height:100%;
    width:100%;
    display:grid;
    place-items:center;
`;
const Right = styled.div`
    flex:.5;
    height:100%;
    width:100%;
    display:grid;
    place-items:center;
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
`;
const Footer = styled.div``;