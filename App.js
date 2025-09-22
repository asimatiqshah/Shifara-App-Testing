
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator.js'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {

    return (
        
        <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
            </GestureHandlerRootView>
        </SafeAreaProvider>

    )
}

export default App;


