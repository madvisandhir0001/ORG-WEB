import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { admin } from '../utils/firebase';
import TeamMemberCard from './TeamMemberCard';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Team = () => {
    const [team, setTeam] = useState([])
    useEffect(() => {
        admin.doc('data').get().then(snapshot => setTeam(snapshot.data().team))
    }, []);

    return (
        <Container>
            <h1>Team</h1>
            <Cards
            //  data-aos="fade-up"
            >
                {team && team.map(({ name, about, image }) =>
                    <TeamMemberCard
                        name={name}
                        profilePic={image}
                        about={about}
                    />
                )}
            </Cards>
        </Container>
    )
}

export default Team

const Container = styled.div`
    margin:10px;
    /* background-color:white; */
    border-radius:10px;
    >h1{
        border-top-right-radius:10px;
        border-top-left-radius:10px;
        background-color:#ADB3C8;
    }
`;
const Cards = styled.div`
    display: flex;
    width:60vw;
    margin:auto;
    /* justify-contsent: space-evenly; */
`;