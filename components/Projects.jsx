import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const PContainer = styled.div`
  width: 30%;
  height: 40vh;
  margin: 20px 10px;
  border: 2px solid rgb(232, 234, 237);
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
`;
const PBrowser = styled.div`
  height: 20px;
  background-color: rgb(232, 234, 237);
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 2;
`;

const PCircle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin: 3px;
  background-color: white;
`;
const PImg = styled(Image)`
  transition: all 8s ease;


  &:hover {
    transform: translateY(-45%);
  }
`;

const Projects = ({ img, link, desc }) => {
  return (
    <PContainer>
      <PBrowser>
        <PCircle></PCircle>
        <PCircle></PCircle>
        <PCircle></PCircle>
      </PBrowser>
      <Link href={link}>
        <a target="_blank">
          <PImg
            src={img}
            alt=""
            width="68%"
            height="89%"
            layout="responsive"
            objectFit="contain"
          />
        </a>
      </Link>
    </PContainer>
  );
};

export default Projects;
