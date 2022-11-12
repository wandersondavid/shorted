import { DefaultErrorInput, NotFoundError } from "@/helpers/errors";
import { Response, Request } from "express";

const HandlerErrorNotFound = (_req: Request, _res: Response, _next: any) => {
  throw new NotFoundError("Not Found");
};

const HandlerError = ( err: DefaultErrorInput,  req: Request,  res: Response,  _next: any) => {
  try {
    res.status(err?.code || 500);

    return res.json({
      error: {
        code: err.code,
        name: err.name,
        message: err.message,
      },
    });
  } catch (err: unknown) {
    if (req.timedout) {
      res.status(503);
      return res.send({
        error: {
          code: 503,
          name: "Timeout",
          message: "timedout",
        },
      });
    }

    res.status(500);
    return res.send({
      error: {
        code: 500,
        name: "Internal error",
        message: "Internal error",
      },
    });
  }
};

export { HandlerError, HandlerErrorNotFound };
