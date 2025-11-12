import styled from "styled-components";

export const CardChat = styled.div`
    width: 70%;
    height:100px;
    border-radius: 5px;
    border: 2px solid #f5e8aa;;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: white;

    display:grid;
    grid-template-rows: 1fr 1fr;

`;

export const Title = styled.h1`
    color: black;
    margin-top: 15px;
    font-size: 20px;
    text-align: center;
    font-weight: bold;

`

export const Data = styled.h3`
    color: #555555;
    font-size: 16px;
    
`;

export const DivInfo = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 10px;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
`;