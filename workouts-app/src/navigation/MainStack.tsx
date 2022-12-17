import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Tabs from './Tabs'
import Splash from '../screens/Splash'
import ExerciseList from '../screens/Exercise-List'
import About from '../screens/About'

export type RootStackParamList = {
  Splash: undefined
  Tabs: undefined
  ExerciseList: undefined
  About: undefined
  Onboarding: undefined
  Login: undefined
}
export default function MainStack() {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Tabs" component={Tabs} />

      <Stack.Screen name="ExerciseList" component={ExerciseList} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  )
}
