import { NextFunction, Request, Response } from 'express'
import { workouts } from '../data/dummy-workouts'

export const handleGetWorkouts = (
  req: Request<{ name: string }, { name?: string }>,
  res: Response,
  next: NextFunction,
) => {
  res.json({ workouts })
}
