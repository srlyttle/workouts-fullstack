import {View, Text, Image, ListRenderItemInfo, ImageSourcePropType} from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import {styles} from './styles'
import IonIcon from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {StackNavigationProp} from '@react-navigation/stack'
import {RootStackParamList} from '../../navigation/MainStack'

// eslint-disable-next-line @typescript-eslint/ban-types

type OnboardingScreenProp = StackNavigationProp<RootStackParamList, 'Onboarding'>

export default function Onboarding() {
  const navigation = useNavigation<OnboardingScreenProp>()
  const [isOnboardingFinished, setIsOnboardingFinished] = React.useState(false)
  // const navigation = useNavigation()
  const slides = [
    {
      key: 'slide1',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      image: require('../../assets/onboarding/slide1.jpg'),
      title: '',
      text: '',
    },
    {
      key: 'slide2',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      image: require('../../assets/onboarding/slide2.jpg'),
      title: '',
      text: '',
    },
    {
      key: 'slide3',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      image: require('../../assets/onboarding/slide3.jpg'),
      title: '',
      text: '',
    },
  ]
  const renderItem = ({
    item,
  }: ListRenderItemInfo<{
    key: string
    image: ImageSourcePropType
    title: string
    text: string
  }> & {
    dimensions?: {
      width: number
      height: number
    }
  }) => {
    return (
      <View style={styles.slide}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    )
  }

  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <IonIcon name="arrow-forward-outline" color="rgba(255,255,255, .9 )" size={24} />
      </View>
    )
  }

  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <IonIcon name="md-checkmark" color="rgba(255,255,255, .9 )" size={24} />
      </View>
    )
  }

  const renderSkipButton = () => {
    return (
      <View style={styles.skipView}>
        <Text style={styles.skipTextColor}>Skip</Text>
      </View>
    )
  }

  const onEndReached = () => {
    setIsOnboardingFinished(true)
    navigation.navigate('Login')
  }

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
      renderSkipButton={renderSkipButton}
      onDone={onEndReached}
      onSkip={onEndReached}
      dotClickEnabled={true}
      showNextButton={true}
      showDoneButton={true}
      showSkipButton={true}
    />
  )
}
