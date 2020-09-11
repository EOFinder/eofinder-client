import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Container = styled.div`
    margin: 3% 15%;
    `
const CardCreate = styled.div`
    -webkit-box-shadow: inset 0px 0px 2px 1px rgba(0,0,0,0.41);
    -moz-box-shadow: inset 0px 0px 2px 1px rgba(0,0,0,0.41);
    box-shadow: inset 0px 0px 2px 1px rgba(0,0,0,0.41);
    padding: 15px;
    display: flex;
    flex-direction: column;
    position:relative;
    background-color:cadetblue;
`
const ImagePoster = styled.div`
    -webkit-box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.15);
    box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.15);
    display: flex;
    flex-direction: row;
    justify-content: center;
    position:relative;
   
`
const Image = styled.img`
    width:100%;
    max-width:100%;
    max-height:100%;
    vertical-align: middle;
    position:relative;
`
const ChooseFile = styled.input.attrs({ type: 'file' })`
    border: 0;
    clip: rect(0, 0, 0, 0);
    overflow: hidden;
    padding: 0;
    white-space: nowrap;
    width:300px;
`
const DivChooseFile = styled.div`
    position:absolute;
    margin-top:250px;
    display:inline;
`
const Button = styled.button`
	-moz-box-shadow:inset 0px 1px 0px 0px #54a3f7;
	-webkit-box-shadow:inset 0px 1px 0px 0px #54a3f7;
	box-shadow:inset 0px 1px 0px 0px #54a3f7;
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #007dc1), color-stop(1, #0061a7) );
	background:-moz-linear-gradient( center top, #007dc1 5%, #0061a7 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#007dc1', endColorstr='#0061a7');
	background-color:#007dc1;
	-webkit-border-top-left-radius:3px;
	-moz-border-radius-topleft:3px;
	border-top-left-radius:3px;
	-webkit-border-top-right-radius:3px;
	-moz-border-radius-topright:3px;
	border-top-right-radius:3px;
	-webkit-border-bottom-right-radius:3px;
	-moz-border-radius-bottomright:3px;
	border-bottom-right-radius:3px;
	-webkit-border-bottom-left-radius:3px;
	-moz-border-radius-bottomleft:3px;
	border-bottom-left-radius:3px;
text-indent:0;
	border:1px solid #124d77;
	display:inline-block;
	color:#ffffff;
	font-family:arial;
	font-size:15px;
	font-weight:bold;
	font-style:normal;
    height:2%;
	line-height:47px;
    width:100%;
	text-decoration:none;
	text-align:center;
	text-shadow:0px 1px 0px #154682;
  &:hover {
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #0061a7), color-stop(1, #007dc1) );
	background:-moz-linear-gradient( center top, #0061a7 5%, #007dc1 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#0061a7', endColorstr='#007dc1');
	background-color:#0061a7;
  }
  &:active {
	position:relative;
    top:1px;
  }
`

const CreateEvents = () => {
    const [poster, setPoster] = useState();
    const [eventName, setEName] = useState();
    const [kategori, setKategori] = useState();
    const [peserta, setPeserta] = useState();
    const [company, setCompany] = useState();
    const [companyLogo, setCLogo] = useState();
    const [description, setDescription] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const submitValue = () => {
        const detail = {
            "poster": poster,
            "nameEvent": eventName,
            "kategori": kategori,
            "peserta": peserta,
            "date": startDate,
            "company": company,
            "companyLogo": companyLogo,
            "description": description
        }
        console.log(detail);
    }
    console.log(submitValue());

    return (
        <Container>
            <CardCreate>
            <ImagePoster>
                <Image src="https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <DivChooseFile>
                    <ChooseFile onChange={e => setPoster(e.target.value)}/>
                </DivChooseFile>
            </ImagePoster><br/>
            <input type="text" placeholder="Nama Event" onChange={e => setEName(e.target.value)}/><br/>
            <select onChange={e => setKategori(e.target.value)}>
                <option value="" selected>Kategori</option>
                <option value="edukasi">Edukasi</option>
                <option value="otomotif">Otomotif</option>
                <option value="teknologi">Teknologi</option>
            </select><br/>
            <input type="number" placeholder="Batas Jumlah Peserta" onChange={e => setPeserta(e.target.value)}/><br/>
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                timeInputLabel="Time:"
                dateFormat="MM/dd/yyyy h:mm aa"
                showTimeInput
            /><br/>
            <input type="text" placeholder="Diselenggarakan Oleh" onChange={e => setCompany(e.target.value)}/><br/>
            <label>Logo Penyelenggara<br/>
                <input type="file" onChange={e => setCLogo(e.target.value)}/>
            </label><br/>
            <textarea onChange={e => setDescription(e.target.value)} placeholder="Deskripsi" width="100%"/><br/>
            </CardCreate>
            <br/><br/>
            <Button type="submit" value="Submit">Buat Event</Button>
        </Container>
    );
};

export default CreateEvents;