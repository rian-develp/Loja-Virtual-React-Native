import { Header, HeaderTitle, Layout, ProductContainer } from "./styled"
import { Product } from "../../components/Product/Product";
import { useNavigation, useRoute } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import themes from "../../themes/themes";

export const Details = () => {
    const router = useRoute();
    const navigation = useNavigation();
    const launchName = router.params?.launchName;
    const launchPrice = router.params?.launchPrice;
    const launchImg = router.params?.launchImg;
    const quantityStock = router.params?.quantityStock;

    return (
        <Layout>
            <Header
                style={{
                    shadowColor: "#000000",
                    shadowOffset: { width: 6, heigh: 6 },
                    shadowOpacity: 0.6,
                    shadowRadius: 4,
                    elevation: 14
                }}>

                <MaterialIcons
                    name="arrow-back"
                    color={"#FFFFFF"}
                    size={themes.DIMENSIONS.ICON_SIZE_28PX}
                    style={{
                        paddingBottom: 8,
                        paddingStart: 8,
                        paddingRight: 8,
                    }}
                    onPress={()=> {
                        navigation.goBack();
                    }}
                />
                
                <HeaderTitle>Detalhes</HeaderTitle>
            </Header>
            <ProductContainer>
                <Product
                    productName={launchName}
                    productImage={launchImg}
                    productPrice={launchPrice}
                    quantityStock={quantityStock}
                />
            </ProductContainer>
        </Layout>
    );
}