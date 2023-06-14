import React from "react";
import "./App.css";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const naviagateToModel = () => {
    navigate("/model");
  };
  return (
    <div className="Home">
      <header className="App-header">
        <h1>Tinkerers Lab Task</h1>
        <hr></hr>
      </header>
      <div className="wrapper">
        <div className="left-block">
          <h2>About Me</h2>
          <hr></hr>
          <h3>Name : Aniket Tukaram Satpute</h3>
          <h3>Roll No : CS21BTECH11056</h3>
          <h3>Branch : Computer Science</h3>
          <h3>Hobbies : Carrom, Batminton, Watching Movies, Chess</h3>
          <h3>
            Email :{" "}
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aniket2245satpute@gmail.com">
              aniket2245satpute@gmail.com
            </a>
          </h3>
          <div className="sm-handles">
            <a href="https://www.linkedin.com/in/aniket-satpute-7a7087224/">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://github.com/anikettsatpute">
              <FaGithub className="icon" />
            </a>
            <a href="https://github.com/anikettsatpute">
              <FaInstagram className="icon" />
            </a>
            <a href="https://github.com/anikettsatpute">
              <FaTwitter className="icon" />
            </a>
          </div>
        </div>

        <div className="right-block">
          <h2>Previous Experience</h2>
          <hr />
          <div className="project">
            <h3>1. Stack Overflow Clone</h3>
            <h4>Group Project made with React, ExpressJs, Axios, PostgreSQL</h4>
            <h4>
              <a href="https://github.com/anikettsatpute/stovfl_clone">
                Github Link
              </a>
            </h4>
          </div>
          <div className="project">
            <h3>2. Tic-tac-toe with chatbox</h3>
            <h4>Solo Project made with React, ExpressJs, Axios, Stram API</h4>
            <h4>
              <a href="https://github.com/anikettsatpute/tic-tac-toe">
                Github Link
              </a>
            </h4>
          </div>
          <div className="project">
            <h3>2. School Management System</h3>
            <h4>Solo Project made with React, ExpressJs, Axios, SQL</h4>
            <h4>
              <a href="https://github.com/anikettsatpute/SDF-final-project-main">
                Github Link
              </a>
            </h4>
          </div>
        </div>
      </div>
      <div className="btn">
        <button onClick={naviagateToModel}>Model</button>
      </div>
    </div>
  );
}

export default Home;
