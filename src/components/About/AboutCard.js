import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Xinyan Li.</span>
            <br />
            <br />
            I am currently studying in DTU as a computer Science student.
            <br />
            I have plenty of <i><span className="purple">on-the-job and on-campus</span></i> project experience, develop something fancy is my enthusiasm for coding.
            <br />
            <br />
            Apart from coding, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
            🎮 Video Games 
            </li>
            <li className="about-activity">
            🏎️ Formula 1 
            </li>
            <li className="about-activity">
            💪 Going to the Gym 
            </li>
            <li className="about-activity">
            ✈️ Traveling 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Follow your passion. It will lead you to your purpose."{" "}
          </p>
          <footer className="blockquote-footer">Oprah Winfrey</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
