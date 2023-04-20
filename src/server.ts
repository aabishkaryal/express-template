// Write a basic hello world server with typescript and express

import express from 'express'
import { Request, Response } from 'express'

const PORT = 8000
const app = express()

async function main() {
    app.get('/', (req: Request, res: Response) => {
        res.send('Hello World!')
    })

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}

main()
