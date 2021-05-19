import React from 'react'
import styled from 'styled-components';
import TeamMemberCard from './TeamMemberCard';

const Team = () => {
    return (
        <Container>
            <h1>Team</h1>
            <Cards>
                <TeamMemberCard
                    name="Member 1"
                    profilePic=""
                    about="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
                />
                <TeamMemberCard
                    name="Member 2"
                    profilePic=""
                    about="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
                />
                <TeamMemberCard
                    name="Member 3"
                    profilePic=""
                    about="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
                />
            </Cards>
        </Container>
    )
}

export default Team

const Container = styled.div`
    margin:10px;
    /* background-color:white; */
    border-radius:10px;
    >h1{
        border-top-right-radius:10px;
        border-top-left-radius:10px;
        background-color:#ADB3C8;
    }
`;
const Cards = styled.div`
    display: flex;
    width:60vw;
    margin:auto;
    /* justify-contsent: space-evenly; */
`;