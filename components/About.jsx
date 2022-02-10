import styled from "styled-components";
import Image from "next/image";


const AboutContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`

const AboutLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`
const AboutRight = styled.div`
  flex: 1;
`
const LeftCard = styled.div`
  width: 60%;
  height: 70vh;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
`

const LeftCardBg = styled(LeftCard)`
 position: absolute;
  top: 50px;
  left: 50px;
  background-color: #333;
`



const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
`;



const About = () => {
  return (
    <AboutContainer>
      <AboutLeft>
        <LeftCardBg></LeftCardBg>
        <LeftCard>
          <StyledImage src="/img/profilepic.jpg" alt="" layout="fill"/>
        </LeftCard>
      </AboutLeft>

      <AboutRight>

      </AboutRight>
    </AboutContainer>
  )
}

export default About