import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
        <StyledImage src={codingSvg} />
        <HeaderContainer>
          <h1>
            About Software Developer <span>Hasan Süheyl YAZICI</span>
          </h1>
        </HeaderContainer>
        <InfoContainer>
          <h2>Hi, I'am Hasan Süheyl Yazıcı</h2>
          <h3>I’m currently learning Full-Stack Development Languages.</h3>
          <h4>
            I've already known HTML5, CCS3, JS, ReactJS, BOOSTRAP5...
          </h4>
          <h2>
            <a href="h.suheylyazici@gmail.com">Send email</a> :
            h.suheylyazici@gmail.com
          </h2>
        </InfoContainer>
    </AboutContainer>
  );
};

export default About;
