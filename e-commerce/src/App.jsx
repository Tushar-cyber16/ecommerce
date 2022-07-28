import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from "./pages/Success";
import AddProduct from "./pages/AddProduct"
import {useSelector} from "react-redux"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
const App = () => {
  const user = useSelector((state) => state.user.currentUser);
 
  return (
    <Router>
      <Routes>
        <Route exact path="/" element= {<Home/>}/>
        <Route exact path="/products/:category" element= {<ProductList/>}/>
        <Route exact path="/product/:id" element= {<Product/>}/>

        <Route exact path="/login" 
        element= {user ? <Navigate to="/" />:<Login/>}
        />

        <Route exact path="/register" 
         element= {user ? <Navigate to="/" />:<Register/>}
        />
        <Route exact path="/cart" element= {<Cart/>}/>
        <Route exact path="/success" element= {<Success/>}/>
        <Route exact path="/addproduct" element= {<AddProduct/>}/>
      </Routes>
    </Router>
  );
};

export default App;