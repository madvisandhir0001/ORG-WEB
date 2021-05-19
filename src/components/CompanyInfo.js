import { Button } from '@material-ui/core'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import styled from 'styled-components'
import { users, auth } from '../utils/firebase'

const CompanyInfo = ({ companyData }) => {
    const [user] = useAuthState(auth);
    const removeCompany = () => {
        users.doc(user.email).set({ companyData: null }, { merge: true })
    }
    return (
        <Container>
            <h2>Company Info</h2>
            <Info>
                <div><h3>title:</h3> <p>{companyData.title}</p></div>
                <div><h3>website:</h3> <p>{companyData.website}</p></div>
                <div><h3>address:</h3> <p>{companyData.address}</p></div>
                <div><h3>city:</h3> <p>{companyData.city}</p></div>
                <div><h3>state:</h3> <p>{companyData.state}</p></div>
                <div><h3>pincode:</h3> <p>{companyData.pincode}</p></div>
                <div><h3>email:</h3> <p>{companyData.email}</p></div>
                <div><h3>landline:</h3> <p>{companyData.landline}</p></div>
                <div><h3>phoneNo:</h3> <p>{companyData.phoneNo}</p></div>
            </Info>
            <RemoveCompany onClick={removeCompany} >Remove Company</RemoveCompany>
        </Container>
    )
}

export default CompanyInfo

const Container = styled.div`

`;
const Info = styled.div`
    display: flex;
    /* flex-direction:column; */
    flex-wrap: wrap;
    justify-content:space-evenly; 
    >div{
        display: flex;
        align-items: center;
        width: 49%;
    }
    >div>p{
        margin:0 !important;
        padding:0 !important;
        text-transform: capitalize;
        font-size: 20px;
    }
    >div>h3{
        margin:0 !important;
        padding:0 !important;
        text-transform: capitalize;
        font-weight: 500;
        font-size:20px;
    }
`;
const RemoveCompany = styled(Button)`
    background-color:red !important;
    color:white !important;

`;