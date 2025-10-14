import styled from "styled-components";
import DownloadableImage from "../components/DownloadableImage";

const OuterGrid = styled.div`
    display: grid;
    grid: auto-flow / 1fr 1fr;
    grid-gap: 30px;
    padding: 30px;
`;

const InnerGrid = styled.div`
    display: grid;
    grid: auto-flow / 1fr 1fr;
    grid-layout: space-evenly;
    grid-gap: 30px;
`;

const Resume = styled.img`

`;

const PageStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #8ace00;
`;

const HeadshotsAndResumePage = () => {
    return (
        <PageStyle>
            <OuterGrid>
                <InnerGrid>
                    <DownloadableImage src="https://picsum.photos/seed/headshot-1/800/1000" alt="headshot" name={""} />
                    <DownloadableImage src="https://picsum.photos/seed/headshot-2/800/1000" alt="headshot" name={""} />
                    <DownloadableImage src="https://picsum.photos/seed/headshot-3/800/1000" alt="headshot" name={""} />
                    <DownloadableImage src="https://picsum.photos/seed/headshot-4/800/1000" alt="headshot" name={""} />
                </InnerGrid>
                <DownloadableImage src="https://picsum.photos/seed/resume/1080/1920" alt="resume" name={""} />
            </OuterGrid>
        </PageStyle>
    )
}

export default HeadshotsAndResumePage;