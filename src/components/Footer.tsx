import { Link } from "react-router-dom"
import styled from "styled-components";


    // position: static;
    // bottom: 0;
    // left: 0;
    // right: 0;


const StyledFooter = styled.footer`
    background-color: #000000;
    color: #ffffff;
    width: 100% !important;
    text-align: center;
    padding: 1rem;
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

// TODO: Dynamically set these properties to StyledFooter when scrolled down far enough
    // position: fixed;
    // bottom: 0;
    // left: 0;
    // right: 0;
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