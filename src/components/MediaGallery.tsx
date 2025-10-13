import styled from "styled-components";

interface MediaItem {
    url: string;
    type: 'image' | 'video' | 'audio' | 'document' | 'embed';
}

const StyledGallery = styled.div`
    display: grid;
    grid: auto-flow / 1fr 1fr 1fr;
`;

const mockMediaItems: MediaItem[] = [
    {
        url: "https://www.youtube.com",
        type: 'embed'
    },
    {
        url: "https://www.youtube.com",
        type: 'embed'
    },
    {
        url: "https://www.youtube.com",
        type: 'embed'
    },
    {
        url: "https://www.youtube.com",
        type: 'embed'
    },
]

const MediaGallery = () => {
    return (<StyledGallery>
        {mockMediaItems.map((mediaItem) => (
            <div>{mediaItem.url}</div>
        ))}
    </StyledGallery>
    );
};

export default MediaGallery;