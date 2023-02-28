import * as t from 'io-ts'
import { emailCodec, passwordCodec, slugCodec } from '../types'



export const createUserCodec =  t.type({
    username: slugCodec,
    email: emailCodec,
    password: passwordCodec,
})

export type CreateUserType = t.TypeOf<typeof createUserCodec>
export type CreateUserOutput = t.OutputOf<typeof createUserCodec>