import { ImageBackground, TouchableOpacity, Dimensions, Text} from "react-native";
import { ProductContainer } from "./styled";
import themes from "../../themes/themes";

const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');

export const Product = ({ productName, productPrice, productImage, quantityStock, onPress=()=>{}}) => {
    return (
        <TouchableOpacity
            style={{
                width: (parseInt(width / 2.26)),
                height: (parseInt(height * 0.26)),
                marginVertical: 24,
                marginHorizontal: themes.DIMENSIONS.MARGIN_HORIZONTAL_12PX,
            }}
            activeOpacity={0.9}
            onPress={onPress}>
            <ProductContainer productContainerMarginTop={'24px'}>
                <ImageBackground
                    style={{
                        width: '100%',
                        height: '70%',
                        position:"absolute",
                        marginTop: 24
                    }}
                    resizeMode="contain"
                    source={{ uri:productImage }}
                />

                <Text 
                    style={{
                        color: 'black', 
                        fontWeight: 'bold', 
                        fontSize: themes.FONT_SIZES.TEXT_SIZE,
                        alignSelf: 'center',
                        top: "70%"
                    }}>
                Nome: {productName}
                </Text>

                
                <Text
                    style={{
                        color: 'black', 
                        fontWeight: 'bold', 
                        fontSize: themes.FONT_SIZES.TEXT_SIZE,
                        alignSelf: 'center',
                        top: "70%"
                    }}>
                    Preço R${productPrice}
                </Text>

                <Text
                    style={{
                        color: 'black', 
                        fontWeight: 'bold', 
                        fontSize: themes.FONT_SIZES.TEXT_SIZE,
                        alignSelf: 'center',
                        top: "70%"
                    }}>
                    Quantidade: {quantityStock}
                </Text>
            </ProductContainer>
        </TouchableOpacity>
    );
}