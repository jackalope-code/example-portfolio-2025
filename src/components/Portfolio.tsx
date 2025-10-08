import { useState } from "react";
import styled from "styled-components";

interface PortfolioProps {
    $layoutDirection?: 'row' | 'column';
}

interface PortfolioItemState {
    id: string
    title: string
    description: string
    mediaUrls?: string[]
}

const mockData: PortfolioItemState[] = [
{
    id: '1',
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus magna lacus. Sed tincidunt vitae lectus lacinia fringilla. Sed lobortis eros ut pharetra efficitur. Fusce finibus id nisi sit amet condimentum. Quisque quis lorem nulla. In luctus nulla at lectus cursus commodo. Praesent laoreet ullamcorper accumsan.',
    mediaUrls: ['https://via.placeholder.com/150', 'https://via.placeholder.com/200']
},
{
    id: '2',
    title: 'Project 2',
    description: 'Nulla eu velit vel mauris sagittis mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin efficitur dignissim nibh, vel placerat lorem cursus a. Phasellus non justo eu leo faucibus sagittis non quis ante. In fringilla volutpat lacus sit amet finibus. Aliquam sodales sagittis tortor vel lacinia. Mauris a sem turpis. Vivamus at consequat enim. Nulla facilisi. Suspendisse feugiat gravida enim nec accumsan. Sed sit amet lectus tempor ligula porta fermentum aliquam sed magna. Donec fermentum eget erat at tincidunt.',
    mediaUrls: ['https://via.placeholder.com/250']
},
{
    id: '3',
    title: 'Project 3',
    description: 'Etiam consequat, urna at mollis tincidunt, purus nunc lacinia lacus, id auctor turpis neque eget est. Donec placerat ullamcorper diam id tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacus dolor, sollicitudin id tempor sed, elementum sit amet ante. Sed sit amet quam sit amet purus dictum laoreet a ut ligula. Sed tempor, ipsum vel laoreet tincidunt, ipsum lacus sollicitudin sem, a finibus purus nibh non mi. Nullam vitae sagittis nulla. Proin consequat pulvinar nulla, eu condimentum elit porttitor vitae. Curabitur urna leo, egestas id pretium nec, fringilla at metus. Quisque hendrerit ipsum quis mauris tempor pulvinar. Donec rutrum lacinia aliquam. Suspendisse aliquam est augue, vitae accumsan metus egestas eget. Nullam in neque diam. Donec lacinia lacus in est fermentum rhoncus.',
    mediaUrls: []
},
{
    id: '4',
    title: 'Project 4',
    description: 'Integer non arcu ut lacus ullamcorper sagittis. Aliquam congue ante erat, ac dictum risus tristique sit amet. Sed elit turpis, pulvinar non finibus id, feugiat id leo. Nam et ligula nisl. Donec dictum tortor quam, ac ornare massa volutpat vel. Etiam tristique felis lacus, in fringilla metus scelerisque id. Nunc metus erat, rutrum vitae fringilla ac, mattis sed ante.',
    mediaUrls: ['https://via.placeholder.com/1000', 'https://via.placeholder.com/350', 'https://via.placeholder.com/400']
},
{
    id: '5',
    title: 'Project 5',
    description: 'Cras aliquam euismod massa ut placerat. In accumsan posuere purus semper commodo. Sed venenatis, nulla quis bibendum aliquam, lectus ex consequat odio, ac dignissim orci nisi et dui. Integer malesuada elit eget tortor mollis volutpat. Cras egestas justo et cursus sagittis. Nunc pharetra quam ac erat venenatis sodales eget quis libero. Proin in odio nec nunc mattis efficitur. Integer mattis commodo dolor, non blandit quam blandit in. Curabitur viverra odio quis elit placerat, et pharetra sem viverra. Suspendisse ac fringilla lacus, fringilla ullamcorper leo. Duis sed convallis ante. ',
    mediaUrls: ['https://via.placeholder.com/450']
},

]

const FlexLayout = styled.div<PortfolioProps>`
    display: flex;
    flex-direction: ${(props) => props.$layoutDirection || 'row'};
`

/*
// TODO: USE WITH CONTEXT
// TODO: PERSISTENCE LAYER (LOCAL STORAGE / BACKEND)
const usePortfolio = (initialItems: PortfolioItemState[] = []) => {
    const [items, setItems] = useState<PortfolioItemState[]>(initialItems);

    const addItem = (item: PortfolioItemState) => {
        setItems([...items, item]);
    };
    const removeItem = (id: string) => {
        setItems(items.filter(item => item.id !== id));
    };
    const updateItem = (updatedItem: PortfolioItemState) => {
        setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
    };
    return { items, addItem, removeItem, updateItem };
}
*/

// Temporary simple hook until context is implemented
const usePortfolio = (initialItems: PortfolioItemState[] = []) => {
    const [items, setItems] = useState<PortfolioItemState[]>(initialItems);
    return [items, setItems] as const;
}

const Portfolio = ({}: PortfolioProps) => {
    //const [portfolioItems, setPortfolioItems] = usePortfolio([]);
    const [portfolioItems] = usePortfolio(mockData);

    return (
        <FlexLayout $layoutDirection="column">
            <p>This is the portfolio component.</p>
            {portfolioItems.length > 0 ? (
                portfolioItems.map((item: PortfolioItemState) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
                ))
            ) : (
                <p>No portfolio items available.</p>
            )}
        </FlexLayout>
    )
}

export default Portfolio;