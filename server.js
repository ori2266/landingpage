const express = requier('express')
const serveStatic = requier('serve-static')
const path = requier('path')

const app = express()

app.use('/', serverStatic(path.join(__dirname,'/dist')))

const port = process.env.PORT || 8080
app.listen(port)