import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Blog from "./pages/Blog";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SingleBlog from "./pages/SingleBlog";
import SingleShop from "./pages/SingleShop";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/shop" element={<Shop />} ></Route>
        <Route path="/blog" element={<Blog />} ></Route>
        <Route path="/single/blog/:id" element={<SingleBlog />} ></Route>
        <Route path="/product/:id" element={<SingleShop />} ></Route>
        <Route path="/checkout" element={<Checkout />} ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
