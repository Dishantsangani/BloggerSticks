import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../Page/Home";
import News from "../Page/News";
import Finance from "../Page/Finance";
import Trading from "../Page/Trading";
import Space from "../Page/Space";
import Asidebar from "../Component/Asidebar";
import Footer from "../Component/Footer";
import { Toaster } from "react-hot-toast";
import Payment from "../Page/Payment";
function ProtectedRoute() {
  const is_Logged = localStorage.getItem("Token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!is_Logged) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Asidebar />
      <Toaster />
      {is_Logged && (
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/trades" element={<Trading />} />
          <Route path="/space" element={<Space />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      )}
      <Footer />
    </>
  );
}

export default ProtectedRoute;
