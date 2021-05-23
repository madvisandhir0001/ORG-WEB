import React from 'react'
import styled from 'styled-components';

const AboutSite = () => {
    return (
        <Container>
            <h1>About Site</h1>
            <Card>
                <p>We provide you the platform to advertise your products and connect you with the other buyers and sellers. </p>
            </Card>
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

const Card = styled.div`
    background-image: url("http://www.collab2.co.za/wp-content/uploads/2017/06/contact-us-background.jpg"); 
    background-color: #cccccc; 
    height: 500px; 
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 

    display: flex;
    flex-direction: column;
    justify-content: center;
    color:white;
    >p{
        font-size: 25px;
        text-align: justify;
        margin-left:150px;  
        width:400px;
    }
    ${() => window.innerWidth < 960 && `  
    flex-direction:column;
    align-items: center;
       >img{
           width: 70vw;
       }
       >p{
            width:80vw;
            font-size:18px;
            margin-left:0;
       }
    `}
`;