// Importing thing we need
import Projects from "../components/Projects";
import Footer from "../components/Footer";

// Main function
const Home = () => {
  // Returning jsx
  return (
    <div className="home">
      <section className="intro">
        <div className="intro-title">
          <h1 className="name">ajjlal ahmed</h1>

          <h1 className="pro">full stack developer</h1>

          <div className="btn">
            <a className="action-btn" href="#projects">
              see projects
            </a>
          </div>
        </div>
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section className="footer">
        <Footer />
      </section>
    </div>
  );
};
// Exporting function
export default Home;
