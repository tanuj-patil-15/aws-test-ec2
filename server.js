const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req,res) => {
    res.status(200).json({
        message : "API tested",
        data:[
            {
                id:1,
                name:"abc"

            },
            {
                id:2,
                name:"xyz"
            }
        ]
    })
}
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
