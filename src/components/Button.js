import styled, { css } from 'styled-components';

export const Button = styled.button`
  background: ${props => props.primary ? "#3C6E71" : "#F6FFF8"};
  color: ${props => props.primary ? "#F6FFF8" : "#3C6E71"};

  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #3C6E71;
  border-radius: 5px;
`;

export const SocialButton = styled.button`
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;

export const FacebookButton = styled(SocialButton)`
  color: #1877f2;
  border-color: #1877f2;
`;

export const GoogleButton = styled(SocialButton)`
  color: tomato;
  border-color: tomato;
`;

export const CreateButton = styled.button`
	box-shadow:inset 0px 1px 0px 0px #91b8b3;
	background:linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
	background-color:#768d87;
	border-radius:3px;
	border:1px solid #000000;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:28px;
	font-weight:bold;
	padding:14px 76px;
	text-decoration:none;
    text-shadow:0px 0px 8px #3c6e71;
    width:100%;
  &:hover {
	background:linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
	background-color:#6c7c7c;
}
  &:active {
	position:relative;
	top:1px;
}
`
export const ButtonLogin = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid white;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  &:hover {
	  background-color: #9B9B9B;
  }
  &:active {
	border: none;
	border-radius: none;
  }
  ${props => props.primary && css`
	background-color: white;
	color: #3C6E71;
  `}
`;