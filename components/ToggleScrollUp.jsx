import styled from "styled-components";
import { TiArrowUpOutline } from "react-icons/ti";
import {animateScroll as scroll} from 'react-scroll'

const ToggleContainer = styled.div`
  width: 50px;
  height: 25px;
  position: fixed;
  bottom: 30px;
  right: 4px;
  z-index: 999;
`;

const UpArrow = styled(TiArrowUpOutline)`
  width: 25px;
  height: 25px;
`;


const ToggleScrollUp = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <ToggleContainer>
      <UpArrow onClick={toggleHome}/>
    </ToggleContainer>
  );
};

export default ToggleScrollUp;
