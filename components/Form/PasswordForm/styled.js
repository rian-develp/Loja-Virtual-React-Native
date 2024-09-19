import styled from "styled-components/native";

export const ContainerForm = styled.View`
    flex-direction: row;
    width: ${100}%;
    height: ${100}%;
    padding: 8px;
    align-items: center;
    justify-content: flex-start;
`;
export const Container = styled.View`
    flex-direction: column;
    width: ${90}%;
    height: 64px;
    padding: 8px;
    margin-top: ${(props) => props.containerMarginTop || 0};
    margin-left: ${(props) => props.containerMarginLeft || 16}px;
    border-radius: 8px;
    border-width: 1px;
    border-color: ${(props) => props.containerBorderColor};
`;