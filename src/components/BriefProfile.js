import React from 'react'
import styled from 'styled-components';

const BriefProfile = () => {
    return (
        <Container>
            <h1>Brief Profile</h1>
            <Card>
                <img src="https://firebasestorage.googleapis.com/v0/b/org-ldh.appspot.com/o/assests%2FhomeScreen__rightLogo.png?alt=media&token=e6b2f0e2-346f-4f22-b052-999115dd350a" alt="1_logo" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </Card>
        </Container>
    )
}

export default BriefProfile

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

const Card = styled.div`
    width: 60vw;
    margin:auto;
    display: flex;
    padding:40px 0;
    justify-content: space-between;
    align-items: center;
    >img{
        height:350px;
        object-fit: contain;
    }
    >p{
        font-size: 25px;
        text-align: justify;
        width:400px;
    }
    ${() => window.innerWidth < 960 && `  
       flex-direction:column;
       >img{
           width: 70vw;
       }
       >p{
            width:80vw;
            font-size:18px;
       }
    `}
`;
