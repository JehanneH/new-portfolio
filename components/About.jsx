import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import {
  SiJavascript,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiSass,
  SiStyledcomponents,
  SiJquery,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiGit,
} from "react-icons/si";
import { useContext } from "react";
import { ThemeContext } from "../context";

const AboutContainer = styled.div`
  height: 100vh;
  width: 95%;
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
  background-color: lavender;
  padding: 5px 18px 2px 35px;
  margin-right: 1.5rem;
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
  top: 160px;
  left: 150px;
  background-color: #b1e6ca;
`;

const AboutImg = styled(Image)`
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
`;

const AboutTitle = styled.h1`
  font-weight: 400;
`;
const AboutSub = styled.p`
  margin: 20px 3px;
`;
const AboutDesc = styled.p`
  font-weight: 300;
  margin-right: 40px;
`;

const AboutLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 30%;
`;

const LinkItem = styled.div`
  text-decoration: none;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: currentColor;

    transform: scaleX(0);
    transform-origin: center;
    transition: transform 250ms ease-in;
  }
  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }
`;

const AboutSkills = styled.div``;

const SkillsTitle = styled.h3`
  font-weight: 500;
`;

const Skills = styled.ul`
  padding: 0;
  margin: 0;
`;

const SkillsList = styled.li`
  list-style-type: none;
  font-size: 30px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;
`;

const JS = styled(SiJavascript)`
  color: #f0db4f;
  background: #181818;
  padding: 5px;
  font-size: 2.5rem;
  border-radius: 4px;
`;
const HTML = styled(SiHtml5)`
  color: #f16529;
  background: white;
  padding: 5px;
  font-size: 2.5rem;
  border-radius: 4px;
`;
const CSS = styled(SiCss3)`
  color: #264de4;
  background: white;
  padding: 5px;
  font-size: 2.5rem;
  border-radius: 4px;
`;
const SASS = styled(SiSass)`
  color: #cc6699;
  background: white;
  padding: 5px;
  font-size: 2.5rem;
  border-radius: 4px;
`;
const StyledComps = styled(SiStyledcomponents)`
  color: #e7b8ed;
  background: #3c3c3c;
  padding: 3px;
  font-size: 2.5rem;
  border-radius: 4px;
`;
const SQL = styled(SiPostgresql)`
  color: #336791;
  background: white;
  padding: 5px;
  font-size: 2.5rem;
  border-radius: 4px;
`;
const JQuery = styled(SiJquery)`
  color: #78cff5;
  background: #0769ad;
  padding: 6px;
  font-size: 2.5rem;
  border-radius: 4px;
`;
const React = styled(SiReact)`
  color: #61dbfb;
  background: #212329;
  padding: 5px;
  font-size: 2.5rem;
  border-radius: 4px;
`;
const Next = styled(SiNextdotjs)`
  color: #121212;
  background: white;
  padding: 5px;
  font-size: 2.5rem;
  border-radius: 4px;
`;
const Node = styled(SiNodedotjs)`
  color: #3c873a;
  background: #333333;
  padding: 5px;
  font-size: 2.5rem;
  border-radius: 4px;
`;
const Git = styled(SiGit)`
  color: #f1502f;
  background: #f0f0e9;
  padding: 5px;
  font-size: 2.5rem;
  border-radius: 4px;
`;

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <AboutContainer id="about">
      <AboutLeft>
        <LeftCardBg
          style={{ backgroundColor: darkMode && "#618572" }}
        ></LeftCardBg>
        <LeftCard>
          <AboutImg
            src="/img/profilepic.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </LeftCard>
      </AboutLeft>
      <AboutRight style={{ backgroundColor: darkMode && "#513e63" }}>
        <AboutTitle>About Me</AboutTitle>
        <AboutSub>
          I am a Full-Stack Web Developer with a Master&apos;s degree in
          Sociology and Gender Studies
        </AboutSub>
        <AboutDesc>
          I enjoy the challenge of learning new languages and frameworks. My
          diverse background has taught me to be flexible and adaptable to new
          situations. As a Master&apos;s student I furthered my independent
          working skills and initiative, in addition to becoming a dedicated
          researcher. All these qualities contribute to my journey as a lifelong
          learner.
          <br />
          My main passion is for Front-End and I&apos;m interested in expanding
          my UI/UX deisgn skills.
          <br />
          In my spare time I like to enjoy the outdoors and nature any way that
          I can.
        </AboutDesc>
        <AboutLinks>
          <LinkItem>
            <Link href="https://www.canva.com/design/DAECeK-dAJ0/-P50nh3BohEtlLegyp-RRg/view?utm_content=DAECeK-dAJ0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
              <a target="_blank">Resume</a>
            </Link>
          </LinkItem>
          <LinkItem>
            <Link href="https://github.com/JehanneH">
              <a target="_blank">Github</a>
            </Link>
          </LinkItem>
          <LinkItem>
            <Link href="https://www.linkedin.com/in/jehanne-hodge-8657251b3/">
              <a target="_blank">LinkedIn</a>
            </Link>
          </LinkItem>
        </AboutLinks>
        <AboutSkills>
          <SkillsTitle>My Skills</SkillsTitle>
          <SkillsList>
            <Skills>
              <JS />
            </Skills>
            <Skills>
              <HTML />
            </Skills>
            <Skills>
              <CSS />
            </Skills>
            <Skills>
              <SASS />
            </Skills>
            <Skills>
              <StyledComps />
            </Skills>
            <Skills>
              <SQL />
            </Skills>
            <Skills>
              <JQuery />
            </Skills>
            <Skills>
              <React />
            </Skills>
            <Skills>
              <Next />
            </Skills>
            <Skills>
              <Node />
            </Skills>
            <Skills>
              <Git />
            </Skills>
          </SkillsList>
        </AboutSkills>
      </AboutRight>
    </AboutContainer>
  );
};

export default About;
