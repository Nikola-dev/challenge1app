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
      <Skill skill="React" emoji="😁" color="blue" />
      <Skill skill="JavaScript" emoji="🥰" color="red" />
      <Skill skill="HTML + CSS" emoji="🙂‍↔️" color="orange" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
