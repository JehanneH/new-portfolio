import Image from "next/image";
import Circle from "./Circle";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 50px); /* height minus the height of nav */
  display: flex;
  overflow: hidden;
  position: relative;
`

const Card = styled.div`
  flex: 1; /* separates in middle 50/50 */
  padding: 100px;
  padding-right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
`

const Title = styled.h1`
  font-size: 50px;
  margin: 0;
`
const ColorPop = styled.span`
  color: lightskyblue;
`
const Desc = styled.p`
  font-size: 20px;
  margin: 0;
`

const Button = styled.button`
  border: none;
  background: lightskyblue;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  width: 100px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`

const StyledImage = styled(Image)`
  object-fit: scale-down;
`;


const Intro = () => {
  return <Container>
    
    <Card>
      <Title>
        <ColorPop>Hello.</ColorPop> Welcome to my portfolio blah blah blah
      </Title>
      <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis facilis minus reiciendis perspiciatis, eum quae asperiores vitae doloremque sunt accusantium tenetur illo, nemo id tempore odit quisquam! Sunt, delectus repellendus?</Desc>
      <Button>Projects</Button>
    </Card>
    <Card>
      <StyledImage src="/img/intro-img.png" layout="fill" alt="" width={500} height={500}/>
    </Card>
  </Container>;
};

export default Intro;
