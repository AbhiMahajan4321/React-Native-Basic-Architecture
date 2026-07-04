/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets, } from 'react-native-safe-area-context';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from './src/navigation/RootNavigator';

// MD3
import { MD3LightTheme, MD3DarkTheme, PaperProvider } from 'react-native-paper'
import { md3LightColors, md3DarkColors } from './src/theme/colors'
import { test } from '@env';


const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...md3LightColors,
  }
};

const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...md3DarkColors
  }
};


function App() {

  const colorScheme = useColorScheme()
  const activeTheme = colorScheme === 'dark' ? darkTheme : lightTheme;

  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      {/* <GestureHandlerRootView></GestureHandlerRootView> */}
      {/* <GestureHandlerRootView> */}

        <StatusBar barStyle={activeTheme ? 'light-content' : 'dark-content'} />

        <PaperProvider theme={activeTheme}>
          <RootNavigator />
        </PaperProvider>

      {/* </GestureHandlerRootView> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
