import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import S404 from "./pages/404";
import Blog from "./pages/Blog";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Shop from "./pages/Shop";
import SingleBlog from "./pages/SingleBlog";
import SingleShop from "./pages/SingleShop";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/register" element={<Register />} ></Route>
        <Route path="/shop" element={<Shop />} ></Route>
        <Route path="/blog" element={<Blog />} ></Route>
        <Route path="/single/blog/:id" element={<SingleBlog />} ></Route>
        <Route path="/product/:slug" element={<SingleShop />} ></Route>
        <Route path="/checkout" element={<Checkout />} ></Route>
        <Route path="/404" element={<S404 />} ></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
