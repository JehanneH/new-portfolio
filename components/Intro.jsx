import Image from "next/image";
import Circle from "./Circle";
import styled, { keyframes } from "styled-components";

const IntroContainer = styled.div`
  display: flex;
  height: 100vh;
`

const IntroLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const IntroRight = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: center;
`
const LeftWrapper = styled.div`
  padding: 1rem 20rem 1rem 2rem;
  height: 50%;
  border: solid 1px black;
  border-radius: 10px;
`
const Greeting = styled.h2`
 font-size: 30px;
 font-weight: 300;
`
const Name = styled.h1`
 font-size: 60px;
`

const Title = styled.div`
  height: 50px;
  overflow: hidden;
`

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
`

const TitleWrapper = styled.div`
  height: 100%;
  animation: ${scrollAnimation};
  animation-duration: 10s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`

const TitleItem = styled.div`
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  color: lightblue;
  display: flex;
  align-items: center;
`

const StyledImage = styled(Image)`
  object-fit: cover;
`;


const Intro = () => {
  return <IntroContainer>
    <IntroLeft>
      <LeftWrapper>
        <Greeting>Hello, my name is</Greeting>
        <Name>Jehanne Hodge</Name>
        <Title>
          <TitleWrapper>
            <TitleItem>Web Developer</TitleItem>
            <TitleItem>Researcher</TitleItem>
            <TitleItem>Creative</TitleItem>
            <TitleItem>Organized</TitleItem>
            <TitleItem>Goal Oriented</TitleItem>
          </TitleWrapper>
        </Title>
      </LeftWrapper>
    </IntroLeft>
    <IntroRight>
      <StyledImage src="/img/intro-img.png" alt="" width={500} height={500} />
    </IntroRight>

      
  </IntroContainer>;
};

export default Intro;
