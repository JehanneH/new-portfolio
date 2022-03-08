import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../context";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Container = styled.div`
  height: 15vh;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 150px;
  font-size: 18px;
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
        <Link href="/">
          <a style={{ color: darkMode && "white" }}>JH</a>
        </Link>
      </Title>
      <List>
        <ListItem style={{ color: darkMode && "white" }}>
          <ScrollLink to="about" smooth={true} duration={500} spy={true}>
            About
          </ScrollLink>
        </ListItem>
        <ListItem style={{ color: darkMode && "white" }}>
          <ScrollLink to="projects" smooth={true} duration={500} spy={true}>
            Projects
          </ScrollLink>
        </ListItem>
        <ListItem style={{ color: darkMode && "white" }}>
          <ScrollLink to="contact" smooth={true} duration={500} spy={true}>
            Contact
          </ScrollLink>
        </ListItem>
        <ListItem>
          <Link href="/creativity">
            <a style={{ color: darkMode && "white" }}>Creativity</a>
          </Link>
        </ListItem>
      </List>
    </Container>
  );
};

export default Navbar;
