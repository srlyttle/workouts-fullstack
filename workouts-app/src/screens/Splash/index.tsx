import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import {RootStackParamList} from '../../navigation/MainStack'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#808080',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
})
type SplashScreenProp = StackNavigationProp<RootStackParamList, 'Onboarding'>
export default function Splash() {
  const [isVisible, setIsVisible] = React.useState(true)
  const navigation = useNavigation<SplashScreenProp>()

  // const theme = useTheme()
  // const {background, dark} = theme

  const hideSplashScreen = () => {
    setIsVisible(false)
  }
  React.useEffect(() => {
    setTimeout(() => {
      hideSplashScreen()
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      })
    }, 5000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to my app!</Text>
    </View>
  )
}
