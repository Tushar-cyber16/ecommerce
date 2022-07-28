import styled from 'styled-components'
import { FavoriteBorder,Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from 'react-router-dom';
const Info=styled.div`
width:100%;
height:100%;
opacity:0;
position:absolute;
top:0px;
left:0px;
background-color:rgba(0,0,0,0.4);
z-index:3;
display: flex;
justify-content:center;
align-items:center;
transition: all 0.5s ease;
`
const Container = styled.div`
flex:0 0 20%;
margin:10px;
min-width:276px;
height: 350px;
display:flex;
justify-content:center;
align-items:center;
background-color: #f5fbfd;
position:relative;

&:hover ${Info}{
    opacity:1;
}
`
const Circle=styled.div`
hieght: 250px;
width: 300px;
border-radius:50%;
background-color: white;
// position: absolute;
`
const Image=styled.img`
height: 100%;
width:100%;
z-index:2;
`

const Icon= styled.div`
width: 40px;
height: 40px;
cursor:pointer;
border-radius:50%;
background-color: white;
display: flex;
justify-content:center;
align-items:center;
margin:10px;

&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
    transition: all 0.5s ease;
}

`
const Product = ({item}) => {
    return (
    
        <Container>
          <Circle>
          <Image src={item.img}/>
          <Info>
            <Icon>  <ShoppingCartOutlined/>  </Icon>
            <Icon>  
              <Link to = {`/product/${item._id}`}>
              <Search/>  
              </Link>
              </Icon>
            <Icon>  <FavoriteBorder/></Icon>
          </Info>
          </Circle>
        </Container>
    )
}

export default Product