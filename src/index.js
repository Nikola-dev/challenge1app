import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
const skills = [
  {
    skill: "React",
    level: `Advanced`,
    color: `blue`,
  },
  {
    skill: "JavaScript",
    level: `Intermediate`,
    color: `red`,
  },
  {
    skill: "HTML + CSS",
    level: `Intermediate`,
    color: `orange`,
  },
  {
    skill: `Node.js`,
    level: `Beginner`,
    color: `green`,
  },
  {
    skill: `Express.js`,
    level: `Intermediate`,
    color: `purple`,
  },
  {
    skill: `MongoDB`,
    level: `Beginner`,
    color: `green`,
  },
  {
    skill: `PostgreSQL`,
    level: `Intermediate`,
    color: `blue`,
  },
];
function Avatar() {
  return <img className="avatar" src="squid.jpg" alt="squid"></img>;
}
function Intro() {
  return (
    <div>
      <h1>Nikola Arsic</h1>
      <p>
        I'm a software engineer who loves building web applications. I'm also a
        huge fan of React. As a 26 year old highschool IT teacher, i've had the
        privilege to work alongside very knowledgeable and bright people. 🚀
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === `Beginner` && `😃`}
        {level === `Intermediate` && `😍`}
        {level === `Advanced` && `😜`}
      </span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
