import Joi from 'joi'
import { Login } from '@/types'

export const loginSchema = Joi.object<Login>({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
})
