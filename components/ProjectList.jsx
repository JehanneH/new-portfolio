import styled from "styled-components";
import Projects from "./Projects";

const PLContainer = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const PLTexts = styled.div`
  width: 45%;
`
const PLTitle = styled.h1`
  font-size: 50px;
  font-weight: 600;
`

const PLDesc = styled.p`
  margin: 20px 0px;
`
const PLList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`




const ProjectList = () => {
  return (
    <PLContainer>
      <PLTexts>
        <PLTitle>Some Projects</PLTitle>
        <PLDesc>These are some of my pojects complete during my training at Lighthouse Labs, on my own and in collaboration with others.</PLDesc>
      </PLTexts>
      <PLList>
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
      </PLList>
    </PLContainer>
  ) 
};

export default ProjectList;
