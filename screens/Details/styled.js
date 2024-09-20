import styled from "styled-components/native";
import themes from "../../themes/themes";

export const Layout = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    background-color: ${themes.COLORS.BACKGROUND_COLOR};
    align-items: center;
`;

export const ProductContainer = styled.View`
    width: 100%;
    height: 30%;
    top: 10%;
    align-items: center;
`;

export const Header = styled.View`
    width: 100%;
    height: 9%;
    background-color: ${themes.COLORS.HEADER_COLOR};
    flex-direction: row;
    align-items: flex-end;
`;


export const HeaderTitle = styled.Text`
    font-size: ${`${themes.DIMENSIONS.BORDER_RADIUS_24PX}px`};
    font-weight: bold;
    color: ${themes.COLORS.WHITE};
    padding-bottom: 8px;
`;