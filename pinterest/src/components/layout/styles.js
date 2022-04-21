import styled from 'styled-components';


export const LayoutStyle = styled.h1`
    margin-top: 56px;
    padding: 0;
    width: 92vw;
    background-color: white;
    position : absolute;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-auto-rows: 10px;
    justify-content: center;
`;