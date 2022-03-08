// import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { TiArrowDownOutline } from "react-icons/ti";
import { useContext } from "react";
import { ThemeContext } from "../../context";
// import { Link } from "react-scroll";

const CIntro = styled.div`
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CIntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 60vh;
  width: 75%;
  background: rgb(177, 230, 202);
  background: radial-gradient(
    circle,
    rgba(177, 230, 202, 1) 0%,
    rgba(230, 230, 250, 1) 100%
  );
`;

const IntroDesc = styled.h3`
  font-weight: 400;
  padding: 2rem;
`
const DownArrow = styled(TiArrowDownOutline)`
  width: 25px;
  height: 25px;
  position: relative;
  top: 90px;

`;

const CreativityIntro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <CIntro>
      <CIntroContainer  style={{
          background:
            darkMode && "radial-gradient(circle, #618572 0%, #513e63)100%",
        }}>
        <IntroDesc>
        In my spare  time I enjoy being creative away from a screen.
        <br />
        This mostly involves knitting or crocheting and drawing cards for
        friends and family.
        </IntroDesc>
        <DownArrow />
      </CIntroContainer>
    </CIntro>
  );
};

export default CreativityIntro;
