import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Alert, ActivityIndicator } from "react-native";
import { themecolors } from '../utils/Constants.js'
import { screenWidth } from "../utils/Scalling.js"
import { handleGoogleSignIn, saveUser } from '../services/authServices.js'
import { useNavigation } from "@react-navigation/native";
import NetInfo from '@react-native-community/netinfo';
const LoginScreen = () => {
    const navigation = useNavigation();
    const [userEmail, setUserEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // simple email validation handler
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    //LOGIN USER
    const handleEmailLogin = async () => {
        setIsLoading(true);
        try {
            const userId = 'USER-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
            console.log(userId);
            await saveUser({ id: userId, email: userEmail, loginType: 'email' });
            Alert.alert('Success', 'Successfully logged in!');
            navigation.replace('Tabs');
        } catch (error) {
            console.log('Login error:', error);
        } finally {
            setIsLoading(false);
        }
    }

    //CHECK GOOGLE LOGIN
    const GoogleSignInHandler = async () => {
        setIsLoading(true);
        try {

            const state = await NetInfo.fetch();
            console.log(state);
            
            if (!state.isConnected) {
                Alert.alert('No Internet', 'Please turn on your Wi-Fi or mobile data to login with Google.');
                return;
            }

            //no internet is available doNot Proceed with Google
            let result = await handleGoogleSignIn();
            if (result?.success) {
                navigation.replace('Tabs');
            }
        } catch (error) {
            console.log('Social Login error:', error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Image style={styles.backIcon} source={require('../assets/backArrow.png')} />
                    <Text style={styles.headerText}>Login</Text>
                </View>

                {/* Body */}
                <View style={styles.body}>
                    {/* Logo */}
                    <Image style={styles.logo} source={require('../assets/shifaraLogo.png')} />

                    {/* Email input */}
                    <Text style={styles.label}>Email</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.emailIconStyle}>
                            <Image style={styles.emailIconImage} source={require('../assets/IconEmail.png')} />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Johnsmith@Gmail.Com"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            placeholderTextColor="#a1a1a1ff"
                            onChangeText={setUserEmail}

                        />
                    </View>

                    {/* Continue button */}
                    <TouchableOpacity
                        disabled={!isValidEmail(userEmail) || isLoading}
                        style={[styles.continueBtn, { backgroundColor: !isValidEmail(userEmail) || isLoading ? themecolors.disabled : themecolors.primary }]}
                        onPress={handleEmailLogin}>
                        <Text style={styles.continueText}>Continue</Text>
                    </TouchableOpacity>

                    {/* Divider */}
                    <View style={styles.dividerContainer}>
                        <View style={styles.line} />
                        <Text style={styles.orText}>OR LOGIN WITH</Text>
                        <View style={styles.line} />
                    </View>

                    {/* Google login button */}
                    {
                        !isLoading &&
                        <TouchableOpacity activeOpacity={0.5} onPress={GoogleSignInHandler}>
                            <Image
                                source={require('../assets/googleBtn.png')}
                                style={styles.googleIcon}
                            />
                        </TouchableOpacity>
                    }

                    <View>
                        {isLoading ? <ActivityIndicator size="large" /> : null}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themecolors.primary,
    },
    header: {
        backgroundColor: themecolors.primary, // green header
        height: 80,
        justifyContent: "center",
    },
    backIcon: {
        position: "absolute",
        left: 15,
    },
    headerText: {
        color: themecolors.white,
        fontSize: 22,
        fontWeight: "bold",
        alignSelf: "center",
    },
    body: {
        flex: 1,
        alignItems: "center",
        borderTopLeftRadius: screenWidth * 0.25,
        backgroundColor: 'white',
        paddingTop: 68,
        paddingHorizontal: 22
    },
    logo: {
        width: 146,
        height: 44,
        resizeMode: 'contain'
    },
    label: {
        alignSelf: "flex-start",
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 5,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: themecolors.border,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
        width: "100%",
        height: 50,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 14,
        color: 'black'
    },
    continueBtn: {
        borderRadius: 25,
        width: "100%",
        paddingVertical: 14,
        alignItems: "center",
        marginBottom: 30,
    },
    continueText: {
        color: themecolors.white,
        fontSize: 16,
        fontWeight: "bold",
    },
    dividerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: themecolors.border,
    },
    orText: {
        marginHorizontal: 10,
        color: "#666",
        fontSize: 12,
        fontWeight: "500",
    },
    googleIcon: {
        width: 78,
        height: 78,
        resizeMode: 'contain'
    }
    ,
    emailIconStyle: {
        paddingHorizontal: 10
    },
    emailIconImage: {
        width: 17,
        height: 12
    }
});

export default LoginScreen;
