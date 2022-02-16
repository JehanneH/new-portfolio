import styled from "styled-components";
import { MdLocationOn, MdAlternateEmail } from "react-icons/md";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../context";

const ContactContainer = styled.div`
  height: 100vh;
  position: relative;
`;
const CBackground = styled.div`
  width: 25px;
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
  margin-top: 3rem;
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
  font-size: 20px;
`;

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  width: 50%;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  margin: 10px 0px;
  font-size: 14px;
  padding-left: 12px;
  font-family: "Roboto Mono", monospace;
  outline: none;
`;
const TextArea = styled.textarea`
  width: 90%;
  height: 20rem;
  margin: 10px 0px;
  font-size: 14px;
  padding-left: 10px;
  border-radius: 5px;
  outline: none;
  padding: 12px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #b1e6cad3;
  width: 100px;
  font-weight: 500;
  font-family: "Roboto Mono", monospace;
  color: #044404;
  cursor: pointer;
`;

const DoneMessage = styled.div`
  padding-top: 1rem;
  font-size: 14px;
`;

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext)
  const darkMode =theme.state.darkMode

  const handleSubmit = (e, onSubmitProps) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a1nxlqg",
        "template_cgq1p9i",
        formRef.current,
        "user_8mjtBsQx2wqxSVs0uxj5u"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
            Send me a message if you're interested in working with me:
          </RDesc>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input style={{backgroundColor: darkMode && "#333"}}type="text" placeholder="Name" name="user_name"></Input>
            <Input
              style={{backgroundColor: darkMode && "#333"}}type="text"
              placeholder="Subject"
              name="user_subject"
            ></Input>
            <Input style={{backgroundColor: darkMode && "#333"}}type="text" placeholder="Email" name="user_email"></Input>
            <TextArea style={{backgroundColor: darkMode && "#333"}} placeholder="Message..." name="message"></TextArea>
            <Button>Submit</Button>
            <DoneMessage>
              {" "}
              {done && "Thank You! Your message has been sent :)"}
            </DoneMessage>
          </Form>
        </CRight>
      </CWrapper>
    </ContactContainer>
  );
};

export default Contact;
