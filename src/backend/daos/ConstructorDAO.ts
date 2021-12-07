import {Constructor} from "../models/Constructor";
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

export class ConstructorDAO {

  createConstructor = (constructor: Constructor) => {
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
      const constructorRepository = connection.getRepository(Constructor);
      await constructorRepository.save(constructor);
      await connection.close();
    }).catch(error => console.log(error));
  }

  findAllConstructors = (): Constructor[] => {
    let allConstructors: Constructor[] = [];
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
      const constructorRepository = connection.getRepository(Constructor);
      allConstructors = await constructorRepository.find();
      await connection.close();
    }).catch(error => console.log(error));
    return allConstructors;
  }

  findConstructorById = (id: number): Constructor | undefined => {
    let constructor: Constructor | undefined;
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
      const constructorRepository = connection.getRepository(Constructor);
      constructor = await constructorRepository.findOne(id);
      await connection.close();
    }).catch(error => console.log(error));
    return constructor;
  }

  updateConstructor = (id: number, constructorUpdate: Constructor) => {
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
      const constructorRepository = connection.getRepository(Constructor);
      let constructor: Constructor | undefined = await constructorRepository.findOne(id);
      constructor!.id = constructorUpdate.id;
      constructor!.name = constructorUpdate.name;
      constructor!.color = constructorUpdate.color;
      constructor!.nationality = constructorUpdate.nationality;
      constructor!.value = constructorUpdate.value;
      await constructorRepository.save(constructor!);
      await connection.close();
    }).catch(error => console.log(error));
  }

  deleteConstructor = (id: number) => {
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
      const constructorRepository = connection.getRepository(Constructor);
      await constructorRepository.delete(id);
      await connection.close();
    }).catch(error => console.log(error));
  }
}