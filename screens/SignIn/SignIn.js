import { Image, Dimensions, ScrollView, Alert, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FormsContainer, ImageContainer, Layout } from "./styled";
import { Form } from '../../components/Form/Form';
import { PasswordForm } from '../../components/Form/PasswordForm/PasswordForm';
import { ButtonCustomized } from '../../components/Button/ButtonCustomized';
import { useRef, useState, useEffect } from "react"
import themes from "../../themes/themes";
import { ViewModel } from "../../viewModel/ViewModel"
import { validateUserAndPassword } from "../../functions/validateUserAndPassword";

const { width } = Dimensions.get('screen');

export const SignIn = () => {

    const navigation = useNavigation();
    const router = useRoute();
    const refUserName = useRef("");
    const refUserPassword = useRef("");
    const [userNameError, setUserNameError] = useState('');
    const [userPasswordError, setUserPasswordError] = useState('');

    const handleUserName = (text) => {
        refUserName.current = text;
    }

    const handleUserPassword = (text) => {
        refUserPassword.current = text;
    }

    useEffect(() => {
        if(router.params){
            refUserName.current = router.params?.userName;
            refUserPassword.current = router.params?.userPassword;
        }
    },[router.params]);

    return (
        <Layout>
            <ScrollView
                style={{ width: "100%" }}
                contentContainerStyle={{ height: "100%", paddingBottom: 64 }}>
                <ImageContainer>
                    <Image
                        style={{
                            width: parseInt(width * 0.8),
                            height: parseInt(width / 1.6)
                        }}
                        source={require("../../assets/logo_marca.png")}
                        resizeMode='contains'
                    />
                </ImageContainer>

                <FormsContainer
                    formsContainerHeight={parseInt(width / 1.12)}>

                    <Form
                        color="#ffffff"
                        marginTop={`${themes.DIMENSIONS.MARGIN_TOP_24PX}px`}
                        marginLeft={4}
                        label="Nome e sobrenome"
                        placeHolder="Ex: Joana Silveira"
                        iconName="person"
                        keyboardType="text"
                        onChangeText={(text) => {
                            handleUserName(text);
                            setUserNameError('');
                        }}
                        error={userNameError}
                    />

                    <PasswordForm
                        startIconName="lock"
                        marginLeft={4}
                        marginTop={`${themes.DIMENSIONS.MARGIN_TOP_36PX}px`}
                        placeholder="Crie uma senha"
                        label="Senha"
                        onChangeText={(text) => {
                            handleUserPassword(text);
                            setUserPasswordError('');
                        }}
                        error={userPasswordError}
                    />

                    <ButtonCustomized
                        buttonTitle="Fazer Login"
                        height={parseInt(width * 0.166)}
                        position={"static"}
                        marginTop={themes.DIMENSIONS.MARGIN_TOP_36PX}
                        onPress={() => {
                        }}
                    />

                    <Text
                        style={{
                            backgroundColor: themes.COLORS.TEXT_COLOR,
                            fontSize: 16,
                            fontWeight: 'bold',
                            marginHorizontal: 8,
                            marginTop: 24
                        }}
                        onPress={() => {
                            const stringName = refUserName.toString();
                            const stringPassword = refUserPassword.toString();
                            const result = ViewModel.prototype.signIn(stringName, stringPassword);
                
                            result ? navigation.navigate("Home", stringName) : Alert.alert("Algo deu errado");
                        }}>
                        Se você ainda não se cadastrou clique aqui e crie uma conta no melhor aplicativo de lanches do Brasil
                    </Text>
                </FormsContainer>
            </ScrollView>
        </Layout>
    );
}