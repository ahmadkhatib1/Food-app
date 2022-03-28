import { Link } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-family:'lobster Two',cursive;
font-weight:400;
`;
export const Nav = styled.div`
padding:4rem 0rem;
display:flex;
justify-content:flex-start;
align-items:center;
svg{
    font-size: 2rem;
}
`;