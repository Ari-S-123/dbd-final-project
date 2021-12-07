import UserDAO from "./daos/UserDAO";


const express = require('express')
const app = express()
const port = 4000

app.get('/findUserById', async (req: any, res: any) => {
  const allUsers = await new UserDAO().findUserById();
  res.send(allUsers)
})

app.get('/findAllUsers', async (req: any, res: any) => {
  const allUsers = await new UserDAO().findAllUsers();
  res.send(allUsers)
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})