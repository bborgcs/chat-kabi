import styled from "styled-components";

export const ContainerChat = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 80px 1fr 80px;
  grid-template-areas:
    "topo"
    "info"
    "rodape";
  overflow: hidden;
`;

export const ContainerTitle = styled.div`
  grid-area: topo;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 20px;
`;

export const Title = styled.h1`
  color: #ec709a;
  font-weight: bold;
  font-size: 28px;
  font-family: "Open Sans", sans-serif;
`;

export const ContainerConversa = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
`;

export const ContainerEnvio = styled.div`
  grid-area: rodape;
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 10px;
  background-color: #fff;
`;

export const InputMensagem = styled.input.attrs({ type: "text" })`
  flex: 1;
  height: 35px;
  border: 2px solid #f5e8aa;
  border-radius: 8px;
  padding: 0 10px;
  outline: none;

  &:focus {
    border-color: #fce98e;
  }
`;

export const Submit = styled.input.attrs({ type: "submit" })`
  width: 120px;
  height: 35px;
  background-color: #ec709a;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #ee5494;
  }
`;
