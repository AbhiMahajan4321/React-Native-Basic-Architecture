/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets, } from 'react-native-safe-area-context';
import RootNavigator from './src/routes/RootNavigator';

// MD3
import { MD3LightTheme, MD3DarkTheme, PaperProvider } from 'react-native-paper'
import { md3LightColors, md3DarkColors } from './src/theme/colors'


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
      <StatusBar barStyle={activeTheme ? 'light-content' : 'dark-content'} />

      <PaperProvider theme={activeTheme}>
        <RootNavigator />
      </PaperProvider>

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
