import styled from "styled-components"
import {MdLocationOn, MdAlternateEmail} from "react-icons/md"



const ContactContainer = styled.div`
  height: 100vh;
  position: relative;
`
const CBackground = styled.div`
  width: 20px;
  height: 100%;
  background-color: lavender;
  position: absolute;
`
const CWrapper = styled.div`
  padding: 50px;
  display: flex;
`

const CLeft = styled.div`
  flex: 1;
`

const CTitle = styled.h1`
  font-size: 60px;
  width: 80%;
`
const CInfo = styled.div`
   
`
const CInfoItem = styled.div`
   
`

const CRight = styled.div`
  flex: 1;  
`
const EmailIcon = styled(MdAlternateEmail)`
  
`
const LocationIcon = styled(MdLocationOn)``


const Contact = () => {
  return (
    <ContactContainer>
      <CBackground></CBackground>
      <CWrapper>
        <CLeft>
          <CTitle>Feel free to contact me</CTitle>
          <CInfo>
            <CInfoItem>
              <EmailIcon /> samarahjhodge@gmail.com
              <LocationIcon/> Montreal, Canada
            </CInfoItem>
          </CInfo>
        </CLeft>
        <CRight></CRight>
      </CWrapper>
    </ContactContainer>
  )
}

export default Contact