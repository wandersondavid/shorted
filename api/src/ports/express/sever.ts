import express from 'express'

import index from '../../routes/index';

const app = express()
const PORT =  3333

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', index);

app.listen(PORT, () => {
    console.log(`Sever is listenin on port ${PORT}`)
})

// const getError = (errors: string) => {
//     return {
//         errors: {
//             body: errors.split(':::'),
//         }
//     }
// }