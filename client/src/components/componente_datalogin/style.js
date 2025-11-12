import styled from "styled-components";

export const Container = styled.div`
    width: 100vh;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    gap: 50px;

    background-color: white;
`;

export const Image = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    margin-top: 0px;
`;

export const BoxIcon = styled.div`
    text-align: center;
    width: 100%;
    height: 150px;
    margin-bottom: 100px;
`;

export const DataBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    gap: 35px;
    padding: 20px;
`;

export const InputName = styled.input.attrs({ type: 'name' })`
    display: inline-block;
    width: 100%;
    height: 30px;
    border: 0px;
    border-bottom: 2px solid #f5e8aa;
    border-radius: 3px;
    margin-bottom: 20px;
    padding-left: 10px;


    &:focus {
        outline: none;
        border: 1px solid #fce98eff;
        border-radius: 4px;
    } 

`;

export const Submit = styled.input.attrs({ type: 'submit' })`
    box-sizing: border-box;
    width: 300px;
    height: 35px;
    background-color: #ec709a;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border-radius:3px;
    border: 0px;
    cursor: grab;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &:hover {
        background-color: #ee5494ff;
    }
`
export const Title = styled.h1`
    color: #ec709a;
    font-weight: bold;
    font-size: 32px;
    font-family: 'Open Sans', sans-serif;
`;