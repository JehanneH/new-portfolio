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
  margin-left: 5rem;
`
const IntroRight = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 margin-right: 5rem;
`
const LeftWrapper = styled.div`
  padding: 20px;
  margin-left: 3rem;
  height: 50%;
  /* border: solid 1px black;
  border-radius: 10px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const Scroll = styled.div`
width: 30px;
height: 30px;
position: absolute;
bottom: 20px;
left: 50%;
`




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
            <TitleItem>Teamwork</TitleItem>
          </TitleWrapper>
        </Title>
      </LeftWrapper>
      <Scroll>V</Scroll>
    </IntroLeft>
    <IntroRight>
      <StyledImage src="/img/intro-img.png" alt="" width={400} height={400} />
    </IntroRight>

      
  </IntroContainer>;
};

export default Intro;
