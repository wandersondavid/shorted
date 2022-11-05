import { dataBase } from "@/ports/db-prisma";
import { Router, Response, Request } from "express";
// import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';
// const dataBase = new PrismaClient();

const router = Router();

router.get("/shortener/link/:code/status", (req: Request, res: Response) => {
  res.send({ data: req.params });
});

router.get("/shortener/link/:code", (req: Request, res: Response) => {
  req.params;
  res.send({ data: req.params });
});

router.post("/shortener/link", async (req: Request, res: Response) => {
  req.body;

  const add = await dataBase.user.create({
    data: {
      iduser:uuidv4(),
      nome: 'wanederson',
      username: uuidv4(),
      password: "333333333"
    },
  });

  console.log("add", add);

  res.send({ data: req.body.data });
});

export default router;
