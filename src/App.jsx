import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./Page/Signin";
import ProtectedRoute from "./Routes/ProtectedRoute";
// import Layout from "./Routes/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/*" element={<ProtectedRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
