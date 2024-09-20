import { Layout, Header, HeaderTitle } from "./styled";
import { Dimensions, StatusBar } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import themes from "../../themes/themes";
import { ButtonCustomized } from "../../components/Button/ButtonCustomized";
import { FlatListCustomized } from '../../components/FlatListCustomized/FlatListCustomized';
import { ViewModel } from '../../viewModel/ViewModel';
import {useState}from 'react';

const { width } = Dimensions.get('screen');

export const Home = () => {
    const viewModel = new ViewModel();
    const result = viewModel.getAllLaunchs();
    
    return (
        <Layout layoutMarginTop={`${StatusBar.currentHeight}px`}>
            <StatusBar backgroundColor={themes.COLORS.PURPLE} />
            <Header>
                <MaterialIcons
                    style={{ paddingHorizontal: themes.DIMENSIONS.PADDING_HORIZONTAL_12PX, marginBottom: themes.DIMENSIONS.MARGIN_BOTTOM_12PX }}
                    name="arrow-back"
                    color={themes.COLORS.WHITE}
                    size={24} />
                <HeaderTitle>Home</HeaderTitle>
            </Header>

            <FlatListCustomized
                data={result}
                height={'81.65%'} />
        </Layout>
    );
}