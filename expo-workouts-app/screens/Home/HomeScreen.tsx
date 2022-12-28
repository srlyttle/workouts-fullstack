import {View, Text, TextInput, Button, ScrollView, FlatList} from 'react-native'
import React from 'react'
import {useSelector} from 'react-redux'
import {useGetWorkoutsQuery} from '../../redux/middlewear/api'
import NumericInput from 'react-native-numeric-input'
import {styles} from './styles'
import Card from '../../components/Card'
import {Workout} from '../../types'
import {ExerciseWorkout} from '../../components/Workout'

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const splits = useSelector(state => state)
  console.log('state', splits)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

  const {data: workoutData, isLoading} = useGetWorkoutsQuery('simon')

  console.log('workoutData', workoutData)

  console.log('isLoading', isLoading)

  const sets = [
    {
      weight: 1,
      amount: 11,
      units: 'kgs',
    },
    {
      weight: 6,
      amount: 10,
      units: 'kgs',
    },
    {
      weight: 11,
      amount: 6,
      units: 'kgs',
    },
  ]
  const workouts: Workout[] = [
    {exerciseName: 'Pull Up', sets},
    {exerciseName: 'Chin Up', sets},
    {exerciseName: 'Arnold Dubmell Press', sets},
    {exerciseName: 'Flat Dumbell Bench Press', sets},
  ]

  const workoutItems = workoutData?.workouts
  return (
    <View>
      <View
        style={{
          backgroundColor: 'black',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 40,
        }}
      >
        <Text style={{color: 'white', fontWeight: 'bold'}}>THURSDAY, DECEMBER 15</Text>
      </View>

      <FlatList
        data={workoutItems}
        renderItem={({item}) => <ExerciseWorkout workout={item} />}
        keyExtractor={item => item.exerciseName}
      />
    </View>
  )
}
