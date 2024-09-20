import { Header, HeaderTitle, Layout, ProductContainer } from "./styled"
import { Product } from "../../components/Product/Product";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import themes from "../../themes/themes";

export const Details = () => {
    const router = useRoute();
    let productData = "";
    useEffect(() => {
        if (router.params) {
            productData = {
                launchName: router.params?.launchName,
                launchImg: router.params?.launchImg,
                launchPrice: router.params?.launchPrice,
                quantityStock: router.params?.quantityStock,
            }
        }
    }, [router.params]);
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
                />
                
                <HeaderTitle>Detalhes</HeaderTitle>
            </Header>
            <ProductContainer>
                <Product
                    productImage={productData.launchImg}
                    productName={productData.launchName}
                    productPrice={productData.launchPrice}
                    quantityStock={productData.quantityStock}
                />
            </ProductContainer>
        </Layout>
    );
}