import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 10% 1fr;
    min-width: 100vh;
    min-height: 100vh;

    background-color: #ffcddeff;
`;

export const SideBar = styled.div`
    display: flex;
    justify-content: center;
`;

export const ChatBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: #fffcfcff;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`;

export const ContainerChats = styled.div`
margin-top: 250px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-width: 100vh;
    min-height: 100vh;

    @media (max-width: 800px) {
        grid-template-columns: 1fr; 
        gap: 20px;
    }
`;