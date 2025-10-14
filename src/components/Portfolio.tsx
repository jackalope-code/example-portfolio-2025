import { useState } from "react";
import styled from "styled-components";

interface PortfolioProps {
    $layoutDirection?: 'row' | 'column';
}

interface PortfolioProps {
    $layoutDirection?: 'row' | 'column';
}

interface DateString {
    month: string;
    year?: string;
}

interface MediaItem {
    url: string;
    type: 'image' | 'video' | 'audio' | 'document';
}

interface PortfolioItemState {
    id: string;
    title: string;
    jobTitle: string;
    employer: string;
    startDate: DateString;
    endDate?: DateString;
    description: string;
    mediaItems?: MediaItem[];
    slug?: string;
}

// const mockData: PortfolioItemState[] = [
//     {
//         id: '1',
//         title: 'Senior Product Designer — Marketing Site Redesign',
//         jobTitle: 'Senior Product Designer',
//         employer: 'Acme Co',
//         startDate: { month: 'May', year: '2024' },
//         endDate: { month: 'Aug', year: '2024' },
//         description:
//             'Led a cross-functional team to redesign Acme Co\'s marketing site, improving conversion and accessibility.',
//         mediaItems: [
//             { url: 'https://picsum.photos/seed/acme-1/800/533', type: 'image' },
//             { url: 'https://picsum.photos/seed/acme-2/800/533', type: 'image' },
//         ],
//     },
//     {
//         id: '5',
//         title: 'Freelance Photographer — Portfolio',
//         jobTitle: 'Photographer',
//         employer: 'Freelance',
//         startDate: { month: 'Jul', year: '2020' },
//         description:
//             'Client work focused on editorial and lifestyle photography for small brands and publications.',
//         mediaItems: [{ url: 'https://picsum.photos/seed/freelance-1/900/600', type: 'image' }],
//     },
//     {
//         id: '5',
//         title: 'Last Item Title',
//         description:
//             'Cras aliquam euismod massa ut placerat. In accumsan posuere purus semper commodo. Sed venenatis, nulla quis bibendum aliquam, lectus ex consequat odio, ac dignissim orci nisi et dui. Integer malesuada elit eget tortor mollis volutpat. Cras egestas justo et cursus sagittis. Nunc pharetra quam ac erat venenatis sodales eget quis libero. Proin in odio nec nunc mattis efficitur. Integer mattis commodo dolor, non blandit quam blandit in. Curabitur viverra odio quis elit placerat, et pharetra sem viverra. Suspendisse ac fringilla lacus, fringilla ullamcorper leo. Duis sed convallis ante.',
//             slug: 'project-5',
//             coverImage: 'https://picsum.photos/seed/project5-cover/1200/800',
//             tags: ['photography'],
//             featured: false,
//             link: '/portfolio/project-5',
//             createdAt: '2020-07-12T00:00:00.000Z',
//             client: 'Freelance',
//             role: 'Photographer',
//             tech: ['Lightroom'],
//             mediaItems: [{ url: 'https://picsum.photos/seed/project5-1/900/600', type: 'image' }],
//     },
// ];

const mockData: PortfolioItemState[] = [
                    {
                        id: '1',
                        title: 'Senior Product Designer — Marketing Site Redesign',
                        jobTitle: 'Senior Product Designer',
                        employer: 'Acme Co',
                        startDate: { month: 'May', year: '2024' },
                        endDate: { month: 'Aug', year: '2024' },
                        description:
                            'Led a cross-functional team to redesign Acme Co\'s marketing site, improving conversion and accessibility.',
                        mediaItems: [
                            { url: 'https://picsum.photos/seed/acme-1/800/533', type: 'image' },
                            { url: 'https://picsum.photos/seed/acme-2/800/533', type: 'image' },
                        ],
                    },
                    {
                        id: '2',
                        title: 'Product Designer — Mobile App',
                        jobTitle: 'Product Designer',
                        employer: 'Beta LLC',
                        startDate: { month: 'Nov', year: '2023' },
                        endDate: { month: 'Mar', year: '2024' },
                        description:
                            'Designed key flows and reusable component patterns for Beta LLC\'s mobile product.',
                        mediaItems: [{ url: 'https://picsum.photos/seed/beta-1/800/533', type: 'image' }],
                    },
                    {
                        id: '3',
                        title: 'UX Researcher — Internal Tools',
                        jobTitle: 'UX Researcher',
                        employer: 'Internal',
                        startDate: { month: 'Aug', year: '2022' },
                        description:
                            'Conducted qualitative and quantitative research to surface pain points in internal tooling and proposed prioritized improvements.',
                        mediaItems: [],
                    },
                    {
                        id: '4',
                        title: 'Art Director — Brand & Print',
                        jobTitle: 'Art Director',
                        employer: 'Gamma Studio',
                        startDate: { month: 'Feb', year: '2021' },
                        endDate: { month: 'Jun', year: '2021' },
                        description:
                            'Oversaw visual direction for a series of print campaigns and collaborated with photographers and illustrators.',
                        mediaItems: [
                            { url: 'https://picsum.photos/seed/gamma-1/1200/800', type: 'image' },
                            { url: 'https://picsum.photos/seed/gamma-2/800/533', type: 'image' },
                            { url: 'https://picsum.photos/seed/gamma-3/800/533', type: 'image' },
                        ],
                    },
                    {
                        id: '5',
                        title: 'Freelance Photographer — Portfolio',
                        jobTitle: 'Photographer',
                        employer: 'Freelance',
                        startDate: { month: 'Jul', year: '2020' },
                        description:
                            'Client work focused on editorial and lifestyle photography for small brands and publications.',
                        mediaItems: [{ url: 'https://picsum.photos/seed/freelance-1/900/600', type: 'image' }],
                    },
                ];

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

interface SectionDetailsProps {
    item: PortfolioItemState;
}

const SectionDetails = ({item}: SectionDetailsProps) => {
    return (
        <>
            {
                item.mediaItems && item.mediaItems.length > 0 && (
                    <>
                    <p>{item.description}</p>
                    {item.mediaItems.map((media, index) => {
                    if (media.type === 'image') {
                        return <img key={index} src={media.url} alt={`Media ${index + 1}`} style={{maxWidth: '100%', height: 'auto', margin: '10px 0'}} />
                    }})}
                </>
            )}
        </>
    )
}

const Portfolio = ({}: PortfolioProps) => {
    //const [portfolioItems, setPortfolioItems] = usePortfolio([]);
    const [portfolioItems] = usePortfolio(mockData);

    // TODO: Add divider line down center with items alternating sides
    // TODO: Expand/Collapse long descriptions
    // TODO: Expand/collapse portfolio items to show more details and media
    return (
        <GridLayout className="section-container">
            <div className="verticalLine" style={{position: "absolute"}}></div>
            {portfolioItems.length > 0 ? (
                portfolioItems.map((item: PortfolioItemState) => (
                <section className="diagonal" style={{padding: '20px', margin: '10px 0', background: '#f0f0f0'}} key={item.id}>
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <SectionDetails item={item}></SectionDetails>
                    </div>
                 </section>
                ))
            ) : (<div>Loading</div>)
            }
        </GridLayout>
        );
}

export default Portfolio;