import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth, GoogleAuthProvider, signInWithCredential } from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Alert } from "react-native";



export const saveUser = async (user) => {
    try {
        // user can be { id: 'abc123', email: 'user@gmail.com',loginType:'google' }
        await AsyncStorage.setItem('user', JSON.stringify(user));
        console.log('User saved! in Storage');
    } catch (error) {
        console.log('Error saving user:', error);
    }
}

export const handleGoogleSignIn = async () => {
    //1.configure
    GoogleSignin.configure({
        webClientId: '1047947159962-tosj6er0rh5heraunbufcj6vhfmv1aq5.apps.googleusercontent.com'
    });
    try {
        // 2.Make sure Google Play Services are available
        await GoogleSignin.hasPlayServices();
        // 3.Ask Google to sign the user in
        const signInResult = await GoogleSignin.signIn();
        let idToken = signInResult.data?.idToken;
 
        // 4.Make Firebase credentials from the token
        const googleCredential = GoogleAuthProvider.credential(idToken);

        // // Step 5: sign-in with Firebase using credential
        const userCredential = await signInWithCredential(getAuth(), googleCredential);
         Alert.alert("You're signed in with Google.");
         return { success: true };

    } catch (error) {
        console.error("Google Sign-In error:", error);
    }
}