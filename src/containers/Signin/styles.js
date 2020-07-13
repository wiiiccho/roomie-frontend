import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
    text-decoration: none;
    color: black;
    
    &:hover {
        font-weight: bold;
    }
`;
