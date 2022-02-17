import Image from "next/image";
import Circle from "./Circle";
import styled, { keyframes } from "styled-components";
import { BiDownArrow } from "react-icons/bi";

const IntroContainer = styled.div`
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
display: flex;
height: 70vh;
width: 85%;
background: rgb(177,230,202);
background: radial-gradient(circle, rgba(177,230,202,1) 0%, rgba(230,230,250,1) 100%);
`

const IntroLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5rem;
`;
const IntroRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5rem;
`;
const LeftWrapper = styled.div`
  margin-left: 3rem;
  height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Greeting = styled.h2`
  font-size: 25px;
  font-weight: 300;
  margin-bottom: 0px;
`;
const Name = styled.h1`
  font-size: 50px;
  font-weight: 300;
  margin: 20px 15px;
  
`;
const TitleIntro=styled.p`
  margin: 2px 0px 10px 35px;
  font-size: 17px;
`

const Title = styled.div`
  height: 40px;
  padding-left: 10px;
  overflow: hidden;
  margin: 2px 40px;
  
`;

const scrollAnimation = keyframes`
  25% {
    transform: translateY(-50px);
  }
  50% {
    transform: translateY(-100px);
  }
  75% {
    transform: translateY(-150px);
  }
  100% {
    transform: translateY(-200px);
  }
`;

const TitleWrapper = styled.div`
  height: 100%;
  animation: ${scrollAnimation};
  animation-duration: 10s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

const TitleItem = styled.div`
  height: 50px;
  font-size: 30px;
  font-weight: 400;
  color: #60987b;
  display: flex;
  align-items: center;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const Scroll = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 50px;
  left: 50%;
  font-size: 20px;
  cursor: pointer;
`;

const Intro = () => {
  return (
    <IntroContainer>
      <Container>
      <IntroLeft>
        <LeftWrapper>
          <Greeting>Hello, my name is</Greeting>
          <Name>Jehanne Hodge</Name>
          <TitleIntro>and I am...</TitleIntro>
          <Title>
            <TitleWrapper>
              <TitleItem> a Web Developer</TitleItem>
              <TitleItem> a Researcher</TitleItem>
              <TitleItem>Creative</TitleItem>
              <TitleItem>Organized</TitleItem>
              <TitleItem>Hard Working</TitleItem>
            </TitleWrapper>
          </Title>
        </LeftWrapper>
        <Scroll>
          <BiDownArrow />
        </Scroll>
      </IntroLeft>
      <IntroRight>
        <StyledImage src="/img/intro-img.png" alt="" width={400} height={400} />
      </IntroRight>
      </Container>
    </IntroContainer>
  );
};

export default Intro;
