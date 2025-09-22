import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import CustomHomeHeader from '../components/CustomHomeHeader.js';
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeadingText from "../components/CustomHeadingText.js";
import { screenWidth } from "../utils/Scalling.js";
import { themecolors } from "../utils/Constants.js";
import CategoryCart from '../components/CategoryCart.js';
import BannerImage from "../components/BannerImage.js"
import ProductCart from "../components/ProductCart.js"
import Carousel from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";
import {renderItem} from "../utils/renderItem.js"
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
     const progress = useSharedValue(0);
         const navigation = useNavigation();
    const imagesLists = [
        require("../assets/healthBg.png"),
        require("../assets/sale.png"),
        require("../assets/healthBg.png"),
    ];
    return (
        <SafeAreaView edges={["top", "bottom"]}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 120, backgroundColor: 'white' }} // ✅ recommended bottom spacing
            >
                <CustomHomeHeader />

                {/* SLIDER */}
                <View
                    id="carousel-component"
                    dataSet={{ kind: "basic-layouts", name: "parallax" }}>
                    <Carousel
                        autoPlayInterval={2000}
                        autoPlay={false}
                        data={imagesLists}
                        height={175}
                        loop={true}
                        pagingEnabled={true}
                        snapEnabled={true}
                        width={screenWidth}
                        style={{
                            width: screenWidth,
                        }}
                        mode="parallax"
                        modeConfig={{
                            parallaxScrollingScale: 0.9,
                            parallaxScrollingOffset: 60,
                        }}
                        onProgressChange={progress}
                        renderItem={renderItem({ rounded: true })}
                    />
                </View>

                {/* CATEGORIES */}
                <CategoryCart />

                {/* BANNER */}
                <BannerImage />

                {/* PRODUCTS */}
                <View style={{ backgroundColor: "white" }}>
                    <CustomHeadingText title="Top Products" />
                    <View style={{ backgroundColor: "white", height: screenWidth * 0.65 }}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.productsWrapper}
                        >
                            <ProductCart
                                image={require("../assets/products/1.png")}
                                discountImage={require("../assets/discount.png")}
                                isFavorite={false}
                                onAddToCart={() => navigation.navigate('MyCartScreen',{productName:'Ellora Natural Seeds',ImageName:'1'})}
                            />
                            <ProductCart
                                image={require("../assets/products/1.png")}
                                discountImage={require("../assets/discount.png")}
                                isFavorite={false}
                                onAddToCart={() => console.log("Added 2")}
                            />
                            <ProductCart
                                image={require("../assets/products/1.png")}
                                discountImage={require("../assets/discount.png")}
                                isFavorite={false}
                                onAddToCart={() => console.log("Added 3")}
                            />
                            <ProductCart
                                image={require("../assets/products/1.png")}
                                discountImage={require("../assets/discount.png")}
                                isFavorite={false}
                                onAddToCart={() => console.log("Added 4")}
                            />
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    categoryItem: {
        backgroundColor: '#DADADA',
        width: screenWidth * 0.35,
        height: screenWidth * 0.45,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: screenWidth * 0.01,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    itemImage: {
        width: '90%',
        height: '90%',
    },
    itemText: {
        fontSize: 12,
        textAlign: "center",
        color: themecolors.white,
    },
    categoriesWrapper: {
        paddingLeft: 20,
        marginTop: 10,
    },
    productsWrapper: {
        paddingLeft: 20,
        marginTop: 10,
    },
});
