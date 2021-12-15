import {UserDAO} from "./daos/UserDAO";
import {TeamDAO} from "./daos/TeamDAO";
import {DriverDAO} from "./daos/DriverDAO";
import {ConstructorDAO} from "./daos/ConstructorDAO";
import {User} from "./models/User";
import {Constructor} from "./models/Constructor";


const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 4000

app.get('/findAllUsers', async (req: any, res: any) => {
  const allUsers = await new UserDAO().findAllUsers();
  res.send(allUsers)
})

app.post('/findUserById', bodyParser.text(), async (req: any, res: any) => {
  const id: number = Number(req.body)
  const user = await new UserDAO().findUserById(id);
  res.send(user)
})

app.get('/createUser/:firstName/:lastName/:username/:email/:dateOfBirth', async (req: any, res: any) => {
  const {firstName, lastName, username, email, dateOfBirth} = req.params;
  const user = new User();
  user.firstName = firstName;
  user.lastName = lastName;
  user.username = username;
  user.email = email;
  user.dateOfBirth = new Date(dateOfBirth);
  new UserDAO().createUser(user);
  res.send();
})

app.get('/updateUser/:id/:firstName/:lastName/:username/:email/:dateOfBirth', async (req: any, res: any) => {
  const {id, firstName, lastName, username, email, dateOfBirth} = req.params;
  const user = new User();
  user.firstName = firstName;
  user.lastName = lastName;
  user.username = username;
  user.email = email;
  user.dateOfBirth = new Date(dateOfBirth);
  new UserDAO().updateUser(id, user);
  res.send();
})

app.get('/deleteUser/:id', async (req: any, res: any) => {
  const {id} = req.params;
  new UserDAO().deleteUser(id);
  res.send()
})

app.post('/findConstructorById', bodyParser.text(), async (req: any, res: any) => {
  const id: number = Number(req.body)
  const constructor = await new ConstructorDAO().findConstructorById(id);
  res.send(constructor)
})

app.get('/createConstructor/:name/:color/:nationality/:value', async (req: any, res: any) => {
  const {name, color, nationality, value} = req.params;
  const constructor = new Constructor();
  constructor.name = name;
  constructor.color = color;
  constructor.nationality = nationality;
  constructor.value = value;
  new ConstructorDAO().createConstructor(constructor);
  res.send();
})

app.get('/updateConstructor/:id/:name/:color/:nationality/:value/', async (req: any, res: any) => {
  const {id, name, color, nationality, value} = req.params;
  const constructor = new Constructor();
  constructor.name = name;
  constructor.color = color;
  constructor.nationality = nationality;
  constructor.value = value;
  new ConstructorDAO().updateConstructor(id, constructor);
  res.send();
})

app.get('/deleteConstructor/:id', async (req: any, res: any) => {
  const {id} = req.params;
  new ConstructorDAO().deleteConstructor(id);
  res.send()
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