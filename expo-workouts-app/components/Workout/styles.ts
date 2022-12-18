import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  row: {
    // flex: 1,
    paddingTop: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'red',
  },
  exerciseTitle: {
    fontSize: 20,
    // fontWeight: 'bold',
  },

  exerciseUnits: {
    fontSize: 16,
    // fontWeight: 'bold',
    fontWeight: '200',
  },
  exerciseAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 5,
  },
  exerciseLeftValues: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    // backgroundColor: 'blue',
    justifyContent: 'flex-end',
    flex: 2,
  },

  exerciseRightValues: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'green',
    justifyContent: 'flex-end',
    flex: 2,
  },
})
