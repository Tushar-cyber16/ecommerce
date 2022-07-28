import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import { Remove,Add } from "@material-ui/icons";
import { mobile } from '../responsive'
import { useLocation} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import {publicRequest} from "../requestMethod"
import {useDispatch} from "react-redux";
import {addProduct} from "../redux/cartRedux"
const Container = styled.div`
margin:20px 0px;
`
const Wrapper = styled.div`
display:flex;
padding: 50px;
${mobile({ padding: "10px" , flexDirection:"column"})}
`
const ImageContainer = styled.div`
flex:1;
`
const Image = styled.img`
width:100%;
height:60vh;
// object-fit:cover;
`
const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
${mobile({ padding : "10px"})}
`

const Title = styled.h1`
font-weight:500;
`
const Desc = styled.p`
margin:20px 0px;
`
const Price = styled.span`
font-weight:100;
font-size:40px;
`
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
margin:20px 0px;
width:50%;
${mobile({ width : "100%"})}
` 

const Filter = styled.div`
display:flex;

align-Items:center;
`

const FilterTitle = styled.span`
font-size:20px;
font-weight:200;
margin-right:10px;
`

const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
margin-right:10px;
background-color:${props=>props.color};
cursor:pointer;
`

const FilterSize = styled.select`
padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
display:flex;
align-items:center;
${mobile({ width : "100%"})}
`

const AmountContainer = styled.div`
margin-top:10px;
display:flex;
justify-content:center;
align-items:center;
`

const Amount = styled.span`
margin-right:5px;
height:30px;
width:30px;
border-radius:15%;
border: 1px solid teal;
display:flex;
align-items: center;
justify-content: center;
`

const Button = styled.button`
margin-left:10px;
cursor:pointer;
padding:15px;
background-color:white;
border:2px solid teal;
font-weight:500;

&:hover{
    background-color: #f8f4f4;
}
`

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setproduct] = useState({});
  const [quantity, setquantity] = useState(1);
  const [color, setcolor] = useState("");
  const [size, setsize] = useState("");
  const dispatch = useDispatch();

  useEffect( () => {
    const getProduct = async () => {
      try{
         const res= await publicRequest.get("/products/find/"+id);
         setproduct(res.data);
      }catch(err){}
    }
    getProduct();
  },[id]);

  const handleClick = () => {
   dispatch( addProduct({...product , quantity,color,size}) );
  }
  return (
    <Container>
      <Announcement/>
      <Navbar/>
     <Wrapper>
        <ImageContainer>
            <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>Rs {product.price}</Price>
            <FilterContainer>
                 <Filter style= {{ backgroundColor:"ivory"}}>

                    <FilterTitle>COLOR</FilterTitle>

                    { product.color?product.color.map( color => (
                      <FilterColor color={color} key={color} onClick={() => setcolor(color)}/>
                    )) : "None" }

                 </Filter>
                 <Filter>
                    <FilterTitle>SIZE</FilterTitle>
                    <FilterSize onChange={(e) => setsize(e.target.value)}>
                    { product.size?product.size.map( size => (
                      <FilterSizeOption key={size} >{size}</FilterSizeOption>
                    )) : "None" }
                    </FilterSize>
                 </Filter>
            </FilterContainer>

            <AddContainer>
                <AmountContainer>
                    <Remove disable={quantity===1} onClick={() => quantity>1 && setquantity(quantity-1)}/>
                    <Amount>{quantity}</Amount>
                    <Add onClick={() => setquantity(quantity+1)}/>
                </AmountContainer>
                <Button onClick={handleClick}>Add To Cart</Button>
            </AddContainer>
        </InfoContainer>
     </Wrapper>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}

export default Product