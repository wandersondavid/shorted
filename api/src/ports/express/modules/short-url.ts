import { dataBase } from "@/ports/db-prisma";
import { Router, Response, Request } from "express";
import { v4 as uuidv4 } from "uuid";

const shortUrlRoutes = Router();

shortUrlRoutes.get(
  "/shortener/link/:code/status",
  (req: Request, res: Response) => {
    res.send({ data: req.params });
  }
);

shortUrlRoutes.get(
  "/shortener/link/:code",
  async (req: Request, res: Response) => {
    const { code } = req.params;
    const data = await dataBase.shortener_link.findUnique({
      where: {
        code,
      },
    });

    let countingUsage = data?.counting_usage ?? 1;

    countingUsage++

    await dataBase.shortener_link.update({
      where: {
        code,
      },
      data: {
        counting_usage: countingUsage,
      },
    });
    res.send({ data: { link: data?.original_link, countingUsage } });

  }
);

shortUrlRoutes.post(
  "/shortener/link",
  async (req: Request, res: Response, next) => {
    const { originalLink } = req.body.shortener;

    const code = geraStringAleatoria(7);
    const urlBase = process.env["BASE_URL_FRONT"];

    const shortLink = `${urlBase}/link/${code}`;
    try {
      const add = await dataBase.shortener_link.create({
        data: {
          idshortener_link: uuidv4(),
          code,
          original_link: originalLink,
          short_link: shortLink,
        },
      });

      res.send({ data: add.short_link });
    } catch (error) {
      next(error);
    }
  }
);

const geraStringAleatoria = (tamanho: number) => {
  var stringAleatoria = "";
  var caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < tamanho; i++) {
    stringAleatoria += caracteres.charAt(
      Math.floor(Math.random() * caracteres.length)
    );
  }
  return stringAleatoria;
};

export { shortUrlRoutes };
