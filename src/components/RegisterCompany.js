
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import InputField from './InputField'
import TitleIcon from '@material-ui/icons/Title';
import LanguageIcon from '@material-ui/icons/Language';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import PinDropIcon from '@material-ui/icons/PinDrop';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { Button, CircularProgress } from '@material-ui/core';
import { auth, users } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Error from './Error';
import { useHistory } from 'react-router';

const RegisterCompany = ({ userData }) => {
    const [user] = useAuthState(auth);
    const [companyData, setCompanyData] = useState({
        title: '',
        website: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        email: '',
        landline: '',
        phoneNo: '',
    });

    const [progress, setProgress] = useState(false);
    const [error, setError] = useState(null);
    const history = useHistory();

    useEffect(() => {
        if (userData?.companyData) {
            history.push(`/user/dashboard/${userData.companyData.title}`)
        }
    }, [userData])

    const handleClick = (e) => {
        e.preventDefault();
        if (
            companyData.title.length > 0 &&
            companyData.address.length > 0 &&
            companyData.city.length > 0 &&
            companyData.state.length > 0 &&
            companyData.pincode.length > 0 &&
            companyData.email.length > 0 &&
            companyData.phoneNo.length > 0
        ) {
            register();
        } else {
            setError('Field values missing')
        }
    }



    const register = () => {
        setProgress(true);
        users.doc(user.email).set({ companyData }, { merge: true })
            .then(() => {
                setProgress(false);
            })
    }

    return (
        <Container>
            <h1>Register Your Company</h1>
            <h2>Enter Company Details</h2>
            <Form>
                <InputField companyData={companyData} setCompanyData={setCompanyData} value={companyData.title} id={'title'} label="Title" icon={<TitleIcon />} />
                <InputField companyData={companyData} setCompanyData={setCompanyData} value={companyData.website} id={'website'} label="Website" icon={<LanguageIcon />} />
                <InputField companyData={companyData} setCompanyData={setCompanyData} value={companyData.address} id={'address'} label="Address" icon={<LocationOnIcon />} />
                <InputField companyData={companyData} setCompanyData={setCompanyData} value={companyData.city} id={'city'} label="City" icon={<LocationOnIcon />} />
                <InputField companyData={companyData} setCompanyData={setCompanyData} value={companyData.state} id={'state'} label="State" icon={<AccountBalanceIcon />} />
                <InputField companyData={companyData} setCompanyData={setCompanyData} value={companyData.pincode} id={'pincode'} label="Pincode" icon={<PinDropIcon />} />
                <InputField companyData={companyData} setCompanyData={setCompanyData} value={companyData.email} id={'email'} label="E-Mail" icon={<MailIcon />} />
                <InputField companyData={companyData} setCompanyData={setCompanyData} value={companyData.landline} id={'landline'} label="Landline" icon={<PhoneIcon />} />
                <InputField companyData={companyData} setCompanyData={setCompanyData} value={companyData.phoneNo} id={'phoneNo'} label="Phone No." icon={<PhoneAndroidIcon />} />
                <button onClick={handleClick} type="submit" hidden>Register</button>
            </Form>
            {error && <Error message={error} />}
            <Button onClick={handleClick} startIcon={progress && <CircularProgress size={16} color="white" />} type="submit" variant='contained' color="primary"> Register</Button>
        </Container>
    )
}

export default RegisterCompany

const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction:column;
    >h1{
        background:#B1A7B2;
        border-top-right-radius:15px;
    }
    >h2{
        margin: auto;
        text-decoration: underline;
    }
    >button{
        align-self:center;
        margin-top:20px;
    }
`;
const Form = styled.form`
    width:100%;
    max-width:600px;
    max-height:400px;
    /* flex:1; */
    height:500px;
    margin:auto;
    margin-top:50px;
    padding:5px;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
    overflow-y:scroll;
    overflow-x:hidden;
    position:relative;
    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;  
    scrollbar-width: none;
    /* ::-webkit-scrollbar {
        width: 1em;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    ::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        outline: 1px solid slategrey;
    } */
    >.MuiFormControl-root{
            /* width:45% ; */
    }
    
`;

