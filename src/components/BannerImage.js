import React from "react";
import { View, Image, StyleSheet } from "react-native";

const BannerImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/sale.png")} // apna banner image ka path
        style={styles.bannerImage}
        resizeMode="cover"
      />
    </View>
  );
};

export default BannerImage;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10, // thoda spacing,
    backgroundColor:'white',
    paddingVertical:10
  },
  bannerImage: {
    width: 316,
    height: 138,
    borderRadius: 10, // optional rounded corners
  },
});
