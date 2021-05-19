import React from 'react'
import styled from 'styled-components';
import CompanyAddProducts from './CompanyAddProducts';
import CompanyInfo from './CompanyInfo'
import CompanyProducts from './CompanyProducts';

const CompanyCP = ({ userData }) => {
    const companyData = userData.companyData;
    return (
        <Container>
            <h1>{companyData.title.toUpperCase()}</h1>
            <CompanyInfo companyData={companyData} />
            <CompanyProducts />
            <CompanyAddProducts />
        </Container>
    )
}

export default CompanyCP

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
