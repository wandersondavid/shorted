export type DefaultErrorInput = {
  name: string
  code: number
  message?: string
}

export class DefaultError extends Error {
  code: number

  constructor({ name, code, message }: DefaultErrorInput) {
    super(message)
    this.name = name
    this.code = code
  }
}

const createError = ({ name, code, message }: DefaultErrorInput) =>
  class extends DefaultError {
    constructor(messagen?: string) {
      super({ name, code, message: message || messagen });
    }
  };

export const AuthError = createError({ name:'AuthError', code:401, message:'Unauthorized' });
export const ForbiddenError = createError({ name:'ForbiddenError', code:403, message:'' });
export const NotFoundError = createError({ name:'NotFoundError', code:404, message:'' });
// export const ValidationError = createError({ name:'ValidationError', code:422, message:'' });
export const UnknownError = createError({ name:'UnknownError', code:418, message:'Unknown error' });


export class ValidationError extends DefaultError {
  constructor (message: string) {
    super({ name: 'ValidationError', code: 422, message })
  }
}