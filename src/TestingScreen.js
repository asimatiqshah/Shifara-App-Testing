import { Button, Text, View } from "react-native"
import { getAuth, signInAnonymously, createUserWithEmailAndPassword, signOut, signInWithCredential, GoogleAuthProvider } from '@react-native-firebase/auth';
import {
    GoogleSignin,
    GoogleSigninButton,
    isSuccessResponse,
    statusCodes,
} from '@react-native-google-signin/google-signin';

//1.configure
GoogleSignin.configure({
    webClientId: '1047947159962-tosj6er0rh5heraunbufcj6vhfmv1aq5.apps.googleusercontent.com'
});


const TestingScreen = () => {

    //FOR SIGN OUT
    //   signOut(getAuth()).then(() => console.log('User signed out!'));

    // let user = getAuth().currentUser;
    // console.log(user);


    const handleGoogleSignIn = async () => {
        try {
            // 2.Make sure Google Play Services are available
            await GoogleSignin.hasPlayServices();
            // 3.Ask Google to sign the user in
            const signInResult = await GoogleSignin.signIn();
            let idToken = signInResult.data?.idToken;
            console.log(idToken);

            // 4.
            const googleCredential = GoogleAuthProvider.credential(idToken);

            // // Step 5: sign-in with Firebase using credential
            const userCredential = await signInWithCredential(getAuth(), googleCredential);

            console.log("User signed in:", userCredential.user);

        } catch (error) {
            console.error("Google Sign-In error:", error);
        }
    }

    const AnonymouslyHandler = () => {
        signInAnonymously(getAuth())
            .then((data) => {
                console.log('User signed in anonymously', data.user.uid);
            })
            .catch(error => {
                if (error.code === 'auth/operation-not-allowed') {
                    console.log('Enable anonymous in your firebase console.');
                }

                console.error(error);
            });
    }

    //ENABLE FROM FIRBASE FIRST
    const SignInWithEmailAndPasswordHandler = () => {
        createUserWithEmailAndPassword(getAuth(), 'test.johnsmith@gmai.com', 'Password123')
            .then((data) => {
                console.log('User account created & signed in!', data);
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }

    return (
        <View>
            <Text>Sign In Anonymously</Text>
            <Button title="Anonymously Login" onPress={() => AnonymouslyHandler()} />
            <Text>Sign In Google</Text>
            <Button title="Google Sign In" onPress={() => handleGoogleSignIn()} />
        </View>
    )
}

export default TestingScreen;