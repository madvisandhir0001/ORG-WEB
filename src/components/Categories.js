import React from 'react'
import styled from 'styled-components'

const Categories = () => {
    return (
        <Container>
            <h1>Categories</h1>
            <p>Category 1</p>
            <p>Category 1</p>
            <p>Category 1</p>
            <p>Category 1</p>
            <p>Category 1</p>
        </Container>
    )
}

export default Categories

const Container = styled.div`
    margin:10px;
    background-color:white;
    border-radius:10px;
    >h1{
        border-top-right-radius:10px;
        border-top-left-radius:10px;
        background-color:#ADB3C8;
    }
`;