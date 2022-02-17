import styled from "styled-components";
import { BsSun, BsMoon } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../context";

const ToggleContainer = styled.div`
  width: 50px;
  height: 25px;
  border-radius: 20px;
  border: 1px solid #bdbbbb;
  background-color: white;
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Sun = styled(BsSun)`
  width: 15px;
  height: 15px;
  color: #ff9900;
`;
const Moon = styled(BsMoon)`
  width: 14px;
  height: 14px;
  color: #ff9900;
`;

const ToggleButton = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #bdbbbb;
  position: absolute;
  cursor: pointer;
`;

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({type:"TOGGLE"})
  }
  return (
    <ToggleContainer>
      <Sun />
      <Moon />
      <ToggleButton onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></ToggleButton>
    </ToggleContainer>
  );
};

export default Toggle;
