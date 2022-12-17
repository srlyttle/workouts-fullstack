import {View, Text} from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Tabs from './Tabs'
import Splash from '../screens/Splash'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Onboarding from '../screens/Onboarding'
import ExerciseList from '../screens/Exercise-List'
import About from '../screens/About'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

export default function AuthStack() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Login" options={{headerLeft: () => null}} component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="ExerciseList" component={ExerciseList} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  )
}
