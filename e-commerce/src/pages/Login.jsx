import { useState } from "react"
import styled from "styled-components"
import { mobile } from "../responsive"
import {useDispatch} from "react-redux"
import { login } from "../redux/apiCalls"
import {useSelector} from "react-redux"
import {Link} from"react-router-dom";
const Container = styled.div`
height: 100vh;
width:100vw;
background :  linear-gradient(
              rgba(255,255,255,0.3),
             rgba(255,255,255,0.3)
              ),
              url("https://media.istockphoto.com/photos/online-shopping-and-payment-man-using-tablet-with-shopping-cart-icon-picture-id1206800961?k=20&m=1206800961&s=612x612&w=0&h=hcPoUKhWtzHXR3PIAHVgPVZDZaO7R8yZ1wNPkUSsgwU=") center;
display:flex;
background-size:cover;

align-items:center;
justify-content:center;
              `

const Wrapper = styled.div`
padding: 20px;
width:25%;
// background-color:white;
${mobile({ width : "75%"})}
`

const Title = styled.h1`
font-size:30px;
font-weight: 500;
`

const Form = styled.form`
display:flex;
flex-direction: column;
`

const Input = styled.input`
flex:1;
min-width:40%;
margin: 10px 0px;
padding:10px;
background-color: black;
color:white;
border: 1px solid white;
opacity:0.6;
`

const Button = styled.button`
width: 40%;
padding: 15px 20px;
background-color: black;
color:white;
border: 1px solid white;
opacity:0.8;
cursor:pointer;
margin: 10px 0px;
&:disabled{
  cursor:none;
  color:lightgrey;
}
`
const Linkk = styled.a`
margin : 5px 0px;
font-size: 14px;
text-decoration: none;
cursor: pointer;
`
const Error = styled.span`
color:red;
`
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("") ;
  const dispatch =useDispatch();
  const {isFetching,error}  = useSelector((state) => state.user)

const handleClick = (e) => {
  e.preventDefault();
 login(dispatch,{username,password});
}
  return (
    <Container>
    <Wrapper>
      <Title>SIGN IN</Title>
      <Form>
        <Input placeholder="Username" onChange={(e) => setusername(e.target.value)} />
        <Input placeholder="Password" type="password"  onChange={(e) => setpassword(e.target.value)}/>
        {/* <Button onClick={handleClick} disabled={isFetching}>Login</Button> */}
        <Button onClick={handleClick} >Login</Button>

        { error && <Error>Something went wrong...</Error> }
        <Linkk>Do you forgot your password?</Linkk>
        <Link to="/register"><Button>Create a new account</Button></Link>
        </Form>
    </Wrapper>
 </Container>
  )
  
}

export default Login