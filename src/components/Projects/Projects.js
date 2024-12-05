import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import developing from "../../Assets/Projects/Developing.jpg";
import newsHunter from "../../Assets/Projects/news-hunter.jpg";
import iportfolio from "../../Assets/Projects/Iportfolio.jpg"
import multiAgent from "../../Assets/Projects/Multiple-Agent.jpg"
import wuliAntd from "../../Assets/Projects/WULI-Antd.jpg"
import CO2ImpactClimate from "../../Assets/Projects/CO2 Emission Impact on Climate.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsHunter}
              isBlog={false}
              title="News Hunter"
              description="An AI featured news website. We have all kinds of the latest AI news to present. Users can like, save or comment on any news they like. The AI chat bot can help users to find the news they want by dialoguing."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iportfolio}
              isBlog={false}
              title="IPortfolio"
              description="A portfolio editing website with various templates provided for users. A feature-rich editor can help users to create their personalized portfolio. If users want to use the portfolio as a CV or for display usage, the portfolio can be published and share with anyone using the link."
              demoLink="http://43.157.44.225"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={multiAgent}
              isBlog={false}
              title="Multi-Agent"
              description="A multi-agent program using Dijkstra Algorithm, Subgoal Algorithm, BDI and other algorithm to achieve solving complex box pushing games."
              ghLink="https://github.com/LiXenon/MultipleAgent"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wuliAntd}
              isBlog={false}
              title="Wuli-Antd Mobile UI Component Library"
              description="A secondary packaging mobile UI component library based on Antd Mobile. It optimize some drawbacks and bugs of Antd Mobile and implement alignment in component aspect. Making it possible to use a set of codes to display on both PC and mobile end."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CO2ImpactClimate}
              isBlog={false}
              title="CO2 Emission Impact on Climate"
              description="A simple but intuitive interactive data visualization project. Users can find out the CO2 Emission Growth Rate and the Temperature Growth Rate of different regions in different year and find out the relation between them."
              demoLink="https://public.tableau.com/app/profile/xinyan.li1309/viz/CO2EmissionimpactonTemperature/1_2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={developing}
              isBlog={false}
              title="More projects developing..."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
