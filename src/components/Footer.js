import React from 'react'
import styled from 'styled-components';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import SocialLink from './SocialLink';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

const Footer = () => {
    return (
        <Container>
            <Card>
                <Left>
                    <h2>Project Title</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    <div>
                        <Links>
                            <h3>Links</h3>
                            <div>
                                <h4>Link 1</h4>
                                <h4>Link 2</h4>
                                <h4>Link 3</h4>
                                <h4>Link 4</h4>
                                <h4>Link 5</h4>
                            </div>
                        </Links>
                        <Services>
                            <h3>Serivces</h3>
                            <div>
                                <h4>Serivces 1</h4>
                                <h4>Serivces 2</h4>
                                <h4>Serivces 3</h4>
                                <h4>Serivces 4</h4>
                                <h4>Serivces 5</h4>
                            </div>
                        </Services>
                    </div>
                </Left>
                <Right>
                    <SocialLink name={'mail@gmail.com'} icon={<MailIcon className="mui-icon-40" />} link={""} />
                    <SocialLink name={'985751XXXX'} icon={<PhoneIcon className="mui-icon-40" />} link={""} />
                    <div>
                        <SocialLink icon={<FacebookIcon className="mui-icon-40" />} link={"https://www.google.com/"} />
                        <SocialLink icon={<InstagramIcon className="mui-icon-40" />} link={""} />
                        <SocialLink icon={<YouTubeIcon className="mui-icon-40" />} link={""} />
                        <SocialLink icon={<TwitterIcon className="mui-icon-40" />} link={""} />
                    </div>
                </Right>
            </Card>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    min-height:500px;
    background-color:#000;
    margin-top: 100px;
    color:#fff;
`;
const Card = styled.div`
    display: flex;
    width:60vw;
    margin: auto;
    padding: 40px 0;
    align-items: center;
    ${() => window.innerWidth < 960 && `
        flex-direction:column;
        width:98vw;
        padding: 0 10px;
        margin:auto;
        margin-bottom:60px;
    `}
`;

const Left = styled.div`
    flex:.7;
    height:100%;
    >div{
        display: flex;
        padding: 10px;
        align-items: center;
        justify-content: center;
    }
`;

const Right = styled.div`
    flex:.3;
    height:100%;
    display: flex;
    flex-direction:column;
    /* justify-content: center; */
    /* align-items: center; */
    >div{
        display: flex;
    }
    ${() => window.innerWidth < 960 && `
        flex-direction:row;
        flex-wrap: wrap;
    `}
`;

const Links = styled.div`
    display: flex;
    flex-direction:column;
    flex:0.5;
    >h3{}
    >div{}
    >div>h4{
        font-weight: 300;
        font-size:20px;
        :hover{
            opacity: 0.8;
        }
    }
    ${() => window.innerWidth < 960 && `  
        align-items: center;
    `}
`;

const Services = styled.div`
    display: flex;
    flex-direction:column;
    flex:0.5;
    >h3{}
    >div{}
    >div>h4{
        font-weight: 300;
        font-size:20px;
        :hover{
            opacity: 0.8;
        }
    }
    ${() => window.innerWidth < 960 && `  
        align-items: center;
    `}
`;