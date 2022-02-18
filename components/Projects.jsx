import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context";

const Desc = styled.div`
  width: 70%;
  /* position: absolute; */
  z-index: 999;
  background: #d3d3d3d9;
  padding: 20px;
  border-radius: 10px;
  opacity: 0;
  transition: all 1s ease;
`;

const PContainer = styled.div`
  width: 30%;
  height: 31vh;
  margin: 20px 10px;
  border: 2px solid rgb(232, 234, 237);
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
  position: relative;
  &:hover ${Desc} {
    opacity: 1;
  }
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

const DescContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PImg = styled(Image)`
  /* hover for scroll effect taken out for now for multi page sites and fit */
  /* transition: all 8s ease;
  &:hover {
    transform: translateY(-45%);
  } */
`;

const Projects = ({ img, link, desc }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <PContainer style={{ borderColor: darkMode && "#3d4041" }}>
      <PBrowser style={{ backgroundColor: darkMode && "#3d4041" }}>
        <PCircle></PCircle>
        <PCircle></PCircle>
        <PCircle></PCircle>
      </PBrowser>
      <Link href={link}>
        <a target="_blank">
          <DescContainer>
            <Desc style={{ backgroundColor: darkMode && "#3d4041ea" }}>{desc}</Desc>
          </DescContainer>
        </a>
      </Link>
      <Link href={link}>
        <a target="_blank">
          <PImg
            src={img}
            alt=""
            width={100}
            height={55}
            layout="responsive"
            objectFit="fill"
          />
        </a>
      </Link>
    </PContainer>
  );
};

export default Projects;
