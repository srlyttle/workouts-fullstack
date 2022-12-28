import mongoose, { ConnectOptions } from 'mongoose'
import config from 'config'
import logger from './logger'

// supress warning
mongoose.set('strictQuery', true)

function connect() {
  const dbUri = config.get<string>('dbUri')
  return mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .then((conn) => logger.info(` db now connected on ${conn.connection.host}`))
    .catch((err) => {
      logger.error(`error connecting to DB`)
      process.exit(1)
    })
}

export default connect
