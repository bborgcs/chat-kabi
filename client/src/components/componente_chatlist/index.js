import React from "react";
import {    CardChat,
            Title,
            DivInfo,
            Data,
            Container,
 } from './style';

export default function ChatCard({ chat }) {

    const nome = chat.nome.toUpperCase();
    const descricao = chat.descricao;

    return(
        <>
            <Container>
                <CardChat>
                    <DivInfo>
                        <Title >{nome}</Title>
                    </DivInfo>
                    <DivInfo >   
                        <Data>{descricao}</Data>
                    </DivInfo>

                </CardChat>
        </Container>
    </>
)
}
