// Importing thing we need
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import About from "./views/About";
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
          content="JavaScript wizard, chaotic good"
        ></meta>
        <meta
          name="keyword"
          content="portfolio, javascript, developer, fullstack"
        ></meta>
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
// Exporting function
export default App;
