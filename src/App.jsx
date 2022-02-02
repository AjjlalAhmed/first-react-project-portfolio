// Importing thing we need
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Message from "./views/Message";
import { Helmet } from "react-helmet";

// Main function
function App() {
  // Returning jsx
  return (
    <BrowserRouter>
      <Navbar />

      <Helmet>
        <meta
          property="og:title"
          content="Ajjlal Ahmed | Full Stack Web Developer"
        />
        <meta
          name="description"
          content="Ajjlal Ahmed FullStack Developer"
        ></meta>
        <meta
          name="keyword"
          content="portfolio, javascript, developer, fullstack , ajjlal, ahmed, ajjlalahmed"
        ></meta>
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/message" element={<Message />}></Route>
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}
// Exporting function
export default App;
