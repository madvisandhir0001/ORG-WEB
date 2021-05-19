import React from 'react'
import styled from 'styled-components'
import Slideshow from '../components/Slideshow';
import Categories from '../components/Categories';
import PinnedProfiles from '../components/PinnedProfiles';
import BriefProfile from '../components/BriefProfile';
import AboutSite from '../components/AboutSite';
import Team from '../components/Team';
import Footer from '../components/Footer';
import Header from '../components/Header';

const HomeScreen = () => {

    return (
        <Container>
            <Header />
            <Body>
                <Left>
                    <Slideshow />
                </Left>
                <Right>
                    <Categories />
                    <PinnedProfiles />
                </Right>
            </Body>
            <BriefProfile />
            <AboutSite />
            <Team />
            <Footer />
        </Container>
    )
}

export default HomeScreen

const Container = styled.div`
    -ms-overfle-style:none;
    scrollbar-width:none;
    background-color:whitesmoke;
`;
const Body = styled.div`
    display: flex;
    width:98vw;
    position:relative;
    overflow:hidden;
    margin-top:20px;
    margin:auto;
    justify-content:space-between;
`;
const Left = styled.div`
    flex:.65;
    height:90vh;
    width:100%;
    padding:70px;
    transform:scale(1.2);
`;
const Right = styled.div`
    flex:.3;
    height:100%;
    width:100%;
    overflow:hidden !important;
    >img{
        height:450px;
        object-fit:contain;
        padding-right:50px;
        padding-top:50px;

    }
`;
