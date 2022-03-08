import styled from "styled-components";

const YarnContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: center ;
  border: 1px solid red;
`;

const YarnTitle  = styled.h3`
font-weight: 400;

`

const Yarn = () => {
  return <YarnContainer>
    <YarnTitle>
      These are some of my knitting and crochet projects
    </YarnTitle>
  </YarnContainer>;
};

export default Yarn;
