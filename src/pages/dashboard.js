import React from 'react';
import {
    Link
  } from "react-router-dom";
import styled from 'styled-components';
import { Button, Card, Col, Row, Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'

import './dashboard.css';


const Dashboard = () => {
  let styles = [{
    h3styles:{
      color: 'black',
    },
    pstyles:{
      color: 'black',
    }
  }]
  const TopSelling =[
    {
      gambar: 'https://image.freepik.com/free-vector/blue-banner-black-friday-sale-with-text-space_1017-22175.jpg',
      nama:'Slide one',
      
    },
    {
     gambar: 'https://img.freepik.com/free-vector/black-friday-sale-confetti-banner-with-text-space_1017-21912.jpg?size=626&ext=jpg&ga=GA1.2.1986657151.1599729797',
     nama:'Slide 2',
   },
   {
     gambar: 'https://image.freepik.com/free-vector/abstract-blue-black-friday-stylish-banner_1017-21825.jpg',
     nama:'slide 3'
   },
  ]
  const Categories =[
    {
      photo: 'https://image.freepik.com/free-psd/coffee-talk-flyer-style_23-2148580325.jpg',
      nama: 'categories 1'
    },
    {
      photo: 'https://image.freepik.com/free-vector/barista-training-event-poster-design-template_3890-644.jpg',
      nama: 'categories 2'
    },
    {
      photo: 'https://img.freepik.com/free-psd/yellow-day-concept-poster-template_23-2148549816.jpg?size=338&ext=jpg&ga=GA1.2.1986657151.159972979',
      nama: 'categories 3'
    },
    {
      photo: 'https://image.freepik.com/free-psd/neon-night-party-flyer_69506-2312.jpg',
      nama: 'categories 4'
    },
    {
      photo: 'https://img.freepik.com/free-psd/club-dj-party-flyer-social-media-post-banner_197952-12.jpg?size=338&ext=jpg&ga=GA1.2.1986657151.1599729797',
      nama: 'categories 5'
    },
    {
      photo: 'https://image.freepik.com/free-psd/saturday-night-party-flyer_69506-2955.jpg',
      nama: 'categories 6'
    },
    
  ]

    return (
    <>
       <Card className="bg-img mt-5 d-flex align-items-center">
          <Card.Img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60.jpg"  alt="bigImage" width='100%'/>
            <Card.ImgOverlay>
                <Card className="cardBody shadow p-3 bg-whitesmoke rounded ">
                    <Row>
                      <Col lg={6} ><img src="https://images.unsplash.com/photo-1546430778-5ce190a3acbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60.jpg" alt="card" className="cardImage" /></Col>
                        <Col className="d-flex m-3 p-5 align-items-center">
                            <Row>
                            <h3 style={styles.h3styles}>What you looking for?</h3>
                            <p style={styles.pstyles}>Yuk, cobain serunya nonton bioskop dari mobil! Hereditary, Cek Toko Sebelah, The Gentlemen, Milly & Mamet, dan film seru lainnya.
                            Beruntung sekali, pada kesempatan ini kita akan belajar cara membuat Carousel pada React. Di sini kita akan memanfaatkan library yang sudah ada, yaitu React-Slick.
                              Library tersebut merupakan modifikasi dari Slick Carousel yang telah diubah menjadi komponen React sehingga kita tidak perlu menginstall JQuery lagi.</p>
                                  <Button variant="danger" size="lg">Click me       </Button>
                            </Row>                         
                        </Col>
                    </Row>                                               
                </Card>  
            </Card.ImgOverlay>                      
       </Card>    
      <div className="Categories mt-5 mb-10">
            <Container>
                <h4 className="d-flex mt-5 mb-5 justify-content-center">Categories</h4>
                <Row >                    
                      {
                        Categories.map((data) =>(
                        <Col lg={4} className="shadow p-3">                        
                          <img src={data.photo} width='100%' height='250px' /> 
                          <Row className='d-flex justify-content-center'>
                          <h5>{data.nama}</h5>
                          </Row>
                          
                        </Col>                       
                        ))
                      }                                                 
                </Row>
            </Container>
      </div>
      <div className="buatEvent  mt-5 p-5 ">
                <div className=" full-width p-3 mb-5  align-items-center">
                      <Row className="buatEvent rounded align-items-center justify-content-center">
                        <Col lg={4}><img src="https://image.freepik.com/free-vector/broadcasting-live-event_23-2148529703.jpg" alt="card" className="buatEvent" /></Col>
                            <Col lg={6} class="contentNormal m-3 p-5 align-items-center">
                                    <h3>Buat Event Kamu</h3>
                                    <p>Mulai dari acara musik, diskusi,
                                       workshop hingga online webinar LOKET sekarang
                                       hadir dengan fitur LOKET LIVE untuk event creator 
                                       yang membutuhkan layanan streaming langsung</p>
                                  <Button variant="danger" size="sm">Buat event &gt;</Button>
                            </Col>
                      </Row>
                </div>
      </div>
      <Container>
        <div class='container-fluid mt-5' >  
              <div className="row title" style={{ marginBottom: "20px" }} >  
                  <div class="col-sm-12 btn btn-danger">  
                         Top Selling 
                  </div> 
              </div>  
        </div>
        <div className='container-fluid' >  
              <Carousel>
                  {
                    TopSelling.map((data) => (
                       <Carousel.Item>
                          <img className="d-block w-100"
                          src={data.gambar}
                           alt="First slide"/>
                              <Carousel.Caption>
                                 <h3>{data.nama}</h3>
                                  <Button variant="danger" size="sm">Buat event &gt;</Button>
                              </Carousel.Caption>
                       </Carousel.Item>
                       ))
                  }
              </Carousel>                                                               
        </div> 
      </Container>
            
        

        
        


  </>
  );

}
export default Dashboard;
