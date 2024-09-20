import { FlatListContainer } from "./styled";
import { Product } from '../Product/Product'
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const FlatListCustomized = ({height, data}) => {
    const navigation = useNavigation()
    return (
        <FlatListContainer flatListContainerHeight={height}>
            <FlatList
                style={{ width: '100%', height: '100%'}}
                data={data}
                renderItem={({ item }) => (
                    <Product
                        productName={item.launch.launchName}
                        productImage={item.launch.launchImg}
                        productPrice={item.launch.launchPrice}
                        quantityStock={item.launch.quantityStock}
                        onPress={() => {
                            const productData = {
                                launchName: item.launch.launchName,
                                launchImg: item.launch.launchImg,
                                launchPrice: item.launch.launchPrice,
                                quantityStock: item.launch.quantityStock
                            }

                            navigation.navigate("Details", productData);
                        }}
                    />
                )}
                numColumns={2}
            />
        </FlatListContainer>
    );
}