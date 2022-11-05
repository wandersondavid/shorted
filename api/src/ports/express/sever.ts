import express from 'express'

import index from '../../routes/index';

const app = express()
const PORT =  process.env['PORT'];

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', index);

app.listen(PORT, () => {
    console.log(`Sever is listenin on port ${PORT}`)
});