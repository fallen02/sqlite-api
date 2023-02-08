const express = require('express')
const bodyparser = require('body-parser')
const app = express()

const db = require('./db/worker')

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

const PORT = process.env.PORT || 3000
app.post('/addUser', async(req, res) => {
    const results = await db.createUser(req.body)
    res.status(201).json({status: "success"})
})


app.get('/allUsers', async (req, res) => {
    const users = await db.getallAdmin()
    res.status(200).json({users})
})

app.delete('/delete/:id', async(req, res) => {
    await db.deleteUser(req.params.id)
    res.status(200).json({success: true})
})


app.listen(PORT, () => console.log(`Server is running on ${PORT}`))