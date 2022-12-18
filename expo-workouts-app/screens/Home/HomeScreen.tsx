import { View, Text, TextInput, Button, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useGetPokemonByNameQuery } from '../../redux/middlewear/api'
import NumericInput from 'react-native-numeric-input'
import { styles } from './styles'
import Card from '../../components/Card'
import { Workout } from '../../types'
import { ExerciseWorkout } from '../../components/Workout'

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const splits = useSelector((state) => state)
  console.log('state', splits)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, error, isLoading } = useGetPokemonByNameQuery('ditto')
  console.log('data?.species', data?.species)

  console.log('isLoading', isLoading)
  // console.log('qu', data.species.name)

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
    { exerciseName: 'Pull Up', sets },
    { exerciseName: 'Chin Up', sets },
    { exerciseName: 'Arnold Dubmell Press', sets },
    { exerciseName: 'Flat Dumbell Bench Press', sets },
  ]
  return (
    <ScrollView>
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
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          THURSDAY, DECEMBER 15
        </Text>
      </View>
      {workouts.map((workout) => (
        <ExerciseWorkout workout={workout} />
      ))}
    </ScrollView>
  )
}
