import styled from "styled-components";
import { BsSun, BsMoon} from 'react-icons/bs'

const ToggleContainer = styled.div`
  width: 50px;
  height: 25px;
  border-radius: 20px;
  border: 1px solid grey; 
  background-color: white;
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Sun = styled(BsSun)`
  width: 15px;
  height: 15px;
`
const Moon = styled(BsMoon)`
  width: 14px;
  height: 14px;
`

const ToggleButton = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: grey;
  position: absolute;
  cursor: pointer;
  right:0

`

const Toggle = () => {
  return (
    <ToggleContainer>
      <Sun />
      <Moon />
      <ToggleButton></ToggleButton>
    </ToggleContainer>

  )
}

export default Toggle