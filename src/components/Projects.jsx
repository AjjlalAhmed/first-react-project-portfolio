import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "url shortner ",
      desc: "A HTTP service to short the URL with the limit count on how many times that shorten URL can be used. This project is made using NodeJS ExpressJS and MongoDB.How it works User enters a valid URL into the form. If the format is valid, the webpage will respond with a JSON containing the original url and shortened url. If the URL is not valid or does not exist, the api will respond with an error saying Invalid URL.",
      imgSrc: "/urlst.png",
      url: "https://urlshorteneraj.herokuapp.com/",
      stacks: [
        "HTML",
        "Css",
        "Scss",
        "Javascript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
      ],
    },
    {
      id: 2,
      title: "jfake ",
      desc: "FakeApi can be used to fetch JsonData for your website. you can use examples below to check how fakeApi works and feel free to enjoy it in your awesome projects!",
      imgSrc: "/jfake.png",
      url: "https://jfakeapi.herokuapp.com/",
      stacks: [
        "HTML",
        "Css",
        "Scss",
        "Javascript",
        "Node.js",
        "Express.js",
        "nedb",
      ],
    },
    {
      id: 3,
      title: "weather ",
      desc: "Use the Weather app to check the weather for your current location or in other places.",
      imgSrc: "/weather.png",
      url: "https://weather-app-aj.web.app/",
      stacks: ["HTML", "Css", "Scss", "Javascript", "Vue.js"],
    },
    {
      id: 4,
      title: "remote job ",
      desc: "Remote-jobs is a simple, easy-to-use REST API that returns JSON results of job posting.I create this api because i need this api in my other project Docbydev.Its fetech job posting from other's site by scrapinig their content with the help of node, express, puppeteer, node-html-parser and sqlite.In this project, i lerned how to use sqlite and node-html-parser with node and express.",
      imgSrc: "/apis.png",
      url: "https://remotejobs.glitch.me/api/getjobs",
      stacks: [
        "Node.js",
        "Express.js",
        "Sqlite3",
        "Puppeteer",
        "Axios",
        "Jsonwebtoken",
        "Node-cron",
      ],
    },
  ];
  return (
    <div className="project">
      <h1 className="title">projects</h1>
      <div className="showcase">
        {projects.map((item) => (
          <div className="card" key={item.id}>
            <img
              className="poster"
              src={`${process.env.PUBLIC_URL}/assets/images${item.imgSrc}`}
              alt=""
            />
            <h1 className="card-title">{item.title}</h1>
            <p className="desc">{item.desc}</p>
            <ul className="stacks">
              {item.stacks.map((innerItem, index) => (
                <li className="stack" key={index}>
                  {innerItem}
                </li>
              ))}
            </ul>
            <a
              href={item.url}
              target="_blank"
              className="view-project__btn"
              rel="noreferrer"
            >
              View project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
