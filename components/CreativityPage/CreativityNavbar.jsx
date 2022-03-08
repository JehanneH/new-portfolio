import styled from "styled-components";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { ThemeContext } from "../../context";
import { useContext } from "react";

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
          <ScrollLink to="yarn" smooth={true} duration={500} spy={true}>
            Yarn
          </ScrollLink>
        </ListItem>
        <ListItem style={{ color: darkMode && "white" }}>
          <ScrollLink to="cards" smooth={true} duration={500} spy={true}>
            Cards
          </ScrollLink>
        </ListItem>
        <ListItem>
          <Link href="/">
            <a style={{ color: darkMode && "white" }}>Back</a>
          </Link>
        </ListItem>
      </List>
    </Container>
  );
};

export default Navbar;
