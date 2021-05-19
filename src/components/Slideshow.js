import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slideshow = () => {
    const [data, setData] = useState([])
    const history = useHistory();
    useEffect(() => {
        setData([
            {
                companyName: "ABX Company",
                img: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
                id: 'xyz',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
            },
            {
                companyName: "ABZ Company",
                img: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
                id: 'xyz',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
            },
        ])
    }, []);

    return (
        <Container>
            <Carousel interval={5000} infiniteLoop autoPlay showIndicators={false} showStatus={false} showThumbs={false}>
                {data && data.map((slide, index) =>
                    <div onClick={() => history.push('/')}>
                        <img src={slide.img} />
                        <div className="legend">
                            <h1>{slide.companyName}</h1>
                            <p >{slide.description}</p>
                        </div>
                    </div>
                )}
            </Carousel>
        </Container>
    )
}

export default Slideshow

const Container = styled.div`
    /* border-radius:20px; */
    margin:10px;
    /* border:1px solid gray; */
`;