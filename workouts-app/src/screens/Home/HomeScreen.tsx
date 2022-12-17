import {View, Text} from 'react-native'
import React from 'react'
import {useSelector} from 'react-redux'
import {useGetPokemonByNameQuery} from '../../redux/middlewear/api'

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const splits = useSelector(state => state)
  console.log('state', splits)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {data, error, isLoading} = useGetPokemonByNameQuery('charizard')
  console.log('data?.species', data?.species)

  console.log('isLoading', isLoading)
  // console.log('qu', data.species.name)
  return (
    <View>
      <Text>{data?.species?.name}</Text>
    </View>
  )
}
