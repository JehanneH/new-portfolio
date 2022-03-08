import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { TiArrowDownOutline } from "react-icons/ti";
import { useContext } from "react";
import { ThemeContext } from "../context";
import { Link } from "react-scroll";

const IntroContainer = styled.div`
  height: 78vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  height: 70vh;
  width: 85%;
  background: rgb(177, 230, 202);
  background: radial-gradient(
    circle,
    rgba(177, 230, 202, 1) 0%,
    rgba(230, 230, 250, 1) 100%
  );
`;

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
const TitleIntro = styled.p`
  margin: 2px 0px 10px 35px;
  font-size: 17px;
`;

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

const Scroll = styled(Link)`
  position: absolute;
  bottom: 7%;
  left: 50%;
  cursor: pointer;
`;

const DownArrow = styled(TiArrowDownOutline)`
  width: 25px;
  height: 25px;
`;

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <IntroContainer id="home">
      <Container
        style={{
          background:
            darkMode && "radial-gradient(circle, #618572 0%, #513e63)100%",
        }}
      >
        <IntroLeft>
          <LeftWrapper>
            <Greeting>Hello, my name is</Greeting>
            <Name>Jehanne Hodge</Name>
            <TitleIntro>and I am...</TitleIntro>
            <Title>
              <TitleWrapper>
                <TitleItem style={{ color: darkMode && "#b1e6ca" }}>
                  {" "}
                  a Web Developer
                </TitleItem>
                <TitleItem style={{ color: darkMode && "#b1e6ca" }}>
                  {" "}
                  a Researcher
                </TitleItem>
                <TitleItem style={{ color: darkMode && "#b1e6ca" }}>
                  Creative
                </TitleItem>
                <TitleItem style={{ color: darkMode && "#b1e6ca" }}>
                  Organized
                </TitleItem>
                <TitleItem style={{ color: darkMode && "#b1e6ca" }}>
                  Hard Working
                </TitleItem>
              </TitleWrapper>
            </Title>
          </LeftWrapper>
          <Scroll to="about" smooth={true} duration={500} spy={true}>
            <DownArrow />
          </Scroll>
        </IntroLeft>
        <IntroRight>
          <StyledImage
            src="/img/intro-img.svg"
            alt=""
            width={600}
            height={400}
          />
        </IntroRight>
      </Container>
    </IntroContainer>
  );
};

export default Intro;
