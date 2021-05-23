import { Avatar, Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { selectCompanies } from '../features/appSlice'
import { companies, users } from '../utils/firebase'

const UserCard = ({ user }) => {
    const [companyData, setCompanyData] = useState(null);
    const history = useHistory()

    useEffect(() => {
        if (user) {
            companies.where('userEmail', '==', user.email).onSnapshot(snapshot => setCompanyData(snapshot.docs.map(doc => doc.data())))
        }
    }, [user]);

    const makeAdmin = () => {
        users.doc(user.email).set({ role: 'admin' }, { merge: true })
    }

    const removeAdmin = () => {
        users.doc(user.email).set({ role: 'users' }, { merge: true })
    }

    return (
        <Container>
            <Avatar className="avatar" src={user.profilePic} />
            <Info>
                <h3>{user.name.charAt(0).toUpperCase() + user.name.slice(1)}</h3>
                <h4>{user.email}</h4>
                <h4>{user.phoneNo}</h4>
                <h4>{user.role.toUpperCase()}{user.role === 'users' ? <Button onClick={makeAdmin}>Make Admin</Button> : <Button onClick={removeAdmin}>Remove Admin</Button>}</h4>
                <Button onClick={() => history.push(`/company/${user.email}`)}>{companyData && (companyData.length !== 0 && companyData[0].title)}</Button>
            </Info>
        </Container>
    )
}

export default UserCard

const Container = styled.div`
    display: flex;
    padding:20px;
    align-items: center;
    border-bottom: 1px solid snow;
    .avatar{
        width:150px;
        height:150px;
        /* padding:20px; */
    }
`;

const Info = styled.div`
    margin-left: 20px;
    flex:1;
`;