import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Favorite from '../screens/Favourite'
import IonIcon from 'react-native-vector-icons/Ionicons'
import Account from '../screens/Account'
import Onboarding from '../screens/Onboarding'
import Splash from '../screens/Splash'
// import {moderateScale} from 'react-native-size-matters'

export default function Tabs() {
  const Tab = createBottomTabNavigator()
  const navigatorScreenOptions = {
    tabBarActiveTintColor: '#062743',
    tabBarInactiveTintColor: '#9ea9b3',

    // tabBarItemStyle: {
    //   marginVertical: moderateScale(10),
    // },
    tabBarShowLabel: false,
  }
  return (
    <Tab.Navigator screenOptions={navigatorScreenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => <IonIcon name="home-sharp" size={size} color={color} />,

          tabBarShowLabel: false,
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({size, color}) => <IonIcon name="heart-sharp" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Favorite}
        options={{
          tabBarIcon: ({size, color}) => <IonIcon name="alarm-sharp" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({size, color}) => <IonIcon name="person-sharp" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  )
}
