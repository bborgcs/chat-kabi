import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* impede rolagem */
  background-color: #ffcdde;
`;

export const SideBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  height: 100%;
  width: 100%;
  overflow: hidden; /* impede vazamento */
`;

export const AcaoVoltar = styled.button`
  background-color: #f5e8aa;
  width: 35px;
  height: 35px;
  color: white;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.4s ease;

  &:hover {
    background-color: #fce98e;
  }
`;
