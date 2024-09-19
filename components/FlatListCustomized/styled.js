import styled from "styled-components/native";
import themes from "../../themes/themes";

export const FlatListContainer = styled.View`
    width: 100%;
    height: ${props => props.flatListContainerHeight};
    background-color: ${themes.COLORS.BACKGROUND_COLOR};
`;