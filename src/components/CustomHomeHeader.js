import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { themecolors } from "../utils/Constants";

const CustomHomeHeader = () => {
  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.headerTop}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>

        {/* Cart Icon with Badge */}
        <TouchableOpacity style={styles.cartContainer}>
          <Image
            source={require("../assets/icons/grocerystore.png")}
            style={styles.cartIcon}
            resizeMode="contain"
          />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Delivery Row */}
      <View style={styles.deliveryRow}>
        <Text style={styles.deliveryText}>
          DELIVER TO: <Text style={styles.location}>Dubai, United Arab Emirates</Text>
        </Text>
        <TouchableOpacity style={styles.changeButton}>
          <Text style={styles.changeButtonText}>Change</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHomeHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: themecolors.primary, // Green background
    paddingTop: 20, // status bar space
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    paddingHorizontal:25
  },
  searchContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 40,
    justifyContent: "center",
  },
  searchInput: {
    fontSize: 14,
    color: "#000",
  },
  cartContainer: {
    marginLeft: 12,
    position: "relative",
  },
  cartIcon: {
    width: 26,
    height: 26,
    tintColor: "#fff",
  },
  badge: {
    position: "absolute",
    top: -6,
    right: -6,
    backgroundColor: "red",
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  deliveryRow: {
    backgroundColor: themecolors.white,
    paddingVertical: 10,
    paddingHorizontal: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  deliveryText: {
    fontSize: 12,
    color: "#333",
  },
  location: {
    fontWeight: "bold",
  },
  changeButton: {
    backgroundColor: themecolors.primary,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  changeButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
});
