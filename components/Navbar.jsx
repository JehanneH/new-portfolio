// import Link from "next/link";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../context";
import { Link } from "react-scroll";

const Container = styled.div`
  height: 15vh;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 150px;
  font-size: 18px;
  ${({ darkMode }) =>
    darkMode &&
    `
    background: blue;
  `}
`;

const Title = styled.div`
  font-size: 30px;
`;

const List = styled.ul``;
const ListItem = styled.li`
  display: inline;
  margin-right: 30px;
  font-size: 14px;
  color: black;
  cursor: pointer;
`;

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Container
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Title>
        <Link to="home">JH</Link>
      </Title>
      <List>
        <ListItem style={{ color: darkMode && "white" }}>
          <Link to="about" smooth={true} duration={500} spy={true}>
            About
          </Link>
        </ListItem>
        <ListItem style={{ color: darkMode && "white" }}>
          <Link to="projects" smooth={true} duration={500} spy={true}>
            Projects
          </Link>
        </ListItem>
        <ListItem style={{ color: darkMode && "white" }}>
          <Link to="contact" smooth={true} duration={500} spy={true}>
            Contact
          </Link>
        </ListItem>
      </List>
    </Container>
  );
};

export default Navbar;
