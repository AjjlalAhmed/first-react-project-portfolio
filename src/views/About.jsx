const About = () => {
  const skills = [
    "HTML",
    "Css",
    "Scss",
    "Javascript",
    "Vue.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mysql",
    "Sqlite",
    "Git",
    "Npm",
  ];
  return (
    <div className="about">
      <h1 className="title">about</h1>
      <div className="content">
        <div className="desc">
          My name is Ajjlal Ahmed, and I am a Full-Stack web developer
          specializing in HTML, CSS, JAVASCRIPT, NODE & VUE-based web apps.
        </div>
        <div className="work">
          <h2 className="title">WORK EXPERIENCE</h2>
          <p className="from">Front End Developer at Fiverr</p>
          <p className="what">
            Deal with the interface and user-facing systems. Develop the
            navigation, interface, and visuals. Focus on user experience.
            Utilize HTML, CSS3, JavaScript And Front End Framework such as Vue
            js. As a professional web app services provider, I'm envisioned to
            provide the latest and finest app development solutions to
            businesses worldwide.
          </p>
          <p className="from">Full Stack Developer at fiverr</p>
          <p className="what">
            Cross-discipline web development skills involving front and back
            end. Deal with the overlap between the front end and back end. Take
            responsibility for the entire experience to make sure it goes
            smoothly
          </p>
        </div>
        <div className="education">
          <h2 className="title">education</h2>
          <p className="from">Ali Ali School Karachi PK</p>
          <p className="what">Matric, Computer Science</p>
          <p className="from">
            Allama Iqbal Government Boys Higher Secondary School
          </p>
          <p className="what">Faculty of Science., Engineering</p>
        </div>
        <div className="certification">
          <h2 className="title">certificates</h2>
          <p className="from">Responsive Web Design</p>
          <p className="what">
            https://www.freecodecamp.org/certification/ajjlal/back-end-development-and-apis
          </p>
          <p className="from">Back End Development and APIs</p>
          <p className="what">
            https://freecodecamp.org/certification/ajjlal/responsive-web-design
          </p>
          <p className="from">
            Complete JAVASCRIPT with HTML5,CSS3 from zero to Expert
          </p>
          <p className="what">
            https://www.udemy.com/certificate/UC-eddda058-d072-4670-9264-1d85d6b42db1/
          </p>
        </div>
        <div className="skills">
          <h2 className="title">Skills</h2>
          <ul>
            {skills.map((item, index) => (
              <li className="skill" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
