import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="intro">
        <div className="intro-title">
          <h1 className="name">ajjlal ahmed</h1>
          <h1 className="pro">full stack developer</h1>
          <div className="btn">
            <a className="action-btn" href="#projects">
              see projects
            </a>
          </div>
        </div>
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
