import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { admin } from '../utils/firebase';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        admin.doc('data').get().then(snapshot => setCategories(snapshot.data().categories))
    }, []);
    return (
        <Container>
            <h1>Categories</h1>
            <InnerContainer>
                {/* {categories && categories.map(category => <h3>{category.name}</h3>)} */}
                <h3>Steel & Iron Industries</h3>
                <h3>Automobile Industries</h3>
                <h3>Cycle parts Industries</h3>
                <h3>Food & Beverages Industries</h3>
                <h3>Plastic Industries</h3>
            </InnerContainer>
        </Container>
    )
}

export default Categories

const Container = styled.div`
    margin:10px;
    background-color:white;
    border-radius:10px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    height:40vh;
    >h1{
        color:#383B51;
        border-top-right-radius:10px;
        border-top-left-radius:10px;
        background: rgb(137,166,196);
        background: linear-gradient(0deg, rgba(137,166,196,0) 0%, rgba(137,166,196,1) 100%);
        padding:5px 10px;
    }
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    cursor: pointer;
    margin: 15px 10px;
    padding:5px;
    > h3{
        margin-left: 10px;
        font-weight: 400;
        transition: all .25s ease-in-out;
        :hover{
            transform: scale(1.01);
        }
    }
`;