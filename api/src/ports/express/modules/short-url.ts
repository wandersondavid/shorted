import {
  findCountingUsageShortLinkByCodeInDB,
  findShortLinkByCodeInDB,
  shortenerLink,
} from "@/ports/adapters/http/mudules/short-url";
import { Router, Response, Request } from "express";

const shortUrlRoutes = Router();

shortUrlRoutes.get(
  "/shortener/link/:code/status",
  async (req: Request, res: Response, next) => {
    try {
      const { code } = req.params;
      const data = await findCountingUsageShortLinkByCodeInDB(code);
      res.send({ data });
    } catch (error) {
      next(error);
    }
  }
);

shortUrlRoutes.get(
  "/shortener/link/:code",
  async (req: Request, res: Response, next) => {
    try {
      const { code } = req.params;
      const data = await findShortLinkByCodeInDB(code);
      res.send({ data });
    } catch (error) {
      next(error);
    }
  }
);

shortUrlRoutes.post(
  "/shortener/link",
  async (req: Request, res: Response, next) => {
    try {
      const data = await shortenerLink(req.body.data);
      res.send({ data });
    } catch (error) {
      next(error);
    }
  }
);

export { shortUrlRoutes };
