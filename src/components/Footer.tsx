import { Link } from "react-router-dom"
import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #000000;
    color: #ffffff;
    text-align: center;
    padding: 1rem;
    position: static;
    bottom: 0;
    left: 0;
    right: 0;
    font-family: 'Gravitas One', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1rem;
    a {
        color: #ffffff;
        text-decoration: none;
    }
    a:hover {
        border-bottom: 2px solid #ffffff;
    }
    a:visited {
        color: #ffffff;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <p>TODO: SOCIALS</p>
            <Link to="/contact">Contact Me</Link>
            <p>2025 Jimmy Dean</p>
            <p>Jimmy Dean | Actor | Voiceover Artist | Filmmaker | Sausage</p>
        </StyledFooter>
    )
}

export default Footer;