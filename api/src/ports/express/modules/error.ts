import { DefaultErrorInput, NotFoundError } from "@/helpers/errors";
import { Response, Request } from "express";

const HandlerErrorNotFound = (_req: Request, _res: Response, _next: any) => {

    throw new NotFoundError('Not Found')
}

const HandlerError = (err: DefaultErrorInput,_req: Request, res: Response, _next: any) => {

    res.status(err?.code || 500)

    try {

        res.json({ error: {
                code: err.code,
                name: err.name,
                message: err.message,
            }
        })

    } catch (err) {
        res.json({ error: {
                code: 555,
                name: 'Error Interno',
                message: 'Error Interno'
            }
        })
    }
}

export { HandlerError, HandlerErrorNotFound };
