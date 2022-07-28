
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import {popularProducts} from "../data";
import Product from './Product';
import axios from "axios";
const Container = styled.div`
display:flex;
padding:20px;
flex-wrap: wrap;
justify-content: space-between;
`
const Products = ({cat,filters,sort}) => {
  
  const [products, setproducts] = useState([]);
  const [filteredproducts, setfilteredproducts] = useState([]);

  useEffect( () => {
   const getProducts = async () => {
    try{
    const res = await axios.get( cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products");
    setproducts(res.data);
    }catch(err){}
   };
   getProducts();
  },[cat]);

  useEffect( () => {
     { cat && setfilteredproducts(
        products.filter( (item) =>
        Object.entries(filters).every( ([key,value]) =>
        item[key].includes(value)
        )
        )
      )}
  },[products,cat,filters]);
 
  useEffect ( () => {
    const change = () => {
     if(sort==="newest")
     { 
      setfilteredproducts((prev) =>
        [...prev].sort((a,b) => a.createdAt - b.createdAt)
      );
     } else if(sort==="asc")
     { 
      setfilteredproducts((prev) =>
        [...prev].sort((a,b) => a.price - b.price)
      );
     } else 
     { 
      setfilteredproducts((prev) =>
        [...prev].sort((a,b) => b.price - a.price)
      );
     }
    }
    change();
  },[sort]);

  return (
    
      <Container>
          { cat ? filteredproducts.map(item => (
            <Product item={item} key={item._id} />
          )) :
          products.slice(0,8).map(item => (
            <Product item={item} key={item._id} />
          ))
          }
      </Container>
  )
}

export default Products