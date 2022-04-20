import styled from 'styled-components';


export const LayoutStyle = styled.h1`
    margin: 0;
    padding: 0;
    width: 80vw;
    background-color: white;
    position : absolute;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-auto-rows: 10px;
`;