import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
} from "react-native";
import { themecolors } from '../utils/Constants.js'
import { useNavigation } from "@react-navigation/native";

const MyCartScreen = ({ route }) => {
    const [paymentMethod, setPaymentMethod] = useState("card");
    const navigation = useNavigation();
    const { productName, ImageName } = route.params || {};


    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.goBack()}>
                    <Image style={styles.backIcon} source={require('../assets/backArrow.png')} />
                </TouchableOpacity>
                <Text style={styles.headerText}>My Cart</Text>
            </View>

            {/* Tabs */}
            <View style={styles.tabs}>
                <TouchableOpacity style={styles.activeTab}>
                    <Text style={styles.activeTabText}>Pharmacy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.inactiveTab}>
                    <Text style={styles.inactiveTabText}>Lab Tests</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={{ flex: 1 }}>
                {/* Delivery Info */}
                <View style={styles.delivery}>
                    <Text style={styles.deliveryText}>
                        DELIVER TO: Dubai, United Arab Emirates
                    </Text>
                </View>

                {/* Cart Items */}
                {[1, 2].map((_, i) => (
                    <View style={styles.cartItem} key={i}>
                        <Image
                            source={require('../assets/products/1.png')}
                            style={styles.itemImage}
                        />
                        <View style={styles.itemDetails}>
                            <Text style={styles.itemTitle}>Male Hormones</Text>
                            <Text style={styles.itemDesc}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Text>
                            <View style={styles.priceRow}>
                                <Text style={styles.itemPrice}>AED 1200.00</Text>
                                <Text style={styles.itemOldPrice}>AED 250</Text>
                            </View>
                            <View style={styles.bottomRow}>
                                <TouchableOpacity>
                                    <Text style={styles.removeText}>Remove</Text>
                                </TouchableOpacity>
                                <View style={styles.qtyBox}>
                                    <TouchableOpacity style={styles.qtyBtn}>
                                        <Text style={styles.qtyText}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.qtyNumber}>1</Text>
                                    <TouchableOpacity style={styles.qtyBtn}>
                                        <Text style={styles.qtyText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}

            </ScrollView>

            {/* Bottom Row */}
            <View style={styles.bottomBar}>
                <Text style={styles.totalText}>AED 411.40</Text>
                <TouchableOpacity style={styles.checkoutBtn}>
                    <Text style={styles.checkoutText}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MyCartScreen;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },

    header: {
        backgroundColor: themecolors.primary, // green header
        height: 80,
        justifyContent: "center",
    },
    headerTitle: { color: "#fff", fontSize: 18, fontWeight: "bold" },

    tabs: { flexDirection: "row", padding: 10 },
    activeTab: {
        backgroundColor: "#006d5b",
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginRight: 10,
    },
    inactiveTab: {
        borderWidth: 1,
        borderColor: "#006d5b",
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    activeTabText: { color: "#fff", fontWeight: "bold" },
    inactiveTabText: { color: "#006d5b", fontWeight: "bold" },

    delivery: { backgroundColor: "#f0f0f0", padding: 10 },
    deliveryText: { color: "#444" },

    cartItem: {
        flexDirection: "row",
        padding: 10,
        margin: 10,
        backgroundColor: "#f9f9f9",
        borderRadius: 10,
    },
    itemImage: { width: 60, height: 60, borderRadius: 8 },
    itemDetails: { flex: 1, marginLeft: 10 },
    itemTitle: { fontWeight: "bold", fontSize: 16 },
    itemDesc: { color: "#777", fontSize: 12 },
    priceRow: { flexDirection: "row", alignItems: "center", marginVertical: 5 },
    itemPrice: { fontSize: 16, fontWeight: "bold", marginRight: 10 },
    itemOldPrice: {
        fontSize: 14,
        textDecorationLine: "line-through",
        color: "#888",
    },
    bottomRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    removeText: { color: "red" },
    qtyBox: { flexDirection: "row", alignItems: "center" },
    qtyBtn: {
        backgroundColor: "#006d5b",
        padding: 5,
        borderRadius: 5,
    },
    qtyText: { color: "#fff", fontWeight: "bold" },
    qtyNumber: { marginHorizontal: 10 },

    sectionTitle: { fontSize: 16, fontWeight: "bold", margin: 15 },

    paymentOption: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderWidth: 1,
        borderColor: "#ccc",
        marginHorizontal: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    activePayment: { borderColor: "green", backgroundColor: "#eafae8" },
    paymentText: { marginLeft: 10, fontSize: 15, flex: 1 },

    cardForm: { paddingHorizontal: 15 },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginVertical: 5,
    },
    row: { flexDirection: "row", gap: 10 },

    bottomBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        borderTopWidth: 1,
        borderColor: "#eee",
    },
    totalText: { fontSize: 18, fontWeight: "bold" },
    checkoutBtn: {
        backgroundColor: "#006d5b",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25,
    },
    checkoutText: { color: "#fff", fontWeight: "bold" },
    backIcon: {
        position: "absolute",
        left: 15,
    },
    headerText: {
        color: themecolors.white,
        fontSize: 22,
        fontWeight: "bold",
        alignSelf: "center",
    }
});
