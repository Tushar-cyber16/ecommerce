import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import {useSelector} from "react-redux"
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {userRequest} from "../requestMethod"


const Container = styled.div`
`;

const Wrapper = styled.div`
padding: 20px;
${mobile({ padding : "10px"})}
`;

const Title = styled.h1`
font-weight:300;
text-align : center;
`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;
const TopButton = styled.button`

padding:10px;
font-weight:300;
cursor: pointer;
border: ${props => props.type === "filled" && "none"};
background-color: ${props => props.type === "filled" ? "black":"transparent"};
color : ${props => props.type === "filled" && "white"};
`
const TopTexts = styled.div`
${mobile({ display : "none"})}
`

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 15px;

`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column"})}
`;

const Info = styled.div`
flex:3;
`;

const Product = styled.div`
display:flex;
justify-content: space-between;
${mobile({flexDirection: "column"})}
`
const ProductDetail = styled.div`
flex:1;
display:flex;
`

const Image = styled.img`
width:200px;
`

const Details = styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
height:20px;
width:20px;
border-radius:50%;
background-color: ${props => props.color};
`

const ProductSize = styled.span``


const PriceDetail = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`

const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom: 5px;
`;

const ProductAmount = styled.div`
font-size:24px;
margin:5px;
${mobile({ margin : "5px 15px"})}
`;

const ProductPrice = styled.div`
font-size:25px;
font-weight:300;
${mobile({ marginBottom : "20px"})}
`;

const Hr = styled.hr`
background-color: #eee;
border:none;
height: 1px;
`

const Summary = styled.div`
flex:1;
border: 0.5px solid lightgray;
border-radius : 10px;
padding:20px;
height: 50vh;
`;

const SummaryTitle = styled.h1`
margin-left: 10px;
margin-bottom:10px;
font-weight: 400;
`

const SummaryItem = styled.div`
display:flex;
justify-content: space-between;
margin-left : 10px;
margin-bottom:20px;
font-weight : ${props => props.type==="total" && "400"};
font-size :  ${props => props.type==="total" && "24px"};
`

const SummaryItemText = styled.span`

`

const SummaryItemPrice = styled.span`

`

const Button = styled.button`
margin-left  : 10px;
padding:10px;
width:100%;
background-color: black;
color: white;
`

const Cart = () => {
    const KEY="pk_test_51LOnBPSGHgCfLUn0xIYyUp03HjdLz0kByZ71HtryQw6E1DAvgoFy672wp3wC3u9O6DqeL8Xpx4jLArmSw1ZeDHAE00iEnqnE7z";
    const [stripeToken, setstripeToken] = useState(null);
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();
   const onToken = (token) =>{
    setstripeToken(token);
   };
 useEffect ( () =>{
    const makeRequest = async() => {
        try{
        const res = await userRequest.post("/checkout/payment",{
            tokenId : stripeToken.id,
            amount : cart.total*100,
        });
    
            navigate("/success",{data: res.data});
            }catch(err){}
        
    };
    stripeToken && makeRequest();
 },[stripeToken ,cart.total,navigate]);

  return (
    <Container>
        <Navbar />
        <Announcement/>
          <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>

                <Link to="/"><TopButton>Continue Shopping</TopButton></Link>
                <TopTexts>
                  <TopText>Shopping Bag ({cart.quantity})</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <StripeCheckout
                    name="Tushar SHOP"
                    billingAddress
                    shippingAddress
                    description={`Your total is Rs ${cart.total}`}
                    amount={cart.total*100}
                    token={onToken}
                    stripeKey={KEY}
                    >
                <TopButton type="filled">Checkout Now</TopButton>
                </StripeCheckout>
            </Top>
            <Bottom>
                <Info>
                    {cart.products  && cart.products.map(product =>(
          <Product>
                        <ProductDetail>
                            <Image src={product.img} />
                            <Details>
                                <ProductName><b>Product: </b> {product.title} </ProductName>
                                <ProductId><b>Id: </b> {product._id} </ProductId>
                              <div style={{backgroundColor:"ivory"}} >  <ProductColor color={product.color}/> </div>
                                <ProductSize><b>Size: </b> {product.size} </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount> {product.quantity}</ProductAmount>
                                <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>{product.price*product.quantity}</ProductPrice>
                        </PriceDetail>
                    <Hr/>
                    </Product>
                    ))}
                    
                </Info>
                <Summary>
                    <SummaryTitle> Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText> SubTotal</SummaryItemText>
                        <SummaryItemPrice>Rs {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText> Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice> Rs 100</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText> Shipping Discount</SummaryItemText>
                        <SummaryItemPrice> Rs -49</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem  type="total">
                        <SummaryItemText> Total</SummaryItemText>
                        <SummaryItemPrice> Rs {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <StripeCheckout
                    name="Tushar SHOP"
                    billingAddress
                    shippingAddress
                    description={`Your total is Rs ${cart.total}`}
                    amount={cart.total*100}
                    token={onToken}
                    stripeKey={KEY}
                    >
                    <Button> Checkout Now</Button>
                    </StripeCheckout>
                </Summary>
            </Bottom>
          </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart