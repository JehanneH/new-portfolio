import styled from "styled-components";
import Projects from "./Projects";
import { products } from "../data";
import Link from "next/link";

const PLContainer = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const PLTexts = styled.div`
  width: 45%;
`;
const PLTitle = styled.h1`
  font-size: 50px;
  font-weight: 400;
`;

const PLDesc = styled.p`
  margin: 20px 0px;
`;
const PLList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const ProjectList = () => {
  return (
    <PLContainer>
      <PLTexts id="projects">
        <PLTitle>Projects</PLTitle>
        <PLDesc>
          These are a few projects I have created on my own and in collaboration
          with others, as well as during the{" "}
          <Link href="https://www.lighthouselabs.ca/">
            <a target="_blank" style={{ color: "#8080c9" }}>
              Lighthouse Labs
            </a>
          </Link>{" "}
          Web Development Bootcamp
        </PLDesc>
      </PLTexts>
      <PLList>
        {products.map((item) => (
          <Projects
            key={item.id}
            img={item.img}
            link={item.link}
            desc={item.desc}
          />
        ))}
      </PLList>
    </PLContainer>
  );
};

export default ProjectList;
