import React from 'react'
import styled from 'styled-components';

const AboutSite = () => {
    return (
        <Container>
            <h1>About Site</h1>
        </Container>
    )
}

export default AboutSite

const Container = styled.div`
    margin:10px;
    background-color:white;
    border-radius:10px;
    >h1{
        border-top-right-radius:10px;
        border-top-left-radius:10px;
        background-color:#ADB3C8;
    }
`;
