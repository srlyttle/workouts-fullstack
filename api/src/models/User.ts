//https://medium.com/swlh/typescript-with-mongoose-and-node-express-24073d51d2ee

import mongoose, { model, Schema, Model, Document } from 'mongoose'
import bcrypt from 'bcryptjs'

interface IUser extends Document {
  email: string
  firstName: string
  lastName: string
}

const schema: Schema = new Schema({
  email: { type: String, required: true, default: '' },
  name: { type: String, required: true, default: '' },
  avatar: { type: String, required: true, default: '' },
  password: { type: String, required: true, default: '' },
})

schema.pre('save', async function save(next) {
  if (!this.isModified('password')) return next()
  try {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    return next()
  } catch (err) {
    return next((err as mongoose.CallbackError) || undefined)
  }
})

schema.methods.validatePassword = async function validatePassword(
  data: string,
) {
  return bcrypt.compare(data, this.password)
}

export default mongoose.model('User', schema)
