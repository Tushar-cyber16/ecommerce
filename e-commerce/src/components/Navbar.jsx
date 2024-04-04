import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {logOut} from "../redux/userRedux";
import {useDispatch} from "react-redux"
const Container = styled.div`
  height: 60px;
  ${mobile({ height : "50px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding : "10px 0px"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display : "none"})}
`;
const SearchContainer = styled.div`
  border: 1px solid grey;
  display: flex;
  align-items: center;
  margin-left : 25px;
  padding: 5px;
`;
const Input = styled.input`
    border:none;
    ${mobile({ width : "50px"})}
`;


const Center = styled.div`
  flex: 1;
  text-align:center;
`;
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize : "24px"})}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent : "center", flex:"1.5"})}
`;
const MenuItem = styled.button`
   font-size:14px;
   cursor: pointer;
   margin-left:10px;
   border:none;
   ${mobile({ fontSize : "12px", marginLeft : "6px"})}
`;
const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity);
  
  
  const navigate = useNavigate();
  const dispatch =useDispatch();
 const handleLogout = () => {
    dispatch(logOut());
   navigate("/login");
 }
 const admin = useSelector(state => state.user.currentUser.isAdmin);
// const admin =null;
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
 const addProduct = () => 
 {
  if(admin)
  {
   navigate("/addproduct")
  }
  else
  {
    alert("Not Authorized");
  }
 }
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            EN
            </Language>
            <SearchContainer>
              <Input placeholder="Search"/>
              <Search style= {{color:"gray", fontSize:16}}/>
            </SearchContainer>
        </Left>
       
        <Center><Logo>Tushar</Logo></Center>

        <Right>
        {!user?
        <div>
        <MenuItem onClick={()=> navigate("/register")}>REGISTER</MenuItem>
        <MenuItem onClick={()=> navigate("/login")}>LOGIN</MenuItem> </div>:
        <div>
        <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
        <MenuItem onClick={addProduct}>Add Product</MenuItem>
        </div>
  }
        <Link to="/cart">
          <MenuItem>
          <Badge badgeContent={quantity} color="success">
        <ShoppingCartOutlined/>
      </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
