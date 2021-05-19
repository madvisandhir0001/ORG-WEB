
import React, { useState } from 'react'
import styled from 'styled-components'
import InputField from './InputField'
import TitleIcon from '@material-ui/icons/Title';
import LanguageIcon from '@material-ui/icons/Language';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import PinDropIcon from '@material-ui/icons/PinDrop';
import DialpadIcon from '@material-ui/icons/Dialpad';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import { Button, CircularProgress } from '@material-ui/core';

const RegisterCompany = () => {
    const [data, setData] = useState({
        title: '',
        website: '',
        address: ''
    })
    return (
        <Container>
            <h1>Register Your Company</h1>
            <Form>
                <InputField data={data} setData={setData} value={data.title} id={'title'} label="Compnany Title" icon={<TitleIcon />} />
                <InputField data={data} setData={setData} value={data.website} id={'website'} label="Compnany Website" icon={<LanguageIcon />} />
                <InputField data={data} setData={setData} value={data.website} id={'website'} label="Compnany Address" icon={<LocationOnIcon />} />
                <InputField data={data} setData={setData} value={data.website} id={'website'} label="Compnany City" icon={<LocationOnIcon />} />
                <InputField data={data} setData={setData} value={data.website} id={'website'} label="Compnany State" icon={<LocationOnIcon />} />
                <InputField data={data} setData={setData} value={data.website} id={'website'} label="Compnany Pincode" icon={<PinDropIcon />} />
                <InputField data={data} setData={setData} value={data.website} id={'website'} label="Compnany Mail" icon={<MailIcon />} />
                <InputField data={data} setData={setData} value={data.website} id={'website'} label="Compnany Landline" icon={<PhoneIcon />} />
                <InputField data={data} setData={setData} value={data.website} id={'website'} label="Compnany Phone No." icon={<PhoneAndroidIcon />} />
            </Form>
            <Button startIcon={<CircularProgress size={16} color="white" />} type="submit" variant='contained' color="primary"> Register</Button>
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
    >button{
        align-self:center;
        margin-top:20px;
    }
`;
const Form = styled.form`
    margin-top:20px;
    width:100%;
    /* max-width:500px; */
    /* flex:1; */
    height:500px;
    margin:auto;
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

