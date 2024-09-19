import styled from "styled-components/native";
import themes from "../../themes/themes";
import { Dimensions } from "react-native";

const {height} = Dimensions.get('screen');
const number = 0.06;

export const Layout = styled.View`
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    background-color: ${themes.COLORS.BACKGROUND_COLOR};
    margin-top: ${props => props.layoutMarginTop};
`;

export const Header = styled.View`
    width: 100%;
    height: ${`${height*number}px`};
    background-color: ${themes.COLORS.PURPLE};
    align-items: flex-end;
    flex-direction: row;
`;

export const HeaderTitle = styled.Text`
    color: ${themes.COLORS.WHITE};
    font-size: ${themes.FONT_SIZES.SUBTITLE_SIZE};
    font-weight: bold;
    margin-bottom: ${`${themes.DIMENSIONS.MARGIN_BOTTOM_12PX}px`};
`;