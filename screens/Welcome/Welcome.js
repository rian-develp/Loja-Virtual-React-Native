import { Layout } from '../Welcome/styled'
import * as Animatable from 'react-native-animatable';
import themes from '../../themes/themes'
import { ButtonAnimated } from '../../components/Button/ButtonAnimated';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const text = "Seja bem vindo ao melhor aplicativo da maior lancheria do mundo essa é uma versão para testes";
export const Welcome = () => {
    const navigation = useNavigation();
    return (
        <Layout>
            <Animatable.Image
                animation="flipInY"
                style={{ width: '100%', height: '25%' }}
                source={require("../../assets/logo_marca.png")}
                resizeMode="contain"
            />


            <Animatable.View
                animation="fadeInUp"
                delay={400}
                style={{
                    width: '100%',
                    height: '45%',
                    marginHorizontal: themes.DIMENSIONS.MARGIN_HORIZONTAL_8PX,
                    borderTopRightRadius: themes.DIMENSIONS.BORDER_RADIUS_16PX,
                    borderTopLeftRadius: themes.DIMENSIONS.BORDER_RADIUS_24PX,
                    backgroundColor: themes.COLORS.WHITE,
                    top: '15%',
                }}>
                
                <Text style={{
                    color: 'black', 
                    fontWeight: 'bold', 
                    fontSize: themes.FONT_SIZES.SUBTITLE_SIZE,
                    top: '8%',
                    marginHorizontal: themes.DIMENSIONS.MARGIN_HORIZONTAL_8PX
                }}> 
                    {text} 
                </Text>
                <ButtonAnimated
                top={'60%'}
                buttonTitle="Entrar"
                marginStart={themes.DIMENSIONS.MARGIN_START_40PX}
                buttonAnimation="fadeInLeft"
                animationDeley={860}
                onPress={() => {navigation.navigate("SignUp");}}
                />
            </Animatable.View>
        </Layout>
    );
}