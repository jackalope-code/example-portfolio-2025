import styled from "styled-components";

const OuterGrid = styled.div`
    display: grid;
    grid: auto-flow / 1fr 1fr;
`;

const InnerGrid = styled.div`
    display: grid;
    grid: auto-flow / 1fr 1fr;
`;

const Resume = styled.img`

`;

const HeadshotsAndResumePage = () => {
    return (
        <OuterGrid>
            <InnerGrid>
                <div>Headshot placeholder</div>
                <div>Headshot placeholder</div>
                <div>Headshot placeholder</div>
                <div>Headshot placeholder</div>
            </InnerGrid>
            <Resume />
        </OuterGrid>
    )
}

export default HeadshotsAndResumePage;