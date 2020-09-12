import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useDropzone} from 'react-dropzone';

import {CreateButton} from '../components/Button'
import {
    Container, 
    CardCreate, 
    ImagePoster, 
    InputNameEvent, 
    InputCompany, 
    InputKategori, 
    InputPeserta,
    OptionKategoriSelected, 
    TeksDesc, 
    ThumbsContainer, Img
} from '../components/CeComponent'

const CreateEvents = () => {
    const [poster, setPoster] = useState([]);
    const [eventName, setEName] = useState();
    const [kategori, setKategori] = useState();
    const [peserta, setPeserta] = useState();
    const [company, setCompany] = useState();
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
            "description": description
        }
        console.log(detail);
    }
    console.log(submitValue());
    
    //Preview Image 
    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
        setPoster(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
        }
    });
        
    const thumbs = poster.map(file => (
        <Img src={file.preview} />
    ));
      
    useEffect(() => () => {
        poster.forEach(file => URL.revokeObjectURL(file.preview));
    }, [poster]);
      
    return (
        <Container>
            <CardCreate>
                <ImagePoster>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>Tambahkan Poster<br/>Drop Atau Klik Untuk menambahkan Poster</p>
                        <ThumbsContainer>
                            {thumbs}
                        </ThumbsContainer>
                    </div>
                </ImagePoster><br/>
                
                <InputNameEvent onChange={e => setEName(e.target.value)}/><br/>
                
                <InputKategori onChange={e => setKategori(e.target.value)}>
                    <OptionKategoriSelected>Kategori</OptionKategoriSelected>
                    <option value="edukasi">Edukasi</option>
                    <option value="otomotif">Otomotif</option>
                    <option value="teknologi">Teknologi</option>
                </InputKategori><br/>
                
                <InputPeserta onChange={e => setPeserta(e.target.value)}/><br/>
                
                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    showTimeInput
                    height='50px'
                /><br/>
                
                <InputCompany onChange={e => setCompany(e.target.value)}/><br/>

                <TeksDesc onChange={e => setDescription(e.target.value)} /><br/>
            
            </CardCreate>
            <br/><br/>
            <CreateButton type="submit" value="Submit">Buat Event</CreateButton>
        </Container>
    );
};

export default CreateEvents;