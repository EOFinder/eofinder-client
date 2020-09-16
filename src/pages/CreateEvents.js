import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDropzone } from "react-dropzone";
import ReactFilestack from "filestack-react";
import axios from 'axios';

import { CreateButton } from "../components/Button";
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
  ThumbsContainer,
  Img,
} from "../components/CeComponent";

const CreateEvents = () => {
  const [poster, setPoster] = useState();
  const [eventName, setEName] = useState();
  const [kategori, setKategori] = useState();
  const [peserta, setPeserta] = useState();
  const [description, setDescription] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const submitValue = () => {
    const detail = {
      title: eventName,
      description: description,
      categories: kategori,
      seats: peserta,
      image: poster,
      date: startDate,
    };
    // post method ke backend isinya data si event yang kita mau upload
    axios.post('http://localhost:4444/api/events/create', detail)
         .then(res => console.log(res))
         .catch(error => console.log(error))

    console.log(detail);
  };

  return (
    <Container>
      <CardCreate>
        <ReactFilestack
          apikey={"AugqfuGzTQouENQs5OOe2z"}
          onSuccess={(res) => setPoster(res.filesUploaded[0].url)}
        />

        <InputNameEvent onChange={(e) => setEName(e.target.value)} />
        <br />

        <InputKategori onChange={(e) => setKategori(e.target.value)}>
          <OptionKategoriSelected>Kategori</OptionKategoriSelected>
          <option value="edukasi">Edukasi</option>
          <option value="otomotif">Otomotif</option>
          <option value="teknologi">Teknologi</option>
        </InputKategori>
        <br />

        <InputPeserta onChange={(e) => setPeserta(e.target.value)} />
        <br />

        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          timeInputLabel="Time:"
          dateFormat="MM/dd/yyyy h:mm aa"
          showTimeInput
          height="50px"
        />
        <br />

        <TeksDesc onChange={(e) => setDescription(e.target.value)} />
        <br />
      </CardCreate>
      <br />
      <br />
      <CreateButton type="submit" value="Submit" onClick={submitValue}>
        Buat Event
      </CreateButton>
    </Container>
  );
};

export default CreateEvents;
