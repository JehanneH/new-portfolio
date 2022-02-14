import styled from "styled-components";
import Image from "next/image";

const AboutContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

const AboutLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`;
const AboutRight = styled.div`
  flex: 1;
  /* background-color: lavender;
  padding: 1rem 1rem 1rem 3rem;
  margin: 1rem; */
`;
const LeftCard = styled.div`
  width: 45%;
  height: 50vh;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
`;

const LeftCardBg = styled(LeftCard)`
  position: absolute;
  top: 150px;
  left: 160px;
  background-color: #333;
`;

const AboutImg = styled(Image)`
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
`;

const AboutTitle = styled.h1`
  font-weight: 400;
`;
const AboutSub = styled.p`
  margin: 20px 0px;
`;
const AboutDesc = styled.p`
  font-weight: 300;
  margin-right: 40px;
`;
const AboutSkills = styled.div`
  
`;

const SkillsTitle = styled.h3`
  font-weight: 500;
`;

const Skills = styled.ul`
  padding: 0 4rem 2rem 0;
  margin: 0;
  
`

const SkillsList = styled.li`
  list-style-type: none;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;



const About = () => {
  return (
    <AboutContainer>
      <AboutLeft>
        <LeftCardBg></LeftCardBg>
        <LeftCard>
          <AboutImg src="/img/profilepic.jpg" alt="" layout="fill" objectFit="cover" />
         
        </LeftCard>
      </AboutLeft>
      <AboutRight>
        <AboutTitle>About Me</AboutTitle>
        <AboutSub>
          I am a Full-Stack Web Developer with a Master's degree in Sociology and Gender
          Studies
        </AboutSub>
        <AboutDesc>
        With excellent attention to detail, I enjoy the challenge of learning new languages and frameworks. My diverse background has taught me to be flexible and adaptable to new situations. As a Master's student I furthered my independent working skills and initiative, in addition to becoming a dedicated researcher. All these qualities contribute to my journey as a lifelong learner. 
        <br />
        I am currently working on expanding my UX/UI Design skills and in my spare time I like to enjoy the outdoors and nature any way that I can.
        </AboutDesc>
        <AboutSkills>
          <SkillsTitle>My Skills</SkillsTitle>
          <SkillsList>
            <Skills>JavaScript</Skills>
            <Skills>SQL</Skills>
            <Skills>JQuery</Skills>
            <Skills>React</Skills>
            <Skills>Next.js</Skills>
            <Skills>HTML</Skills>
            <Skills>CSS</Skills>
            <Skills>SCSS</Skills>
            <Skills>Styled Components</Skills>
            <Skills>Node</Skills>
            <Skills>Git</Skills>
          </SkillsList>
        </AboutSkills>
      </AboutRight>
    </AboutContainer>
  );
};

export default About;
