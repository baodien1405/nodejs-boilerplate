import { Request, Response, NextFunction } from 'express'
import { CREATED, OK } from '@/core'
import { AccessService } from '@/services'

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  new CREATED({
    message: 'Successfully!',
    metadata: await AccessService.signUp(req.body)
  }).send(res)
}

const login = async (req: Request, res: Response, next: NextFunction) => {
  new OK({
    message: 'Successfully!',
    metadata: await AccessService.login(req.body)
  }).send(res)
}

export const AccessController = {
  signUp,
  login
}
