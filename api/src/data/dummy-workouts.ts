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
export const workouts: {
  exerciseName: string
  sets: {
    weight: number
    amount: number
    units: string
  }[]
}[] = [
  { exerciseName: 'Pull Up', sets },
  { exerciseName: 'Chin Up', sets },
  { exerciseName: 'Arnold Dubmell Press', sets },
  { exerciseName: 'Flat Dumbell Bench Press', sets },
]
