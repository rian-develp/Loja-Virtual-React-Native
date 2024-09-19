import styled from "styled-components/native";
import themes from '../../themes/themes'
export const Layout = styled.SafeAreaView`
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${themes.COLORS.BACKGROUND_COLOR};
    margin-top: ${props => props.layoutMarginTop};
`;