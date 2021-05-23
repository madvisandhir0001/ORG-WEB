import React, { useState } from 'react'
import styled from 'styled-components';

const ProductCard3 = ({ product, id }) => {
    const [show, setShow] = useState(false)

    return (
        <Container onClick={() => setShow(!show)}>
            <img src={product.image} alt={product.name} />
            <Info>
                <h1>{product.name}</h1>
                {show &&
                    <>
                        <div><h3>Description: </h3><span>{product.description}</span></div>
                        <div><h3>Company: </h3><span>{product.companyName}</span></div>
                        <div><h3>Email: </h3><span>{product.email}</span></div>
                        <div><h3>Price: </h3><span>{product.price}</span></div>
                        <div><h3>Added on: </h3><span>{product.timestamp?.toDate()?.toDateString()}</span></div>
                    </>
                }
            </Info>
        </Container>
    )
}

export default ProductCard3

const Container = styled.div`
    display: flex;
    flex-direction:column;
    padding:20px;
    align-items: center;
    border-bottom: 1px solid snow;
    background-color: #fff;
    margin-bottom: 20px;
    max-width: 500px;
    cursor: pointer;
    border: 1px solid lightgray;
    /* width: fit-content; */
    .avatar{
        width:150px;
        height:150px;
        /* padding:20px; */
    }
`;

const Info = styled.div`
    margin-left: 20px;
    flex:1;
    >div{
        display: flex;
        font-size: 20px;
        /* align-items: center; */
        >h3{
            margin:0 ;
            font-size:20px;
            width: 120px;
        }
        >span{
            /* margin-left: 20px; */
        }
    }
`;