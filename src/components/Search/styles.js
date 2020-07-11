import styled from 'styled-components';
import searchIcon from '../../assets/static/search.svg';

export const SearchContainer = styled.div`
   width: 80%;
    border-radius: 100px;
    border: 1px solid #dfe1e5;
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: rgba(255, 255, 255, 0.52);
    &:hover {
        box-shadow: 0 1px 6px 0 #20212447;
        border: 2px solid #c3d233;
    }
`;

export const SearchItem = styled.input`
    width: inherit;
    height: 40px;
    border: none;
    outline: none;
    background: none;
`;

export const Title = styled.h2`
    text-align: center;
`;

export const SearchIconItem = styled.span`
background-image: url(${searchIcon});
background-repeat: no-repeat;
background-position: center;
align-self: center;
background-size: contain;
width: 18px;
height: 18px;
`;
