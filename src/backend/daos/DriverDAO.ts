import {Driver} from "../models/Driver";
import {createConnection} from "typeorm";
import {
  database_name,
  entities,
  host,
  logging,
  password,
  port,
  synchronize,
  username
} from "../database-settings";

export class DriverDAO {

  createDriver = (driver: Driver) => {
    createConnection({
      type: "mysql",
      host: host,
      port: port,
      database: database_name,
      username: username,
      password: password,
      logging: logging,
      synchronize: synchronize,
      entities: entities
    }).then(async connection => {
      const driverRepository = connection.getRepository(Driver);
      await driverRepository.save(driver);
      await connection.close();
    }).catch(error => console.log(error));
  }

  findAllDrivers = async (): Promise<Driver[]> => {
    let allDrivers: Driver[] = [];
    await createConnection({
      type: "mysql",
      host: host,
      port: port,
      database: database_name,
      username: username,
      password: password,
      logging: logging,
      synchronize: synchronize,
      entities: entities
    }).then(async connection => {
      const driverRepository = connection.getRepository(Driver);
      allDrivers = await driverRepository.find();
      await connection.close();
    }).catch(error => console.log(error));
    return allDrivers;
  }

  findDriverById = async (id: number): Promise<Driver | undefined> => {
    let driver: Driver | undefined;
    await createConnection({
      type: "mysql",
      host: host,
      port: port,
      database: database_name,
      username: username,
      password: password,
      logging: logging,
      synchronize: synchronize,
      entities: entities
    }).then(async connection => {
      const driverRepository = connection.getRepository(Driver);
      driver = await driverRepository.findOne(id);
      await connection.close();
    }).catch(error => console.log(error));
    return driver;
  }

  updateDriver = (id: number, driverUpdate: Driver) => {
    createConnection({
      type: "mysql",
      host: host,
      port: port,
      database: database_name,
      username: username,
      password: password,
      logging: logging,
      synchronize: synchronize,
      entities: entities
    }).then(async connection => {
      const driverRepository = connection.getRepository(Driver);
      let driver: Driver | undefined = await driverRepository.findOne(id);
      driver!.id = driverUpdate.id;
      driver!.name = driverUpdate.name;
      driver!.nationality = driverUpdate.nationality;
      driver!.value = driverUpdate.value;
      driver!.constructor_id = driverUpdate.constructor_id;
      await driverRepository.save(driver!);
      await connection.close();
    }).catch(error => console.log(error));
  }

  deleteDriver = (id: number) => {
    createConnection({
      type: "mysql",
      host: host,
      port: port,
      database: database_name,
      username: username,
      password: password,
      logging: logging,
      synchronize: synchronize,
      entities: entities
    }).then(async connection => {
      const driverRepository = connection.getRepository(Driver);
      await driverRepository.delete(id);
      await connection.close();
    }).catch(error => console.log(error));
  }
}