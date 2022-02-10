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

const LeftCardBg = styled.div`
 position: absolute;
 top: 50px;
 left: 50px;
 width: 22rem;
 height: 28rem;
 background-color: #333;
 border-radius: 30px;
`

const LeftCard = styled.div`
  width: 60%;
  height: 75vh;
  border-radius: 30px;
  position: relative;
`

const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 30px;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
`;



const About = () => {
  return (
    <AboutContainer>
      <AboutLeft>
        <LeftCardBg></LeftCardBg>
        <LeftCard>
          <StyledImage src="/img/profilepic.jpg" alt="" width={400} height={500} />
        </LeftCard>
      </AboutLeft>

      <AboutRight>

      </AboutRight>
    </AboutContainer>
  )
}

export default About