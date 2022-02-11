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
      </AboutRight>
    </AboutContainer>
  );
};

export default About;
