import { shortenerLink } from "@/ports/adapters/http/mudules/short-url";
import { Router, Response, Request } from "express";
// import { v4 as uuidv4 } from "uuid";

const shortUrlRoutes = Router();

// shortUrlRoutes.get(
//   "/shortener/link/:code/status",
//   async (req: Request, res: Response, next) => {
//     const { code } = req.params;

//     try {
//       const data = await dataBase.shortener_link.findUnique({
//         where: {
//           code,
//         },
//       });

//       res.send({ data: { use: data?.counting_usage } });
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// shortUrlRoutes.get(
//   "/shortener/link/:code",
//   async (req: Request, res: Response, next) => {
//     const { code } = req.params;

//     try {
//       const data = await dataBase.shortener_link.findUnique({
//         where: {
//           code,
//         },
//       });

//       let countingUsage = data?.counting_usage ?? 1;

//       countingUsage++;

//       await dataBase.shortener_link.update({
//         where: {
//           code,
//         },
//         data: {
//           counting_usage: countingUsage,
//         },
//       });
//       res.send({ data: { link: data?.original_link } });
//     } catch (error) {
//       next(error);
//     }
//   }
// );

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
