import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../Page/Home";
import News from "../Page/News";
import Finance from "../Page/Finance";
import Trading from "../Page/Trading";
import Space from "../Page/Space";
import Asidebar from "../Component/Asidebar";
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
      {is_Logged && (
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/trades" element={<Trading />} />
          <Route path="/space" element={<Space />} />
        </Routes>
      )}
    </>
  );
}

export default ProtectedRoute;
