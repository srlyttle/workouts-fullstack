import {View, Text} from 'react-native'
import React from 'react'
import {useSelector} from 'react-redux'

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const splits = useSelector(state => state)
  console.log('splits', splits)
  return (
    <View>
      <Text>Home 123</Text>
    </View>
  )
}
