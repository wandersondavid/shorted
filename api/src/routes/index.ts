import { Router, Response, Request } from "express";


const router = Router();


router.get('/shortener/link/:code/status', (req: Request, res: Response)=>{
    res.send({data:  req.params})
})


router.get('/shortener/link/:code', (req: Request, res: Response)=>{
    req.params
    res.send({data:  req.params})
})


router.post('/shortener/link', (req: Request, res: Response)=>{
    req.body
    res.send({data: req.body.data})
})

export default router;