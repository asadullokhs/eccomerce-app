import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import OrderList from "./Pages/Order-List/OrderList";
import SignUp from "./Pages/SignUp/SignUp";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/product/:id" element={<SingleProduct />}></Route>
          <Route path="/order-list" element={<OrderList />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/log-in" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
