
//import ExampleDoc from '......src/assets/files/exampleDoc.pdf'
import styled from 'styled-components';

interface DownloadableImageProps {
    src: string;
    name: string;
    alt?: string;
}

const ContainerStyle = styled.div`
    display: static;
`;

const DownloadableImage = ({src, name, alt}: DownloadableImageProps) => {
    return (
        <ContainerStyle>
            <img src={src} alt={alt} />
            <a href={src} download={name} target='_blank'>
                <input type="button" value="Download" />
            </a>
        </ContainerStyle>
    );
};

export default DownloadableImage;