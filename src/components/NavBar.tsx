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
    justify-content: space-between;
    background-color: #000000;
    padding: 1rem;
    height: 180px;
    width: 100% !important;
`;

const NavBar = ({items}: NavBarProps) => {
    return (
        <StyledNav>
            {items.map((item, index) => {
                return (
                    <Link key={index} to={item.to}>{item.label}</Link>
                )
            })}
        </StyledNav>
    );
};

export default NavBar;