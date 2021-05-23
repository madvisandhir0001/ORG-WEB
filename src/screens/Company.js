import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import styled from 'styled-components';
import ProductCard3 from '../components/ProductCard3';
import Slideshow from '../components/Slideshow';
import { selectCompanies } from '../features/appSlice';

import { companies, products as productsRef } from '../utils/firebase';

const Company = () => {
    const [companyData, setCompanyData] = useState({});
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productsRef.where('email', '==', id)
            .onSnapshot(snapshot => setProducts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }))))
    }, [id]);

    useEffect(() => {
        if (id) {
            companies.where('userEmail', '==', id)
                .onSnapshot(snapshot => setCompanyData(snapshot.docs.map(doc => doc.data())))
        }
    }, [id]);

    return (
        <Container>
            <h1>{companyData[0]?.title}</h1>
            <hr className="style-hr" />
            <Slideshow companyProducts={products} />
            <br />
            <br />
            <hr className="style-hr" />
            <Products>
                <h2>Products</h2>
                {products.map(({ id, data }) => <ProductCard3 product={data} id={id} key={id} />)}
            </Products>
            <br />
            <br />
            <hr className="style-hr" />
            <Address>
                <div>
                    <h3>Address</h3>
                    <p>{companyData[0]?.address},{companyData[0]?.city},{companyData[0]?.state},{companyData[0]?.pincode}</p>
                </div>
            </Address>
        </Container>
    )
}

export default Company

const Container = styled.div`
    overflow-y: scroll;
    height: 95vh;
    >h1{    
        padding:50px ;
    }
    >.style-hr {
        overflow: visible; /* For IE */
        height: 30px;
        width: 95vw;
        margin:auto;
        border-style: solid;
        border-color: black;
        border-width: 1px 0 0 0;
        border-radius: 20px;
    }
    >.style-hr:before { /* Not really supposed to work, but does */
        display: block;
        content: "";
        height: 30px;
        margin-top: -31px;
        border-style: solid;
        border-color: black;
        border-width: 0 0 1px 0;
        border-radius: 20px;
    }
    `;

const Products = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    >h2{
        align-self: flex-start;
        padding:50px;
        /* text-decoration: underline; */
    }
    /* flex-wrap: wrap; */
`;
const Address = styled.div`
    background-color:#000;
    margin-top:50px;
    color:#fff;
    padding:50px 0;
    display: flex;
    justify-content: center;
    >div{
        >p{
            font-size: 20px;
        }
    }
`;