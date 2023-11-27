import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./routes/Home/home";
import About from "./routes/About/about";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        {/* Shows the Header on Every page*/}
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
