import { ButtonContainer, Button, ButtonText } from "./styled"

export const ButtonCustomized = ({ buttonTitle, marginTop, marginStart, top, position, height, left, onPress = () => {}}) => {
    return (
        <ButtonContainer
            style={{top: top, left: left}}
            buttonContainerHeight={`${height}px`}
            buttonContainerPosition={position}
            buttonContainerMarginStart={`${marginStart}px`}
            buttonContainerMarginTop={`${marginTop}px`}>
            <Button onPress={onPress}>
                <ButtonText>{buttonTitle}</ButtonText>
            </Button>
        </ButtonContainer>
    );
}