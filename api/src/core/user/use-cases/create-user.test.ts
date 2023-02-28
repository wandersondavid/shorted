import { OutsideCreateUser, createUser } from "./create-user"
import { pipe } from 'fp-ts/function'
import { mapAll } from '@/config/tests/fixtures'
import { CreateUserType } from "../types"


const registerOk: OutsideCreateUser<string> = async (data) => {
    return `Usuário ${data.username} cadastrado com sucesso!`
}

function unsafe <T> (value: unknown): T {
    return value as T
}

const data: CreateUserType = {
    username: unsafe('john'),
    email: unsafe('john@doe.com'),
    password: unsafe('jhon123!'),
}


describe('Creat User', () => {

    it('Should register a user properly', async () => {
        return pipe(
            data,
            createUser(registerOk),
            mapAll(result => expect(result).toBe(`Usuário ${data.username} cadastrado com sucesso!`)),
        )()
    })
})