import styled from "styled-components";
import { MdLocationOn, MdAlternateEmail } from "react-icons/md";

const ContactContainer = styled.div`
  height: 100vh;
  position: relative;
`;
const CBackground = styled.div`
  width: 20px;
  height: 100%;
  background-color: lavender;
  position: absolute;
`;
const CWrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const CLeft = styled.div`
  flex: 1;
`;

const CTitle = styled.h1`
  font-size: 60px;
  width: 80%;
`;
const CInfo = styled.div``;

const CInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0px;

`;

const CRight = styled.div`
  flex: 1;
`;
const EmailIcon = styled(MdAlternateEmail)`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;
const LocationIcon = styled(MdLocationOn)`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;

const RDesc = styled.p`
  font-weight: 300;
`

const Form = styled.form`
  
`

const Input = styled.input`
  
`
const TextArea = styled.textarea`
  
`

const Contact = () => {
  return (
    <ContactContainer>
      <CBackground></CBackground>
      <CWrapper>
        <CLeft>
          <CTitle>Please feel free to reach out!</CTitle>
          <CInfo>
            <CInfoItem>
              <EmailIcon />
              samarahjhodge@gmail.com
            </CInfoItem>
            <CInfoItem>
              <LocationIcon />
              Montreal, Canada
            </CInfoItem>
          </CInfo>
        </CLeft>
        <CRight>
          <RDesc>
            Get in touch if you are interested in working with me
          </RDesc>
          <Form>
            <Input type='text' placeholder="Name" name="user_name"></Input>
            <Input type='text' placeholder="Subject" name="user_subject"></Input>
            <Input type='text' placeholder="Email" name="user_email"></Input>
            <TextArea></TextArea>
          </Form>
        </CRight>
      </CWrapper>
    </ContactContainer>
  );
};

export default Contact;
