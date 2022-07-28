import styled from 'styled-components'
import {Send } from "@material-ui/icons";
import { mobile } from '../responsive';
const Container= styled.div`
height: 60vh;
display:flex;
align-items: center;
justify-content: center;
background-color : #fcf5f5;
flex-direction: column;
`
const Title= styled.h1`
font-size:70px;
margin-bottom:20px;
${mobile({ fontSize : "40px"})}
`
const Desc= styled.div`
font-size:24px;
font-weight:300;
margin-bottom: 20px;
${mobile({ textAlign : "center",fontSize : "15px"})}
`
const InputContainer= styled.div`
width:30%;
height: 40px;
background-color: white;
display:flex;
justify-content: space-between;
${mobile({ width : "70%"})}
`
const Input= styled.input`
border:none;
flex:8;
padding-left :10px;
`
const Button= styled.button`
flex:1;
border : none;
background-color: teal;
color:white;
cursor: pointer;
`
const NewsLetter = () => {
  return (
    <Container>
         <Title>NewsLetter</Title>
         <Desc>Get timely updates from your favorite products.</Desc>
         <InputContainer>
         <Input placeholder="Your e-mail"/>
         <Button>
            <Send/>
         </Button>
         </InputContainer>
        </Container>
  )
}

export default NewsLetter