import * as TE from 'fp-ts/TaskEither'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { createUserCodec, CreateUserType } from '../types'
import { ValidationError } from '@/helpers/errors'
import { failure } from 'io-ts/PathReporter'
import { Type } from 'io-ts'

export type OutsideCreateUser<A> = (data: CreateUserType) => Promise<A>


type CreateUser = <A>(outsideCreateUser: OutsideCreateUser<A>) => (data: CreateUserType) => TE.TaskEither<Error, A>

type ValidateCodec = <A, O, I>(codec: Type<A, O, I>) =>
    (data: I) => E.Either<ValidationError, O>

export const validateCodec: ValidateCodec = (codec) => (data) => {
    return pipe(
        codec.decode(data),
        E.map(codec.encode),
        E.mapLeft(errors => new ValidationError(failure(errors).join(':::'))),
    )
}

export const createUser: CreateUser = (outsideCreateUser) => (data) => {
    return pipe(
        data,
        validateCodec(createUserCodec),
        TE.fromEither,
        TE.chain(() => TE.tryCatch(
            () => outsideCreateUser(data),
            E.toError,
        ))
    )

}