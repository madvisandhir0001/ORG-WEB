import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

const PinnedProfiles = () => {
    return (
        <Container>
            <h1>Pinned Profiles</h1>
            <User>
                <Avatar style={{ width: '40px', height: '40px' }} src={''} />
                <h3>Name</h3>
            </User>
            <User>
                <Avatar style={{ width: '40px', height: '40px' }} src={''} />
                <h3>Name</h3>
            </User>
            <User>
                <Avatar style={{ width: '40px', height: '40px' }} src={''} />
                <h3>Name</h3>
            </User>
            <User>
                <Avatar style={{ width: '40px', height: '40px' }} src={''} />
                <h3>Name</h3>
            </User>
            <User>
                <Avatar style={{ width: '40px', height: '40px' }} src={''} />
                <h3>Name</h3>
            </User>
            <User>
                <Avatar style={{ width: '40px', height: '40px' }} src={''} />
                <h3>Name</h3>
            </User>
            <User>
                <Avatar style={{ width: '40px', height: '40px' }} src={''} />
                <h3>Name</h3>
            </User>
        </Container>
    )
}

export default PinnedProfiles

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

const User = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 15px 10px;
    > h3{
    margin-left: 10px;
    font-weight: 400;
    }
`;