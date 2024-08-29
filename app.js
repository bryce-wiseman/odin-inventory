import express from 'express'
import { router } from './routes/router.js'
import url from 'url'
import path from 'path'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(express.static(__dirname + '/public'))

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

let PORT = process.env.PORT

app.listen(PORT, () => console.log(`app is running on port ${PORT}`))