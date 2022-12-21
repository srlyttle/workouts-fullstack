import mongoose, { ConnectOptions } from 'mongoose'
import config from 'config'

export const connectDB = async () => {
  const dbUri = config.get<string>('dbUri')
  const conn = await mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)

  console.log(` db now connected on ${conn.connection.host}`)
}
