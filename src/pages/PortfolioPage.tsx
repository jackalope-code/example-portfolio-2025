import styled from "styled-components";
import Portfolio from "../components/Portfolio";

const PrimaryHeader = styled.h1`
    font-size: 2.5em;
    text-align: center;
`;

const PortfolioPage = () => {
    return (
        <>
            <PrimaryHeader>Project Page</PrimaryHeader>
            <Portfolio></Portfolio>
        </>

    )
}

export default PortfolioPage;