import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface NavbarItems {
    label: string;
    to: string;
    icon?: React.ReactNode;
}

interface NavBarProps {
    items: NavbarItems[];
}

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-around;

    background-color: #000000;
    padding: 1rem;
    height: 100px;
    width: 100% !important;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    font-family: 'Gravitas One', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.2rem;
`;

// text-decoration: ${(props) => props.visited ? 'underline' : 'none'};
const VisitTrackingLink = styled(Link)<{visited: boolean}>`
    border-bottom: 2px solid ${(props) => props.visited ? '#ffffff' : 'transparent'};
`;

const NavBar = ({items}: NavBarProps) => {
    const [indexLastClick, setIndexLastClick] = useState<number | null>(null);
    const handleOnClick = (index: number) => {
        setIndexLastClick(index);
    }
    return (
        <StyledNav>
            {items.map((item, index) => {
                return (
                    <VisitTrackingLink
                        visited={indexLastClick === index}
                        key={index}
                        to={item.to}
                        onClick={() => handleOnClick(index)}>{item.label}
                    </VisitTrackingLink>
                )
            })}
        </StyledNav>
    );
};

export default NavBar;