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

shortUrlRoutes.get("/shortener/link/:code", (req: Request, res: Response) => {
  req.params;
  res.send({ data: req.params });
});

shortUrlRoutes.post("/shortener/link", async (req: Request, res: Response) => {
  const {originalLink } = req.body.shortener;

  const code  = geraStringAleatoria(7);
  const urlBase = process.env['BASE_URL_FRONT'];

  console.log(urlBase)
  const shortLink = `${urlBase}/link/${code}`
try {
  const add = await dataBase.shortener_link.create({
    data: {
      idshortener_link: uuidv4(),
      code,
      original_link: originalLink,
      short_link:shortLink,
    },
  });

  res.send({ add });
} catch (error) {
    throw error;
}

});



const geraStringAleatoria = (tamanho: number) => {
  var stringAleatoria = '';
  var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < tamanho; i++) {
      stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return stringAleatoria;
}

export { shortUrlRoutes };
