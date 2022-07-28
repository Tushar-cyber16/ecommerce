import { Facebook,Instagram,Twitter,Pinterest,Room,Phone,MailOutlined } from "@material-ui/icons";
import styled from 'styled-components'
import { mobile } from "../responsive";

const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column"})}
`
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1``
const Desc =styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon= styled.div`
height: 50px;
width: 50px;
border-radius:50%;
background-color: #${props => props.bg};
display: flex;
justify-content:center;
align-items: center;
margin-right: 20px;
cursor: pointer;
`
const Center = styled.div`
flex:1;
padding: 20px;
${mobile({ display : "none"})}
`
const Title = styled.h1`
margin-bottom: 20px;
`
const List = styled.ul`
margin: 0px;
padding: 0px;
list-style: none;
display:flex;
flex-wrap: wrap;
`

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right = styled.div`
flex:1;
padding: 20px;
${mobile({ backgroundColor : "#fff8f8"})}
`
const ContactItem= styled.div`
margin-bottom: 20px;
display:flex;
align-items: center;
`
const Payment = styled.img`
width:50%;
cursor: pointer;
`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Tushar.</Logo>
        <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sed tenetur rerum illum accusantium pariatur at delectus excepturi libero obcaecati!</Desc>
        <SocialContainer>
            <SocialIcon bg="3B5999">  <Facebook/> </SocialIcon>
            <SocialIcon bg="E4405F"> <Instagram/> </SocialIcon>
            <SocialIcon bg="55ACEE">  <Twitter/> </SocialIcon>
            <SocialIcon bg ="E60023"> <Pinterest/></SocialIcon>
        </SocialContainer>
      </Left>
      <Center>

         <Title>USEFUL LINKS</Title>
         <List>
            <ListItem>HOME</ListItem>
            <ListItem>CART</ListItem>
            <ListItem>MAN FASHION</ListItem>
            <ListItem>WOMAN FASHION</ListItem>
            <ListItem>ACCESSORIES</ListItem>
            <ListItem>MY ACCOUNT</ListItem>
            <ListItem>ORDER TRACKING</ListItem>
            <ListItem>WISHLIST</ListItem>
            <ListItem>TERMS</ListItem>
         </List>
      </Center>
      <Right>
        <Title>CONTACT</Title>
        <ContactItem><Room style={{marginRight:"10px"}}/> address address  sdd  swdd </ContactItem>
        <ContactItem> <Phone style={{marginRight:"10px"}}/> +91 7464849333 </ContactItem>
        <ContactItem> <MailOutlined style={{marginRight:"10px"}}/> contact@email.com </ContactItem>

        <Payment src="https://content.asos-media.com/-/media/customer-care/images/imported/us/uspaymentmethodsklarna.ash?la=en-us&h=418&w=1385&hash=A8DC189DE960960509E521CB0405352C"/>
      </Right>
    </Container>
  )
}

export default Footer