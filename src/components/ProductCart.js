import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { screenWidth } from "../utils/Scalling.js";
import { themecolors } from "../utils/Constants.js";

const ProductCart = ({ image, discountImage, onAddToCart, isFavorite }) => {
    return (
        <View style={styles.productItem}>
            {/* Discount Badge */}
            {discountImage && (
                <View style={[styles.discountBadge, { width: 24, height: 38 }]}>
                    <Image source={discountImage} resizeMode="contain" style={styles.disImage} />
                </View>
            )}

            {/* Heart Icon */}
            <View style={[styles.heartIcon,{ width: 28, height: 28 }]}>
                <Image
                style={styles.heartImg}
                resizeMode="contain"
                    source={
                        isFavorite
                            ? require("../assets/heart-filled.png")
                            : require("../assets/heart.png")
                    }
                />
            </View>


            {/* Product Image */}
            <Image style={styles.itemImage} resizeMode="contain" source={image} />

            {/* Add to Cart Button */}
            <TouchableOpacity style={styles.addToCartBtn} onPress={onAddToCart}>
                <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProductCart;

const styles = StyleSheet.create({
    productItem: {
        backgroundColor: "#fff",
        width: screenWidth * 0.4, // ✅ 40% width
        height: screenWidth * 0.55,
        justifyContent: "center",
        alignItems: "center",
        marginRight: screenWidth * 0.03,
        borderRadius: 12,
        overflow: "hidden",

        // ✅ Grey Shadow
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 5,
    },
    itemImage: {
        width: "85%",
        height: "70%",
    },
    discountBadge: {
        position: "absolute",
        top: 8,
        left: 8,
        width: 28,
        height: 28,
        resizeMode: "contain",
    },
    heartIcon: {
        position: "absolute",
        top: 8,
        right: 8,
        width: 22,
        height: 22,
        resizeMode: "contain",
    },
    addToCartBtn: {
        backgroundColor: themecolors.primary,
        height: 36,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        alignSelf: "center",
        width: "100%",
    },
    addToCartText: {
        fontSize: 13,
        fontWeight: "bold",
        textAlign: "center",
        color: themecolors.white,
    },
    disImage: {
        width: "100%",
        height: "100%"
    },
     heartImg: {
        width: "100%",
        height: "100%"
    }
});
