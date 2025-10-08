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
    const [portfolioItems] = usePortfolio([]);

    return (
        <FlexLayout $layoutDirection="column">
            <p>This is the portfolio component.</p>
            {portfolioItems.length > 0 ? (
                portfolioItems.map((item: PortfolioItemState) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
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