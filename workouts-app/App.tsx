import {persistReducer} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'

import {NavigationContainer} from '@react-navigation/native'
import React, {type PropsWithChildren} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import RootNavigation from './src/navigation'
import {Provider} from 'react-redux'
import {persistor, store} from './src/redux/store'

const Section: React.FC<
  PropsWithChildren<{
    title: string
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark'
  console.log('test')
  return (
    <>
      <View style={styles.sectionContainer}>
        <Text
          style={[
            styles.sectionTitle,
            {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
              color: isDarkMode ? (Colors.white as string) : (Colors.black as string),
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {children}
        </Text>
      </View>
    </>
  )
}

// const App = () => {
//   const isDarkMode = useColorScheme() === 'dark'

//   const backgroundStyle = {
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   }

//   return <RootNavigation />
// }
function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const Stack = createNativeStackNavigator()

function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  )
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})

export default App
