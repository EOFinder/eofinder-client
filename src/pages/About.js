import React from 'react'
import styled from 'styled-components';

import Navbar from '../components/Navbar'

const ImagesAbout = styled.img`
    border-radius: 50%;
    width: 70%;
`;

const About = () => {
    return (
        <>
        <style type="text/css">
            {`
            .about-feo {
                background-image: url(https://images.unsplash.com/photo-1550950545-ed787445f418?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60);
                padding: 50px 150px;
            }
            .why-feo {
                padding: 50px 150px;
            }
            .developer {
                background-color: #3C6E71;
                padding: 15px;
            }
            h2, div .picture, div .picture2, .name-text, div .image-icon{
                text-align: center;
            }
            p {
                text-align: justify;
            }
            div .picture2 {
                margin-top:100px;
            }
            div .icon-why {
                display: flex;
            }
            .developer-feo {
                display: flex;
            }
            `}
        </style>
        <div className="container">
            <div className="about-feo">
                <h2>Apa itu FEO</h2>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor
                at Hampden-Sydney College in Virginia, looked up one of the more 
                obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                going through the cites of the word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from 
                sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
                (The Extremes of Good and Evil) by Cicero, written in 45 BC. This 
                book is a treatise on the theory of ethics, very popular during 
                the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor 
                sit amet..", comes from a line in section 1.10.32.
                The standard chunk of Lorem Ipsum used since the 1500s is 
                reproduced below for those interested. Sections 1.10.32 and 
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero 
                are also reproduced in their exact original form, accompanied 
                by English versions from the 1914 translation by H. Rackham.</p>
            </div>
            <div className="why-feo">
                <h2>Kenapa harus FEO?</h2>
                <div className="icon-why">
                    <div className="image-icon">
                        <p className="name-text"><b>Banyak kategori pilihan</b></p>
                        <img src="https://global-uploads.webflow.com/5bcb5ee81fb2091a2ec550c7/5ec36523544c771830037859_wfh-drawkit-thumbnail.png" width="90%" />
                    </div>
                    <div className="image-icon">
                        <p className="name-text"><b>Lebih dari 1000 hiring partner</b></p>
                        <img src="https://global-uploads.webflow.com/5bcb5ee81fb2091a2ec550c7/5f1a77a264b34791178316b5_education-card-image.png" width="90%" />
                    </div>
                    <div className="image-icon">
                        <p className="name-text"><b>Event Terbaik</b></p>
                        <img src="https://global-uploads.webflow.com/5bcb5ee81fb2091a2ec550c7/5eeae67b42a975dbdc67fb01_social-movements-card-image.png" width="90%" />
                    </div>
                </div>
            </div>
            <div className="developer">
                <h2>Di balik layar FEO</h2>
                <div className="developer-feo">
                    <div className="picture">
                        <p className="name-text"><b>David Beckham</b></p>
                        <ImagesAbout src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <p className="name-text"><b>Pemain Bola</b></p>
                    </div>
                    <div className="picture2">
                        <p className="name-text"><b>David Beckham</b></p>
                        <ImagesAbout src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <p className="name-text"><b>Pemain Bola</b></p>
                    </div>
                    <div className="picture2">
                        <p className="name-text"><b>David Beckham</b></p>
                        <ImagesAbout src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <p className="name-text"><b>Pemain Bola</b></p>
                    </div>
                    <div className="picture">
                        <p className="name-text"><b>David Beckham</b></p>
                        <ImagesAbout src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <p className="name-text"><b>Pemain Bola</b></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;