import React from 'react'
import { useState } from "react";
import {userRequest} from "../requestMethod"
import "./AddProduct.css";
const AddProduct = () => {
    const [inputs, setInputs] = useState({});
    const [cat, setCat] = useState([]);
    const handleChange = (e) => {
        setInputs((prev) => {
          return { ...prev, [e.target.name]: e.target.value };
        });
      };
      const {title,desc,img,price,inStock} = inputs;

      const handleCat = (e) => {
        setCat(e.target.value.split(","));
      };

      const handleClick = async () => {
        try{
        const res = await userRequest.post("/products",{
            title : title,
            desc: desc,
            categories:cat,
            img: img,
            price: price,
            inStock : inStock
        });
        console.log(res);
    }catch(err){console.log(err);}
      }

      
    return (
        <div className="newProduct">
          <h1 className="addProductTitle">New Product</h1>
          <form className="addProductForm">
            <div className="addProductItem">
              <label>Image: enter link</label>
              <input
                name="img"
                type="text"
                placeholder="Apple Airpods"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Title</label>
              <input
                name="title"
                type="text"
                placeholder="Apple Airpods"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Description</label>
              <input
                name="desc"
                type="text"
                placeholder="description..."
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Price</label>
              <input
                name="price"
                type="number"
                placeholder="100"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Categories</label>
              <input type="text" placeholder="jeans,skirts" onChange={handleCat} />
            </div>
            <div className="addProductItem">
              <label>Stock</label>
              <select name="inStock" onChange={handleChange}>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <button onClick={handleClick} className="addProductButton">
              Create
            </button>
          </form>
        </div>
    );
}
export default AddProduct;