import {UserDAO} from "./daos/UserDAO";
import {TeamDAO} from "./daos/TeamDAO";
import {DriverDAO} from "./daos/DriverDAO";
import {ConstructorDAO} from "./daos/ConstructorDAO";
import {User} from "./models/User";
import {Constructor} from "./models/Constructor";
import {Driver} from "./models/Driver";
import {FantasyTeam} from "./models/FantasyTeam";
import {SeatMapDAO} from "./daos/SeatMapDAO";
import {FantasySeatMap} from "./models/FantasySeatMap";


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

app.get('/updateConstructor/:id/:name/:color/:nationality/:value', async (req: any, res: any) => {
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

app.post('/findDriverById', bodyParser.text(), async (req: any, res: any) => {
  const id: number = Number(req.body)
  const driver = await new DriverDAO().findDriverById(id);
  res.send(driver)
})

app.get('/findDriversByConstructorId/:constructorId', async (req: any, res: any) => {
  const {constructorId} = req.params;
  const drivers = await new DriverDAO().findAllDriversByConstructorID(constructorId);
  res.send(drivers)
})

app.get('/findTeamsByConstructorId/:constructorId', async (req: any, res: any) => {
  const {constructorId} = req.params;
  const teams = await new TeamDAO().findTeamsByConstructorId(constructorId);
  res.send(teams)
})

app.get('/createDriver/:name/:nationality/:value/:constructor_id', async (req: any, res: any) => {
  const {name, nationality, value, constructor_id} = req.params;
  const driver = new Driver();
  driver.name = name;
  driver.nationality = nationality;
  driver.value = value;
  driver.constructor_id = constructor_id;
  new DriverDAO().createDriver(driver);
  res.send();
})

app.get('/updateDriver/:id/:name/:nationality/:value/:constructor_id', async (req: any, res: any) => {
  const {id, name, nationality, value, constructor_id} = req.params;
  const driver = new Driver();
  driver.name = name;
  driver.nationality = nationality;
  driver.value = value;
  driver.constructor_id = constructor_id;
  new DriverDAO().updateDriver(id, driver);
  res.send();
})

app.get('/deleteDriver/:id', async (req: any, res: any) => {
  const {id} = req.params;
  new DriverDAO().deleteDriver(id);
  res.send()
})

app.post('/findTeamById', bodyParser.text(), async (req: any, res: any) => {
  const id: number = Number(req.body)
  const team = await new TeamDAO().findTeamById(id);
  res.send(team)
})

app.get('/findTeamsByUserId/:userId', async (req: any, res: any) => {
  const {userId} = req.params;
  const teams = await new TeamDAO().findTeamsByUserId(userId);
  res.send(teams)
})

app.get('/createTeam/:name/:budget/:user/:constructer', async (req: any, res: any) => {
  const {name, budget, user, constructer} = req.params;
  const team = new FantasyTeam();
  team.name = name;
  team.budget = budget;
  team.user = user;
  team.constructer = constructer;
  new TeamDAO().createTeam(team);
  res.send();
})

app.get('/updateTeam/:id/:name/:budget/:user/:constructer', async (req: any, res: any) => {
  const {id, name, budget, user, constructer} = req.params;
  const team = new FantasyTeam();
  team.name = name;
  team.budget = budget;
  team.user = user;
  team.constructer = constructer;
  new TeamDAO().updateTeam(id, team);
  res.send();
})

app.get('/deleteTeam/:id', async (req: any, res: any) => {
  const {id} = req.params;
  new TeamDAO().deleteTeam(id);
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

app.get('/findSeatsByDriverId/:id', async (req: any, res: any) => {
  const {id} = req.params;
  const seats = await new SeatMapDAO().findSeatsByDriverId(id);
  res.send(seats)
})

app.get('/findSeatsByTeamId/:id', async (req: any, res: any) => {
  const {id} = req.params;
  const seats = await new SeatMapDAO().findSeatsByTeamId(id);
  res.send(seats)
})

app.get('/findSeatByBothIds/:team_id/:driver_id', async (req: any, res: any) => {
  const {team_id, driver_id} = req.params;
  const seat = await new SeatMapDAO().findSeatByBothIds(team_id, driver_id);
  res.send(seat)
})

app.get('/createSeat/:driverId/:fantasyTeamId', async (req: any, res: any) => {
  const {driverId, fantasyTeamId} = req.params;
  const seatMap = new FantasySeatMap();
  seatMap.driverId = driverId;
  seatMap.fantasyTeamId = fantasyTeamId;
  new SeatMapDAO().createSeatMap(seatMap);
  res.send();
})

app.get('/deleteSeat/:id', async (req: any, res: any) => {
  const {id} = req.params;
  new SeatMapDAO().deleteSeatMap(id);
  res.send()
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})