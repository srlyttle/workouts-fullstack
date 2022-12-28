import { Express } from 'express'
import { createUserHandler } from './controller/user.controller'
import {
  handleGetWorkouts,
  handleHealthCheck,
} from './controller/workouts.controller'
import { createUserSchema } from './schema/user.schema'
import validateResource from './middlewear/validateResource'
import {
  createUserSessionHandler,
  deleteSessionHandler,
  getUserSessionsHandler,
} from './controller/session.controller'
import { createSessionSchema } from './schema/session,schema'
import requireUser from './middlewear/requireUser'
import {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
  deleteProductSchema,
} from './schema/product.schema'
import {
  createProductHandler,
  updateProductHandler,
  getProductHandler,
  deleteProductHandler,
} from './controller/product.controller'

function routes(app: Express) {
  /**
   * @openapi
   * /healthcheck:
   *  get:
   *     tags:
   *     - Healthcheck
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  app.get('/healthcheck', handleHealthCheck)

  /**
   * @openapi
   * '/api/users':
   *  post:
   *     tags:
   *     - User
   *     summary: Register a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateUserInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateUserResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
  app.post('/api/users', validateResource(createUserSchema), createUserHandler)

  app.post(
    '/api/sessions',
    validateResource(createSessionSchema),
    createUserSessionHandler,
  )

  app.get('/api/sessions', requireUser, getUserSessionsHandler)

  app.delete('/api/sessions', requireUser, deleteSessionHandler)

  app.post(
    '/api/products',
    [requireUser, validateResource(createProductSchema)],
    createProductHandler,
  )

  /**
   * @openapi
   * '/api/products/{productId}':
   *  get:
   *     tags:
   *     - Products
   *     summary: Get a single product by the productId
   *     parameters:
   *      - name: productId
   *        in: path
   *        description: The id of the product
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/Product'
   *       404:
   *         description: Product not found
   */
  app.put(
    '/api/products/:productId',
    [requireUser, validateResource(updateProductSchema)],
    updateProductHandler,
  )

  app.get(
    '/api/products/:productId',
    validateResource(getProductSchema),
    getProductHandler,
  )

  app.delete(
    '/api/products/:productId',
    [requireUser, validateResource(deleteProductSchema)],
    deleteProductHandler,
  )

  app.get('/workouts/:name', handleGetWorkouts)
}

export default routes
