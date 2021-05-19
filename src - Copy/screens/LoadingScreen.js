import React from 'react'
import { Circle } from 'better-react-spinkit'
import styled from 'styled-components';

function LoadingScreen() {
    return (
        <Container>
            <Circle color="#3cbc28" size={100} />
        </Container>
    )
}

export default LoadingScreen

const Container = styled.div`
    background-color:whitesmoke;
    height:100vh;
    width:100vw;
    display:grid;
    place-items:center;
`;