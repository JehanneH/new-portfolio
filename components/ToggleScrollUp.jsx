import styled from "styled-components";
import { TiArrowUpOutline } from "react-icons/ti";
import {animateScroll as scroll} from 'react-scroll'
import { useEffect, useState } from "react";

const ToggleContainer = styled.div`
  width: 50px;
  height: 25px;
  position: fixed;
  bottom: 30px;
  right: 4px;
  z-index: 999;
  display: ${({showScroll}) => (showScroll ? "block" : "none")};
`;

const UpArrow = styled(TiArrowUpOutline)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  
`;


const ToggleScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false)
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  const showScrollArrow = () => {
    if (window.scrollY >= 100) {
      setShowScroll(true)
    } else {
      setShowScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', showScrollArrow);
  }, [])

  return (
    <ToggleContainer showScroll={showScroll} >
      <UpArrow  onClick={toggleHome}/>
    </ToggleContainer>
  );
};

export default ToggleScrollUp;
