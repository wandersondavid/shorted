import { Router, Response, Request } from "express";


const router = Router();



router.get('/test', (req: Request, res: Response)=>{
    req.body
    res.send({menssagen: 'ok'})
})

export default router;