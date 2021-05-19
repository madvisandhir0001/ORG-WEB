import { Button } from '@material-ui/core';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router';
import styled from 'styled-components'
import { auth, db } from '../utils/firebase';
import EditBox from './EditBox';
import firebase from 'firebase'

const UserProfile = ({ userData }) => {
    const [user] = useAuthState(auth);
    const history = useHistory();

    const deleteUser = () => {
        var user = firebase.auth().currentUser;
        const password = prompt("Enter Password ", '');
        firebase.auth().currentUser.reauthenticateWithCredential(firebase.auth.EmailAuthProvider.credential(userData.email, password))
        user.delete().then(function () {
            auth.currentUser && auth.signOut()
            db.collection('users').doc(userData.email).delete().then(() => {
                history.push('/');
            })
        }).catch(function (error) {
            console.log(error)
        });
    }

    return (
        <Container>
            <h1>Profile</h1>
            <EditBoxs>
                <EditBox userData={userData} userId={userData.email} type={'email'} name={'email'} title={'Email'} value={userData.email} key={'email'} id={'email'} immutable />
                <EditBox userData={userData} userId={userData.email} type={'text'} name={'name'} title={'Name'} value={userData.name} key={'name'} id={'name'} />
                <EditBox userData={userData} userId={userData.email} type={'number'} name={'phone'} title={'Phone Number'} value={userData.phoneNo} key={'phoneNo'} id={'phoneNo'} />
                <EditBox userData={userData} userId={userData.email} type={'text'} name={'company'} title={'Company'} value={userData.companyName} key={'companyName'} id={'companyName'} />
                <DeleteUser onClick={deleteUser} >Delete Account</DeleteUser>
            </EditBoxs>
        </Container>
    )
}

export default UserProfile

const Container = styled.div`
    >h1{
        background:#B1A7B2;
        border-top-right-radius:15px;
    }
`;
const DeleteUser = styled(Button)`
    background-color:red !important;
    color:white !important;

`;
const EditBoxs = styled.div`
    width:500px;
    margin:auto;

`;
