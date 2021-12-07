import {UserDAO} from "./daos/UserDAO";
import {TeamDAO} from "./daos/TeamDAO";
import {DriverDAO} from "./daos/DriverDAO";
import {ConstructorDAO} from "./daos/ConstructorDAO";


const express = require('express')
const app = express()
const port = 4000

app.get('/findAllUsers', async (req: any, res: any) => {
  const allUsers = await new UserDAO().findAllUsers();
  res.send(allUsers)
})

app.get('/findAllTeams', async (req: any, res: any) => {
  const allTeams = await new TeamDAO().findAllTeams();
  res.send(allTeams)
})

app.get('/findAllDrivers', async (req: any, res: any) => {
  const allDrivers = await new DriverDAO().findAllDrivers();
  res.send(allDrivers)
})

app.get('/findAllConstructors', async (req: any, res: any) => {
  const allConstructors = await new ConstructorDAO().findAllConstructors();
  res.send(allConstructors)
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})