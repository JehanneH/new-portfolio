import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  height: 15vh;
  background: transparent;
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
  return (
    <Container>
      <Title>
        <Link href="/">JH</Link>
      </Title>
      <List>
        <ListItem>
          <Link href="/about">About</Link>
        </ListItem>
        <ListItem>
          <Link href="/skills">Skills</Link>
        </ListItem>
        <ListItem>
          <Link href="/projects">Projects</Link>
        </ListItem>
      </List>
    </Container>
  );
};

export default Navbar;
