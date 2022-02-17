import styled from "styled-components";
import { TiArrowUpOutline } from "react-icons/ti";

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
  return (
    <ToggleContainer>
      <UpArrow />
    </ToggleContainer>
  );
};

export default ToggleScrollUp;
