import { Image, Dimensions, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FormsContainer, ImageContainer, Layout } from "./styled";
import { Form } from '../../components/Form/Form';
import { PasswordForm } from '../../components/Form/PasswordForm/PasswordForm';
import { ButtonCustomized } from '../../components/Button/ButtonCustomized';
import { useRef, useState } from "react"
import themes from "../../themes/themes";
import { ViewModel } from "../../viewModel/ViewModel";
import { validateUserAndPassword } from "../../functions/validateUserAndPassword";

const { width } = Dimensions.get('screen');

export const SignUp = () => {

    const navigation = useNavigation();
    const refUserName = useRef("");
    const refUserPassword = useRef("");
    const [userNameError, setUserNameError] = useState('');
    const [userPasswordError, setUserPasswordError] = useState('');

    const handleUserName = (text) => {
        refUserName.current = text;
    }

    const handleUserPàssword = (text) => {
        refUserPassword.current = text;
    }
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
                    formsContainerHeight={parseInt(width / 1.2)}>

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
                            handleUserPàssword(text);
                        }}
                        error={userPasswordError}
                    />
                </FormsContainer>

                <ButtonCustomized
                    buttonTitle="Fazer Cadastro"
                    height={parseInt(width*0.166)}
                    position={"static"}
                    left="12%"
                    onPress={()=> {
                        const stringName = refUserName.current;
                        const stringPassword = refUserPassword.current;
                        
                        const validateResult = validateUserAndPassword(stringName, stringPassword, setUserNameError, setUserPasswordError);
                        
                        if(validateResult){
                            const response = ViewModel.prototype.signUp(stringName, stringPassword);
                            if(response){
                                const dataUser = {
                                    userName: stringName,
                                    userPassword: stringPassword
                                }
                                navigation.navigate("SignIn", dataUser);
                            }
                        }
                    }}
                />
            </ScrollView>
        </Layout>
    );
}