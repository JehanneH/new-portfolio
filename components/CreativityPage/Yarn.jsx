import Image from "next/image";
import styled from "styled-components";
import { knitting } from "../../knitting";
import { KnittingProjects } from "./KnittingProjects";




const YarnContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column ;
  /* border: 1px solid red; */
`;

const YarnTitle  = styled.h2`
font-weight: 600;
padding: 1rem;
`

const KnitDesc  = styled.p`
font-weight: 400;
padding: 0 6rem;
`
const CrochetDesc  = styled.p`
font-weight: 00;
padding: 0 6rem;
`

const KnitProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  /* justify-content: space-between; */
  width: 90%;
  height: 60vh;
  border: 1px solid blue;
  `


const CrochetProjectsContainer = styled.div``

const Yarn = () => {
  return <YarnContainer id="yarn">
    <YarnTitle>
      Knitting and Crochet Projects
    </YarnTitle>
    <KnitDesc>
    I learned how to knit from my mom when I was about 10 years old.
    <br />
    Throughout my life, every now and then, I would pick it back up again for a bit. 
    <br />
    At the end of 2019 I really got back into it and haven&apos;t stopped since. 
    </KnitDesc>
    <KnitProjectsContainer>
    {/* {knitting.map((item) => (
          <KnittingProjects
            key={item.id}
            img={item.img}
          />
        ))} */}
    </KnitProjectsContainer>
    <CrochetDesc>
    I taught myself how to crochet in 2021. I mainly enjoy making different creations with granny squares.
    </CrochetDesc>
    <CrochetProjectsContainer>

    </CrochetProjectsContainer>
  </YarnContainer>;
};

export default Yarn;
