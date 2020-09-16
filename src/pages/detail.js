import React from 'react';
import {
   Link
  } from "react-router-dom";
import styled from 'styled-components';
import { Button, Container, Row, Col } from 'react-bootstrap'

import './detail.css'





const Detail = () => {
  const eventObject = [
    {
      image : "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      date: "Sept, 24",
      dateAndTime: "Thu, Sep 24, 2020, 11.00PM",
      titleOb : 'Coffee and Talk',
      by: 'Indonesian coffee team',
      price: 'Rp. 150.000',
      premis: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      // bcr : "d-flex mt-5",
      descrr : `The Black Is Tech Conference 2020 Is going Virtual!!! And its FREE for everyone!!! Yes you heard it right.

      Due to COVID19, we were forced to cancel the live Black Is Tech Conference 2020 originally scheduled for April 17-18, 2020 in NYC. However, we knew we couldn't let the year run by without bringing something for our amazing audience of Black, Latin X and other minority tech professionals. That's why we decided to take the Conference online and even better, it's FREE for everyone.
      
      The Black Is Tech Virtual Conference will be held on Sept. 24- 25, 2020 and will attract over 6000 black and minority tech professionals and entrepreneurs streaming our sessions, networking with one another, and connecting with recruiters, all from the comfort of their homes.
      
      The 2-day event will include:
      
      - Keynotes, Fireside Chats and Panels from well renowned leaders in tech.
      
      - Workshop sessions
      
      - Recruiting Sessions
      
      - Virtual Booths
      
      - Networking
      
      - Loads and loads of learning, information and connections.
      
      This Event is FREE for all general admission tickets.
      
      *VIP passes are available for attendees looking to rewatch recordings after the Conference, and the opportunity to have 1-on-1 video calls with some of our speakers.
      
      The event will be streamed online and all other event related activities will be virtual.
      
      Streaming and all other conference related information will be shared with all registered attendees in the weeks leading to the Conference.
      
      We have only 6500 tickets available. And they will sell fast. Get yours today.`
    },
  ];

 

  return(
    <>
    <style>
      {`
        .myEvents {
          background: whitesmoke;
        },
        .secondLine {
          margin-top: 10px;
          width: 30%;
        }
      `}
    </style>
        {
            eventObject.map((data) => (
                <Container >
                    <div className="myEvents d-flex mt-5">
                      <Row>
                          <Col sm={8}>
                            <img
                            width="100%"
                            className={data.titleOb}
                            src={data.image}
                            alt="Generic placeholder"/>
                          </Col>
                          <Col sm={4}>
                                <div className="m-5">
                                  <h6>{data.date}</h6>
                                  <h5>{data.titleOb}</h5>
                                  <h6>By: {data.by}</h6>
                                  <p>{data.price}</p>                                                      
                              </div>
                          </Col>                  
                      </Row>     
                    </div>
                    <Row>
                      <Col sm={8}></Col>
                      <Col sm={4}>
                          <div className='secondLine d-flex justify-content-center mt-3 mb-3'>
                              <Button size="sm" variant="danger" block>Tickets</Button>
                          </div>
                      </Col>
                    </Row>                     
                    <div className="thirdLine">
                    <Row className="detailtikets m-5">
                      <Col  sm={8} >
                          <h5>{data.premis}</h5>
                          <h4>About This Event</h4>About This Event
                          <p>{data.descrr}</p>
                      </Col>
                      <Col sm={4}>sm=4</Col>
                    </Row>                      
                    </div>
                </Container>
                )
            )
        }
    </>
  );
}

export default Detail;