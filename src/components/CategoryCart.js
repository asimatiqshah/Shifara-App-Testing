import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import CustomHeadingText from "../components/CustomHeadingText.js";
import { screenWidth } from "../utils/Scalling.js";
import { themecolors } from "../utils/Constants.js";
const CategoryCart = () => {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <CustomHeadingText title="Top Categories" />
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesWrapper}
            >
                {/* ITEM 1 */}
                <View style={styles.categoryItem}>
                    <Image style={styles.itemImage} resizeMode="contain" source={require('../assets/categories/4.png')} />
                    <View style={{ backgroundColor: themecolors.primary, height: 31, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20, position: 'absolute', bottom: 0, alignSelf: 'center', width: '100%' }}>
                        <Text style={styles.itemText}>Mother & Baby</Text>
                    </View>
                </View>
                {/* ITEM 2 */}
                <View style={styles.categoryItem}>
                    <Image style={styles.itemImage} resizeMode="contain" source={require('../assets/categories/4.png')} />
                    <View style={{ backgroundColor: themecolors.primary, height: 31, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20, position: 'absolute', bottom: 0, alignSelf: 'center', width: '100%' }}>
                        <Text style={styles.itemText}>Beauty</Text>
                    </View>
                </View>
                {/* ITEM 3 */}
                <View style={styles.categoryItem}>
                    <Image style={styles.itemImage} resizeMode="contain" source={require('../assets/categories/4.png')} />
                    <View style={{ backgroundColor: themecolors.primary, height: 31, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20, position: 'absolute', bottom: 0, alignSelf: 'center', width: '100%' }}>
                        <Text style={styles.itemText}>Nutrition</Text>
                    </View>
                </View>
                {/* ITEM 4 */}
                <View style={styles.categoryItem}>
                    <Image style={styles.itemImage} resizeMode="contain" source={require('../assets/categories/4.png')} />
                    <View style={{ backgroundColor: themecolors.primary, height: 31, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20, position: 'absolute', bottom: 0, alignSelf: 'center', width: '100%' }}>
                        <Text style={styles.itemText}>Medical Essential</Text>
                    </View>
                </View>
                {/* ITEM 5 */}
                <View style={styles.categoryItem}>
                    <Image style={styles.itemImage} resizeMode="contain" source={require('../assets/categories/4.png')} />
                    <View style={{ backgroundColor: themecolors.primary, height: 31, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20, position: 'absolute', bottom: 0, alignSelf: 'center', width: '100%' }}>
                        <Text style={styles.itemText}>Mother & Baby</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default CategoryCart;

const styles = StyleSheet.create({
    categoryItem: {
        backgroundColor: '#DADADA',
        width: screenWidth * 0.35,
        height: screenWidth * 0.45,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: screenWidth * 0.01,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    itemImage: {
        width: '90%',
        height: '90%',
    },
    itemText: {
        fontSize: 12,
        textAlign: "center",
        color: themecolors.white
    },
     categoriesWrapper: {
        paddingLeft:20,
        marginTop:10,
    }
})