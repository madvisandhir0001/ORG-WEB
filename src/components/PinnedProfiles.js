import React, { useEffect, useState } from 'react'
import { Avatar } from '@material-ui/core'
import styled from 'styled-components'
import { users, users as usersRef } from '../utils/firebase'

const PinnedProfiles = () => {
    const [users, setUser] = useState([])
    useEffect(() => {
        usersRef.limit(7).get().then(snapshot => {
            setUser(snapshot.docs.map(doc => doc.data()))
        })
    }, []);

    return (
        <Container>
            <h1>Pinned Profiles</h1>
            {users && users.map(user =>
                <User>
                    <Avatar style={{ width: '40px', height: '40px' }} src={user.profilePic} />
                    <h3>{user.name.charAt(0).toUpperCase() + user.name.slice(1)}</h3>

                </User>)}
        </Container>
    )
}

export default PinnedProfiles

const Container = styled.div`
    margin:10px;
    background-color:white;
    border-radius:10px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    >h1{
        color:#383B51;
        border-top-right-radius:10px;
        border-top-left-radius:10px;
        background: rgb(137,166,196);
        background: linear-gradient(0deg, rgba(137,166,196,0) 0%, rgba(137,166,196,1) 100%);
        padding:5px 10px;
    }
`;

const User = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 15px 10px;
    padding:5px;
    transition: all .25s ease-in-out;
    :hover{
        transform: scale(1.01);
    }
    > h3{
    margin-left: 10px;
    font-weight: 400;
    }
`;