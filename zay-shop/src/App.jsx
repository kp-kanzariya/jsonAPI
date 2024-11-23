import "../node_modules/bootstrap/dist/css/bootstrap.css";

// import LoginSignup from "./Userlog";
import About from "./About";
import AdminAdd from "./AdminAdd";
import ProductForm from "./AdminEdits";
import AdminSide from "./AdminSide";
import Footer from "./Componets/Footer";
import Header from "./Componets/Header";
import HeroSection from "./Componets/HeroSection";
import Contact from "./Contact";
import ProductPage from "./ProductPage";
import Shop from "./Shop";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Cart from "./AddCart";
import UserProfile from "./UserProfile";
import AddUserForm from "./AddUser";
import Login, { Signup } from "./Userlog";
import CheckoutForm, { ConfirmOrderPage, PaymentPage } from "./PaymentPage";
import { createContext, useState } from "react";

// import FindUserById from "../SearchId";
export const userID = createContext();

function App() {
  const [sharedID, setSharedID] = useState({ id: "user123" });
  console.log(sharedID.id);

  return (
    <>
      <userID.Provider value={{ sharedID, setSharedID }}>
        {/* <AddUserForm /> */}
        <BrowserRouter>
          {/* <FindUserById/> */}
          <Header />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/userlog" element={<Login />} />
            <Route path="/usersign" element={<Signup />} />
            <Route path="/cart/:cId" element={<Cart />} />

            <Route path="/userprofile/:cId" element={<UserProfile />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:pId" element={<ProductPage />} />
            <Route path="/payform" element={<CheckoutForm />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/confirm" element={<ConfirmOrderPage />} />
            <Route path="/admin" element={<AdminSide />} />
            <Route path="/edit/:id" element={<ProductForm />} />
            <Route path="/add" element={<AdminAdd />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </userID.Provider>
    </>
  );
}

export default App;
