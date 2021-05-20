import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton } from '@material-ui/core';
import { auth, companies } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import ProductCard from './ProductCard';

const CompanyProducts = ({ toggle, show }) => {
    const [products, setProducts] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const unsubscribe = companies.doc(user.email).collection('products').onSnapshot(snapshot => {
            setProducts(snapshot.docs.map(product => ({ id: product.id, data: product.data() })))
        })

        return () => {
            unsubscribe();
        }
    }, [user]);

    return (
        <Container>
            <div className="header" onClick={toggle}>
                <h2>Company Products</h2>
                <IconButton className="mui-icon">
                    {show === 1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
            </div>
            {show === 1 &&
                <Products>
                    {products && products.map(({ id, data }) => <ProductCard data={data} id={id} key={id} />)}
                </Products>
            }
        </Container>
    )
}

export default CompanyProducts

const Container = styled.div`
border: 1px solid lightgray;
    margin-bottom: 20px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    >.header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: lightgray;
        padding:0 10px;
        background: rgb(137,166,196);
        background: linear-gradient(90deg,rgba(137,166,196,1) 0% ,rgba(137,166,196,.5) 100% );
    }
    >.header>h2{
        text-transform: capitalize;
    }
`;
const Products = styled.div`
    display: flex;
    flex-direction:column;
`;