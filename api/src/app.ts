import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './utils/connect'
import cors from 'cors'
import routes from './routes'
import helmet from 'helmet'
import config from 'config'
import logger from './utils/logger'
import deserializeUser from './middlewear/deserializeUser'

const app = express()

const allowedOrigins = '*'

const options: cors.CorsOptions = {
  origin: allowedOrigins,
}

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(deserializeUser)
app.use(express.urlencoded({ extended: false }))

routes(app)
// app
//   .route('/api/data')
//   .get((req: Request, res: Response) => {
//     res.json({ success: false })
//   })
//   .post((req: Request, res: Response) => {
//     console.log(req.body)
//     res.json({ success: false })
//   })

// const handleGetWorkouts = (
//   req: Request<{ name: string }, { name?: string }>,
//   res: Response,
//   next: NextFunction,
// ) => {
//   res.json({ workouts })
// }

// app.get('/workouts/:name', handleGetWorkouts)

// const port = process.env.PORT || 4000
const port = config.get<number>('port')
app.listen(port, () => {
  logger.info(`Listening on port ${port}`)
  connectDB()
})
