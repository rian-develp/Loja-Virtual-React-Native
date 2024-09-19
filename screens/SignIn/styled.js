import styled from "styled-components/native";

export const Layout = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    background-color: ${themes.COLORS.BACKGROUND_COLOR};
    align-items: flex-start;
    flex-direction: column;
`;

export const ImageContainer = styled.View`
    width: 100%;
    height: 32%;
    align-items: center;
    justify-content: center;
    margin-top: 20%;
`;

export const FormsContainer = styled.View`
    width: 94%;
    height: ${props => props.formsContainerHeight}px;
    background-color: ${themes.COLORS.WHITE};
    align-self: center;
    border-radius: ${`${themes.DIMENSIONS.BORDER_RADIUS_24PX}px`};
    align-items: center;
    top: 10%;
`;