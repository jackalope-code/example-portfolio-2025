import styled from "styled-components";

interface HeroSectionProps {
    fullWidth?: boolean;
}
const HeroSection = styled.section<HeroSectionProps>`
    background-color: #f0f0f0;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-size: 1.2em;
    line-height: 1.6;
    color: #333;
    width: ${(props) => props.fullWidth ? '100%' : '80%'};
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`;

export default HeroSection;