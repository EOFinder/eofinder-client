import styled from 'styled-components';

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