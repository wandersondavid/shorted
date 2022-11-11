import { Response, Request } from "express";

const HandlerErrorNotFound = (_req: Request, _res: Response, next: any) => {
    next('Not Found')
}

const HandlerError = (err: Error,_req: Request, res: Response, _next: any) => {
    res.status(500)
    res.json({ error: err })
}

export { HandlerError, HandlerErrorNotFound };
