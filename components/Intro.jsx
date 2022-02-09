import Image from "next/image";
import Circle from "./Circle";
import styled from "styled-components";

const IntroContainer = styled.div`
  display: flex;
  height: 100vh;

`

const IntroLeft = styled.div`
  flex: 1;
`
const IntroRight = styled.div`
 flex: 1;
`
const LeftWrapper = styled.div`
  padding: 50px;
`
const Title = styled.h2`
 
`
const Name = styled.h1`
 
`
const JobWrapper = styled.div``

const JobTitle = styled.div``

const JobTitleItem = styled.div``


// this is how you use image
// const StyledImage = styled(Image)`
//   object-fit: scale-down;
// `;


const Intro = () => {
  return <IntroContainer>
    <IntroLeft>
      <LeftWrapper>
        <Title>Hello, my name is</Title>
        <Name>Jehanne Hodge</Name>
        <JobWrapper>
          <JobTitle>
            <JobTitleItem>Web Developer</JobTitleItem>
            <JobTitleItem>Researcher</JobTitleItem>
            <JobTitleItem>Creative</JobTitleItem>
            <JobTitleItem>Organized</JobTitleItem>
          </JobTitle>
        </JobWrapper>
      </LeftWrapper>
    </IntroLeft>
    <IntroRight>right</IntroRight>

      {/* <StyledImage src="/img/intro-img.png" layout="fill" alt="" width={500} height={500}/> */}
  </IntroContainer>;
};

export default Intro;
