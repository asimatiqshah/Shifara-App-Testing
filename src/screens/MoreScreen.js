import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { themecolors } from '../utils/Constants.js'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const MoreScreen = () => {
    const navigation = useNavigation();
    const handleSignOut = async () => {
        try {
            const localUser = await AsyncStorage.getItem('user');
            if (localUser !== null) {
                await AsyncStorage.removeItem('user'); // remove saved user
                Alert.alert('Signed Out', 'You have been successfully logged out.');
                navigation.replace('LoginScreen');
            }

        } catch (error) {
            console.log('Sign out error:', error);
        }
    }

    return (
        <View style={styles.container}>
            <Text >MoreScreen</Text>
            <Text >Google Sign Out Not Handling Right Now Here</Text>
            <TouchableOpacity activeOpacity={0.5} onPress={handleSignOut} style={styles.LogOutBtn}>
                <Text style={styles.continueText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MoreScreen;

const styles = StyleSheet.create({

    LogOutBtn: {
        borderRadius: 25,
        width: "100%",
        paddingVertical: 14,
        alignItems: "center",
        marginBottom: 30,
        backgroundColor: themecolors.text,
        marginTop:20
    },
    continueText: {
        color: themecolors.white,
        fontSize: 16,
        fontWeight: "bold",
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        flex: 1,
        alignSelf: 'center'
    }
});