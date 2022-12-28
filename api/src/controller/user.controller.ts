import { Request, Response } from 'express'
import { omit } from 'lodash'
import { CreateUserInput } from '../schema/user.schema'
import { createUser } from '../service/user.service'
import logger from '../utils/logger'

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput['body']>,
  res: Response,
) {
  try {
    const user = await createUser(req.body)
    return res.send(user)
  } catch (e) {
    logger.error(e)
    const message = e as { message: string }
    return res.status(409).send(message)
  }
}
