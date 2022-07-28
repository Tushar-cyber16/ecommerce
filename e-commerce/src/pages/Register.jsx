import styled from "styled-components"
import { mobile } from "../responsive"
import {publicRequest} from "../requestMethod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
height: 100vh;
width:100vw;
background :  linear-gradient(
              rgba(255,255,255,0.3),
             rgba(255,255,255,0.3)
              ),
              url("https://img.freepik.com/free-photo/online-shopping-icon-smart-phone-global-concept_117856-2469.jpg?w=2000") center;
display:flex;
background-size:cover;
align-items:center;
justify-content:center;
              `

const Wrapper = styled.div`
padding: 20px;
width:40%;
// background-color:white;
${mobile({ width : "75%"})}
`

const Title = styled.h1`
font-size:30px;
font-weight: 500;
// color:white;
`

const Form = styled.form`
display:flex;
flex-wrap: wrap;
`

const Input = styled.input`
flex:1;
min-width:40%;
margin: 10px 15px 0px 0px;
padding:10px;
background-color: black;
color:white;
border: 1px solid white;
opacity:0.6;
`

const Agreement = styled.span`
font-weight:400;
font-size:12px;
margin : 15px 0px;
`

const Button = styled.button`
width: 35%;
padding: 15px 20px;
background-color: black;
color:white;
border: 1px solid white;
opacity:0.8;
cursor:pointer;
`

const Register = () => {
  const [credentials, setcredentials] = useState({username:"" ,email:"",password:""});
const navigate=useNavigate();

  const onChange=  (e)=> {
    setcredentials({...credentials,[e.target.name]:e.target.value});
 }

 const createUser = async () =>{
  try{
  const res =await publicRequest.post("/auth/register",credentials);
  console.log(res);
  }catch(err){}
 }
  return (

   <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form>
          <Input placeholder="First Name"   />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" name="username" onChange={onChange}/>
          <Input placeholder="Email" name = "email" onChange={onChange}/>
          <Input placeholder="Password" name="password" onChange={onChange}/>
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating a new account, I consent to the processing of my personal data in accordance with the <b>Privacy Policy</b>
          </Agreement>
          <Button onClick={createUser}>Create</Button>
          </Form>
      </Wrapper>
   </Container>
  )
}

export default Register