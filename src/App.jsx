import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Asidebar from "./Component/Asidebar";
import Home from "./Page/Home";
import Finance from "./Page/Finance";
import News from "./Page/News";
import Trading from "./Page/Trading";
import Space from "./Page/Space";
import Signin from "./Page/Signin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Asidebar />}>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/trades" element={<Trading />} />
            <Route path="/space" element={<Space />} />
            <Route path="/signin" element={<Signin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
