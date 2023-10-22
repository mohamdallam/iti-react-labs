import "./App.css";

import Header from "./Component/Header";
import Home from "./Component/Home";
import Shopdetails from "./Component/Shopdetails";
import Counter from "./Component/Counter";
import Shop from "./Component/Shop";

import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Container>
      <Router>
        <Header />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/counter" element={<Counter />} />
        

          <Route path="/shop/:id" element={<Shopdetails />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
