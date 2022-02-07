import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  font-size: 18px;
`;

const List = styled.ul`
`
const ListItem = styled.li`
  display: inline;
  margin-right: 30px;
  font-size: 14px;
  color: lightgrey;
  cursor: pointer;
`

const Navbar = () => {
  return <Container>
    <Link href="/">JH</Link>
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
  </Container>;
};

export default Navbar;
