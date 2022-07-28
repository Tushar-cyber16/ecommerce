import styled from "styled-components"
import { ArrowLeftOutlined,ArrowRightOutlined} from "@material-ui/icons";
import { useState } from "react";
import {sliderItems} from "../data";
import {mobile} from "../responsive"
const Container= styled.div`

  width: 100%;
  height: 100vh;
  display : flex;
//   background-color:coral;
  position:relative;
  overflow: hidden;
  ${mobile({ display : "none"})}
`;
const Arrow= styled.div`
      width:50px;
      height:50px;
      background-color: white;
      display:flex;
      align-items: center;
      justify-content: center;
      position:absolute;
      top:0;
      bottom:0;
      left:${props => props.direction === "left" && "10px"} ;
      right:${props => props.direction === "right" && "10px"} ;
      margin:auto;
      cursor: pointer;
      opacity : 0.5;
      z-index:2; 
`;

const Wrapper = styled.div`
  height: 100%;
  display : flex;
  transition: all 1.5s ease;
  transform : translateX( ${props => props.slideindex * -100}vw);
`
const Slide = styled.div`
display:flex;
align-items: center;
width: 100vw;
height: 100vh;
background-color : #${props => props.bg};
`
const ImgContainer = styled.div`
height : 100%;
flex:1;
display:flex;
align-items: center;
justify-content:center;
background-color : #${props => props.bg};
opacity:0.8;
`

const Image = styled.img`
height:80%;
z-index:-1;
`
const InfoContainer = styled.div`
flex:1;
padding: 50px;
`
const Title = styled.h1`
font-size: 70px;
`
const Description = styled.p`
margin : 50px 0px ;
font-size : 20px;
font-weight : 500;
letter-spacing : 3px;
`
const Button = styled.button`
padding: 10px ;
font-size:20px;
background-color: transparent;
cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setslideIndex] =useState(0);
    const handleClick = (direction) => {
          
        if(direction==="left")
        setslideIndex(slideIndex>0? slideIndex-1: 2);
        else
        setslideIndex(slideIndex<2? slideIndex+1: 0);
    }
  return (
    <Container>

        <Arrow direction="left" onClick={()=> handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideindex={slideIndex}>
            {sliderItems.map(item => (
                
                <Slide bg={item.bg} key={item.id}>
            <ImgContainer bg={item.bg}>
            <Image src= {item.img}/>
            </ImgContainer>
            <InfoContainer>
              
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>Show Now</Button>
            </InfoContainer>
           </Slide>
               ))}
            </Wrapper>
           
        <Arrow direction="right" onClick={()=> handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider