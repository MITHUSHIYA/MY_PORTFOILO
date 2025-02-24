import { Routes, Route, BrowserRouter } from "react-router-dom";
import './index.css'

import Navbar from "./Components/Navbar";
import Home from "./Containers/Home";
import About from "./Containers/About";
import Skills from "./Containers/Skills";
import Contact from "./Containers/Contact";

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
