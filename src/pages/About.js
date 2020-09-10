import React from 'react'
import styled from 'styled-components';

// import './about.css'

const Body = styled.div`
    background-color: whitesmoke;
`;
const ImagesBacr = styled.img`
    border-radius: 50%;
    width: 80%;
`;
const AboutFeo = styled.div`
    background-image: url(https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60);
    background-position: center;
    padding: 90px 200px;
    background-size: 100%;
    color: white;
    font-weight: 700; 
    font-family: 'roboto';
`;
const WhyFeo = styled.div`
    padding: 50px 150px;
    display: flex;
    flex-direction: column;
`;
const WhyFeoCard = styled.div`
    -webkit-box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.15);
    box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.15);
    margin: 0px 8px;
    width: 400px;
    text-align: center;
`;
const ImageCard = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
`;
const DisplayFlexWrap = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const DisplayFlexNoWrap = styled.div`
    display: flex;
    justify-content: space-between;
  
`;

const Developer = styled.div`
    background-color: #3C6E71;
    padding: 30px;
    color: white;
`
const Centerh2 = styled.h2`
    text-align: center;
    font-family: 'lora';
    font-weight: 700;
    font-size: 300%;
`;
const ParagrapJustify = styled.p`
    text-align: justify;
    font-family: 'roboto';
    font-weight: 700;
    font-size: 150%;
`;



const About = () => {
    const styles = {
        centerText : {
            textAlign: 'center'
        },
        downPicture : {
            marginTop: '100px',
            textAlign: 'center'
        },
        svgStyle : {
            display: 'inline'
        }
    }
    return (
        <Body>
            <AboutFeo>
                <Centerh2>Apa itu FEO</Centerh2>
                <ParagrapJustify>
                    FEO adalah sebuah website pencarian event event berkualitas dan termurah selain itu FEO hanya didirikan
                    oleh 4 orang yang sedang mengerjakan latihan tugas akhir bootcampnya wah luar biasa sekali orang-orang 
                    ini mari kita dukung karya karya anak bangsa yang bisa menjadi sumber daya manusia yang berguna pastinya
                    dari pada terus terusan ngeluh tentang hidup lebih baik ngeluh karena ngoding karena meskipun pusing bisa
                    menghasilkan sesuatu dari pada pusing karna nganggur apa yang mau dipusingin dapetnya pusing doang hasilnya
                    ga ada
                </ParagrapJustify>
            </AboutFeo>
            <WhyFeo>
                <Centerh2>Kenapa harus FEO?</Centerh2>
                <DisplayFlexWrap>
                    <WhyFeoCard>
                        <p style={styles.centerText}>Banyak kategori pilihan</p>
                        <ImageCard src={require('../assets/images/category.svg')} alt="category" width="300px" style={styles.svgStyle}/>
                    </WhyFeoCard>
                    <WhyFeoCard>
                        <p style={styles.centerText}>Lebih dari 1000 hiring partner</p>
                        <ImageCard src={require('../assets/images/handshake.svg')} alt="partner" width="300px" style={styles.svgStyle}/>
                    </WhyFeoCard>
                    <WhyFeoCard>
                        <p style={styles.centerText}>Event Terbaik</p>
                        <ImageCard src={require('../assets/images/review.svg')} alt="event" width="300px" style={styles.svgStyle}/>
                    </WhyFeoCard>
                </DisplayFlexWrap>
            </WhyFeo>
            <Developer>
                <Centerh2>Di balik layar FEO</Centerh2>
                <DisplayFlexNoWrap>
                    <div style={styles.centerText}>
                        <p style={styles.centerText}>Ridho Abdul Majid</p>
                        <ImagesBacr src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <p style={styles.centerText}>Fullstack(leader)</p>
                    </div>
                    <div style={styles.downPicture}>
                        <p style={styles.centerText}>Rum Rumondang Tampubolon</p>
                        <ImagesBacr src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <p style={styles.centerText}>Fullstack</p>
                    </div>
                    <div style={styles.downPicture}>
                        <p style={styles.centerText}>Angga Prasetya Wibawa</p>
                        <ImagesBacr src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <p style={styles.centerText}>Fullstack</p>
                    </div>
                    <div style={styles.centerText}>
                        <p style={styles.centerText}>Agung Mubarok</p>
                        <ImagesBacr src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <p style={styles.centerText}>Fullstack</p>
                    </div>
                </DisplayFlexNoWrap>
            </Developer>
        </Body>
    )
}

export default About;