import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const PContainer = styled.div`
  width: 30%;
  height: 40vh;
  margin: 20px 10px;
  border: 2px solid rgb(243,242,242);
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
`
const PBrowser = styled.div`
  height: 20px;
  background-color: rgb(243,242,242);
  display: flex;
  align-items: center;
`

const PCircle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin: 3px;
  background-color: white;
`
const StyledImage = styled(Image)`
  /* object-fit: cover; */
`;

const Projects = () => {
  return (
    <PContainer>
      <PBrowser>
        <PCircle></PCircle>
        <PCircle></PCircle>
        <PCircle></PCircle>
      </PBrowser>
      <Link href="https://github.com/JehanneH">
        <a target="_blank">
        <StyledImage src="" alt="" width={400} height={400} />
        </a>
      </Link>
    </PContainer>
  )
};

export default Projects;
