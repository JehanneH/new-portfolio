import styled from "styled-components";
import Projects from "./Projects";
import {products} from "../data"

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
        <PLTitle>Projects</PLTitle>
        <PLDesc>These are a few of the projects I worked on during my time at Lighthouse Labs, in collaboration with others and on my own.</PLDesc>
      </PLTexts>
      <PLList>
        {products.map((item) => (
          <Projects key={item.id} img={item.img} link={item.link} />
        ))}
        
      </PLList>
    </PLContainer>
  ) 
};

export default ProjectList;
