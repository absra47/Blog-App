import { Route, Routes } from "react-router-dom";
import Footer from "./componets/Footer";
import Navbar from "./componets/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
