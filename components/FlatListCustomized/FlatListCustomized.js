import { FlatListContainer } from "./styled";
import { Product } from '../Product/Product'
import { FlatList } from "react-native";

export const FlatListCustomized = ({height, data}) => {
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
                    />
                )}
                numColumns={2}
            />
        </FlatListContainer>
    );
}