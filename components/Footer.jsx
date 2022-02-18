import styled from "styled-components";
import { SiLinkedin, SiGithub, SiAngellist } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../context";

const FContainer = styled.div`
  background-color: lavender;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SocialIcons = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-evenly;
`;

const Brand = styled.div`
  margin-top: 1rem;
`;

const LinkedIn = styled(SiLinkedin)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const Github = styled(SiGithub)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const AngelList = styled(SiAngellist)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const Resume = styled(BsFillPersonLinesFill)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const Footer = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <FContainer
      style={{
        backgroundColor: darkMode && "#513e63",
        color: darkMode && "white",
      }}
    >
      <SocialIcons>
        <Link href="https://www.linkedin.com/in/jehanne-hodge-8657251b3/">
          <a target="_blank">
            <LinkedIn />
          </a>
        </Link>
        <Link href="https://angel.co/u/jehanne-hodge">
          <a target="_blank">
            <AngelList />
          </a>
        </Link>
        <Link href="https://github.com/JehanneH">
          <a target="_blank">
            <Github />
          </a>
        </Link>
        <Link href="https://www.canva.com/design/DAECeK-dAJ0/QDBrJSeb_zlnDxHSnK_b6g/edit?category=tACZCki4tbY">
          <a target="_blank">
            <Resume />
          </a>
        </Link>
      </SocialIcons>
      <Brand>Created by Jehanne Hodge</Brand>
    </FContainer>
  );
};

export default Footer;
