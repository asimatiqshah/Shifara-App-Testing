import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HomeScreen from '../screens/HomeScreen.js';
import PrescriptionScreen from '../screens/PrescriptionScreen.js';
import MoreScreen from '../screens/MoreScreen.js';
import FindDocScreen from '../screens/FindDocScreen.js';
import CareScreen from '../screens/CareScreen.js';
import { themecolors } from '../utils/Constants.js';

// ROOT NAVIGATOR
const BottomTab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        onPress={onPress}
        activeOpacity={0.8}
    >
        <View
            style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                backgroundColor: themecolors.primary, // inner circle color
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 6, // white border
                borderColor: '#fff',
                elevation: 5, // Android shadow
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.2,
                shadowRadius: 3.5,
            }}
        >
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => {
    const { Navigator, Screen } = BottomTab;

    return (
        <Navigator
        initialRouteName="Home"
            screenOptions={{
                tabBarShowLabel: false,
                headerShown:false,
                tabBarStyle: {
                    backgroundColor: themecolors.primary,
                    position: 'absolute',
                    bottom: 0,
                    height: 80,
                    elevation: 0,
                },
            }}
        >
            {/* HOME */}

            

            <Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconWrapper}>
                            <Image
                                source={require('../assets/icons/home.png')}
                                resizeMode="contain"
                                style={[styles.tabImage, { tintColor: focused ? themecolors.yellow : themecolors.white }]}
                            />
                            <Text style={[styles.tabText, { color: focused ? themecolors.yellow : themecolors.white }]}>
                                Home
                            </Text>
                        </View>
                    ),
                }}
            />

            {/* PRESCRIPTION */}
            <Screen
                name="Prescription"
                component={PrescriptionScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.iconWrapper, { width: 90 }]}>
                            <Image
                                source={require('../assets/icons/prescription.png')}
                                resizeMode="contain"
                                style={[styles.tabImage, { tintColor: focused ? themecolors.yellow : themecolors.white }]}
                            />
                            <Text style={[styles.tabText, { color: focused ? themecolors.yellow : themecolors.white }]}>
                                Prescription
                            </Text>
                        </View>
                    ),
                }}
            />

            {/* CARE (CENTER FLOATING BUTTON) */}
            <Screen
                name="Care"
                component={CareScreen}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require('../assets/icons/care.png')}
                            resizeMode="contain"
                            style={{ width: 35, height: 35 }}
                        />
                    ),
                    tabBarButton: (props) => <CustomTabBarButton {...props} />,
                }}
            />

            {/* FIND DOCTOR */}
            <Screen
                name="FindDoc"
                component={FindDocScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconWrapper}>
                            <Image
                                source={require('../assets/icons/findDoc.png')}
                                resizeMode="contain"
                                style={[styles.tabImage, { tintColor: focused ? themecolors.yellow : themecolors.white }]}
                            />
                            <Text style={[styles.tabText, { color: focused ? themecolors.yellow : themecolors.white }]}>
                                Doctor
                            </Text>
                        </View>
                    ),
                }}
            />

            {/* MORE */}
            <Screen
                name="More"
                component={MoreScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconWrapper}>
                            <Image
                                source={require('../assets/icons/more.png')}
                                resizeMode="contain"
                                style={[styles.tabImage, { tintColor: focused ? themecolors.yellow : themecolors.white }]}
                            />
                            <Text style={[styles.tabText, { color: focused ? themecolors.yellow : themecolors.white }]}>
                                More
                            </Text>
                        </View>
                    ),
                }}
            />
        </Navigator>
    );
};

export default Tabs;

const styles = StyleSheet.create({
    tabImage: {
        width: 24,
        height: 24,
    },
    tabText: {
        fontSize: 10,
        marginTop: 6,
    },
    iconWrapper: {
        justifyContent: "center",
        alignItems: "center",
        top: 10,
    },
});
