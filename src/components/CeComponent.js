import styled from 'styled-components';

export const Container = styled.div`
    margin: 3% 15%;
`
export const CardCreate = styled.div`
    -webkit-box-shadow: inset 0px 0px 2px 1px rgba(0,0,0,0.41);
    -moz-box-shadow: inset 0px 0px 2px 1px rgba(0,0,0,0.41);
    box-shadow: inset 0px 0px 2px 1px rgba(0,0,0,0.41);
    padding: 15px;
    display: flex;
    flex-direction: column;
    position:relative;
    background-color:#3C6E71;
    border-radius: 5px;
`
export const ImagePoster = styled.div`
    -webkit-box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.15);
    box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.15);
    text-align: center;
    background-color: white;
`
export const InputNameEvent = styled.input.attrs({type:'text', placeholder:'Nama Event'})`
    height:50px;
`
export const InputKategori = styled.select`
    height:50px;
    apearance:none;
    -webkit-appearance:none;
    -moz-appearance:none;
    background-color: white
`
export const OptionKategoriSelected = styled.option.attrs({value:''})`
    color: gray;
    background-color: white
`
export const InputPeserta = styled.input.attrs({type:'number', min:'0', placeholder:'Batas Peserta'})`
    height:50px;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`
export const InputCompany = styled.input.attrs({type:'text', placeholder:'Diselenggarakan Oleh'})`
    height:50px;
`
export const TeksDesc = styled.textarea.attrs({placeholder:'Deskripsi'})`
    height:200px;
    resize: none;
    &::placeholder {
        display:flex;
        justify-content;
    }
`
export const ThumbsContainer = styled.aside`
    display: flex;
    justify-content:center;
    margin-bottom: 9px;
`
export const Img = styled.img`
    width: 60%;
    height: 70%;
`