import Image from "next/image";
import styled from "styled-components";


const KContainer = styled.div`
  width: 20%;
  height: 70%;
  margin: 20px 10px;
  border: 1px solid red;
`

const KImg = styled(Image)`
/* object-fit: cover ; */
`


export const KnittingProjects = ({img}) => {
  return (
    <KContainer>
        <KImg
            src={img}
            alt=""
            width={50}
            height={50}
            layout="responsive"
          />
    </KContainer>
  )
}
