import styled from "styled-components/native";
import themes from "../../themes/themes";
export const ButtonContainer = styled.View`
    width: 75%;
    height: ${props => props.buttonContainerHeight};
    margin-left: ${props => props.buttonContainerMarginStart};
    margin-top: ${props => props.buttonContainerMarginTop};
    position: ${props => props.buttonContainerPosition};
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    background-color: ${themes.COLORS.PURPLE};
    align-items: center;
    justify-content: center;
    border-radius: ${`${themes.DIMENSIONS.BORDER_RADIUS_16PX}px`};
`;

export const ButtonText = styled.Text`
    color: ${themes.COLORS.WHITE};
    font-weight: bold;
    font-size: ${themes.FONT_SIZES.SUBTITLE_SIZE}px;
`;