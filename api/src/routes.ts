import { Express } from 'express'
import { handleGetWorkouts } from './controllers/workouts.controller'

function routes(app: Express) {
  app.get('/workouts/:name', handleGetWorkouts)
}

export default routes
