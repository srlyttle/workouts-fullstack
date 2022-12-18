import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import Card from '../Card'
import { styles } from './styles'
import { Workout } from '../../types'

interface Props {
  workout: Workout
}
export const ExerciseWorkout = ({ workout }: Props) => {
  const { exerciseName, sets } = workout
  return (
    <Card>
      <View>
        <View style={styles.header}>
          <Text style={styles.exerciseTitle}>{exerciseName}</Text>
        </View>
        {sets.map(({ amount, units, weight }, i) => (
          <View key={i} style={styles.row}>
            <View style={styles.exerciseLeftValues}>
              <Text style={styles.exerciseAmount}>{weight}</Text>

              <Text style={styles.exerciseUnits}>{units}</Text>
            </View>

            <View style={styles.exerciseRightValues}>
              <Text style={styles.exerciseAmount}>{amount}</Text>

              <Text style={styles.exerciseUnits}>reps</Text>
            </View>
          </View>
        ))}
      </View>
    </Card>
  )
}
