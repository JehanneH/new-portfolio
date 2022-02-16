import styled from "styled-components";
import {SiLinkedin, SiGithub, SiAngellist} from 'react-icons/si'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const FContainer = styled.div`
  background-color: lavender;
  height: 30vh;
`
const SocialIcons = styled.div` 
`
const Brand = styled.div` 
`

const LinkedIn = styled(SiLinkedin)``

const Github = styled(SiGithub)``

const AngelList = styled(SiAngellist)``

const Resume = styled(BsFillPersonLinesFill)``


const Footer = () => {
  return <FContainer>
    <SocialIcons>
      <LinkedIn />
      <Github />
      <AngelList />
      <Resume />
    </SocialIcons>
    <Brand>Created by Jehanne Hodge</Brand>
  </FContainer>;
};

export default Footer;
