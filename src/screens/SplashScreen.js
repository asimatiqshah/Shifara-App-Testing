import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth, onAuthStateChanged } from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native"

const SplashScreen = () => {
    const navigation = useNavigation();
    const auth = getAuth();

    //CHECK USER
    const checkUser = async () => {
        try {
            const localUser = await AsyncStorage.getItem('user');

            if (localUser !== null) {
                navigation.replace('Tabs');
            } else {
                const unsubscribe = onAuthStateChanged(auth, (user) => {
                    if (user) {
                        // User is signed in.
                        console.log("User signed in:", user.email);
                        navigation.replace('Tabs');
                    } else {
                        // User is signed out.
                        console.log("User signed out.");
                        navigation.replace('LoginScreen')
                    }
                });

                unsubscribe();
            }

        } catch (error) {
            console.log('Error reading user from AsyncStorage:', error);
        }
    }

    useEffect(() => {


        const timeout = setTimeout(() => {
            checkUser(); // call your existing function
        }, 1500);

        return () => clearTimeout(timeout);

    }, []);




    return (
        <View style={styles.container}>
            <Image style={styles.logo} resizeMode="contain" source={require('../assets/shifaraLogo.png')} />
        </View>
    )
}

export default SplashScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 146,
        height: 44
    }
});