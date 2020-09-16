import React from 'react'

import {
    ImagesBacr, AboutFeo, WhyFeo, WhyFeoCard, ImageCard,
    DisplayFlexWrap, DisplayFlexNoWrap, Developer,
    CenterText, Centerh2, ParagrapJustify, DeveloperDetail,
} from '../components/AboutComponent'

const About = () => {
    return (
        <div>
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
                        <CenterText>Banyak kategori pilihan</CenterText>
                        <ImageCard src={require('../assets/images/category.svg')} alt="category" width="300px"/>
                    </WhyFeoCard>
                    <WhyFeoCard>
                        <CenterText>Lebih dari 1000 hiring partner</CenterText>
                        <ImageCard src={require('../assets/images/handshake.svg')} alt="partner" width="300px"/>
                    </WhyFeoCard>
                    <WhyFeoCard>
                        <CenterText>Event Terbaik</CenterText>
                        <ImageCard src={require('../assets/images/review.svg')} alt="event" width="300px"/>
                    </WhyFeoCard>
                </DisplayFlexWrap>
            </WhyFeo>
            <Developer>
                <Centerh2>Di balik layar FEO</Centerh2>
                <DisplayFlexNoWrap>
                    <DeveloperDetail>
                        <CenterText>Ridho Abdul Majid</CenterText>
                        <ImagesBacr src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <CenterText>Fullstack(leader)</CenterText>
                    </DeveloperDetail>
                    <DeveloperDetail>
                        <CenterText>Rum Rumondang Tampubolon</CenterText>
                        <ImagesBacr src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <CenterText>Fullstack Developer</CenterText>
                    </DeveloperDetail>
                    <DeveloperDetail>
                        <CenterText>Angga Prasetya Wibawa</CenterText>
                        <ImagesBacr src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <CenterText>Fullstack Developer</CenterText>
                    </DeveloperDetail>
                    <DeveloperDetail>
                        <CenterText>Agung Mubarok</CenterText>
                        <ImagesBacr src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                        <CenterText>Fullstack Developer</CenterText>
                    </DeveloperDetail>
                </DisplayFlexNoWrap>
            </Developer>
        </div>
    )
}

export default About;