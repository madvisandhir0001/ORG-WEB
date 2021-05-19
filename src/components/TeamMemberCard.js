import { Avatar } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';

const TeamMemberCard = ({ name, profilePic, about }) => {
    return (
        <Container>
            <Space />
            <UserAvatar src={profilePic} />
            <Info>
                <h1>{name}</h1>
                <p>{about}</p>
            </Info>
        </Container>
    )
}

export default TeamMemberCard

const Container = styled.div`
    margin:10px;
    background-color:whitesmoke;
    border-radius:10px;
    display: flex;
    align-items: center;
    flex-direction:column;
    position:relative;
    width:350px;
`;
const UserAvatar = styled(Avatar)`
    width: 150px !important;
    height: 150px !important;
    position:absolute !important;
    top:65px;
`;
const Info = styled.div`
    background-color: white;
    border-radius:10px;
    display: flex;
    align-items: center;
    flex-direction:column;
    padding:30px;
    padding-top:85px;
    >h1{

    }
    >p{
        text-align:justify;
    }
`;
const Space = styled.div`
    height: 150px !important;
`;