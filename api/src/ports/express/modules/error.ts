import { DefaultErrorInput, NotFoundError } from "@/helpers/errors";
import { Response, Request } from "express";

const HandlerErrorNotFound = (_req: Request, _res: Response, _next: any) => {

    throw new NotFoundError('Not Found')
}

const HandlerError = (err: DefaultErrorInput,_req: Request, res: Response, _next: any) => {

    res.status(err?.code || 500)

    res.json({ error: {
            code: err.code,
            name: err.name,
            message: err.message
        }
    })
}

export { HandlerError, HandlerErrorNotFound };
