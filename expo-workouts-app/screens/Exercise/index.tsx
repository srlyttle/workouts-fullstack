import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useGetPokemonByNameQuery } from '../../redux/middlewear/api'
import NumericInput from 'react-native-numeric-input'
import { styles } from './styles'

export default function Exercise() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const splits = useSelector((state) => state)
  console.log('state', splits)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, error, isLoading } = useGetPokemonByNameQuery('ditto')
  console.log('data?.species', data?.species)

  console.log('isLoading', isLoading)
  // console.log('qu', data.species.name)

  const [exercise, setExercise] = React.useState('')
  const [sets, setSets] = React.useState(2)
  const [reps, setReps] = React.useState(0)
  const [weight, setWeight] = React.useState(0)

  const addExercise = () => {
    // Add the exercise to the workout tracker here
  }

  return (
    <View>
      <Text>Exercise:</Text>
      <TextInput value={exercise} onChangeText={(text) => setExercise(text)} />
      <Text>Sets:</Text>
      {/* <TextInput
        value={sets.toString()}
        onChangeText={(text) => setSets(Number(text))}
        keyboardType="numeric"
      /> */}
      <View style={styles.row}>
        <NumericInput
          value={sets}
          onChange={(value) => setSets(value)}
          onLimitReached={(isMax, msg) => console.log(isMax, msg)}
          totalWidth={240}
          totalHeight={50}
          iconSize={25}
          step={1}
          valueType="real"
          rounded
          textColor="gray"
          // iconStyle={{ color: 'white' }}
          rightButtonBackgroundColor="gray"
          leftButtonBackgroundColor="gray"
        />
      </View>
      <Text>Reps:</Text>
      <TextInput
        value={reps.toString()}
        onChangeText={(text) => setReps(Number(text))}
        keyboardType="numeric"
      />
      <Text>Weight:</Text>
      <TextInput
        value={weight.toString()}
        onChangeText={(text) => setWeight(Number(text))}
        keyboardType="numeric"
      />
      <Button title="Add Exercise" onPress={addExercise} />
    </View>
  )
}
