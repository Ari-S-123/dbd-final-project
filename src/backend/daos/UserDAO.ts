import {User} from "../models/User";
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

export class UserDAO {

  createUser = (user: User) => {
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
      const userRepository = connection.getRepository(User);
      await userRepository.save(user);
      await connection.close();
    }).catch(error => console.log(error));
  }

  findAllUsers = async (): Promise<User[]> => {
    let allUsers: User[] = [];
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
      const userRepository = connection.getRepository(User);
      allUsers = await userRepository.find();
      await connection.close();
    }).catch(error => console.log(error));
    return allUsers;
  }

  findUserById = async (id: number): Promise<User | undefined> => {
    let user: User | undefined;
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
      const userRepository = connection.getRepository(User);
      user = await userRepository.findOne(id);
      await connection.close();
    }).catch(error => console.log(error));
    return user;
  }

  updateUser = (id: number, userUpdate: User) => {
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
      const userRepository = connection.getRepository(User);
      let user: User | undefined = await userRepository.findOne(id);
      user!.firstName = userUpdate.firstName;
      user!.lastName = userUpdate.lastName;
      user!.username = userUpdate.username;
      user!.email = userUpdate.email;
      user!.dateOfBirth = userUpdate.dateOfBirth;
      await userRepository.save(user!);
      await connection.close();
    }).catch(error => console.log(error));
  }

  deleteUser = (id: number) => {
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
      const userRepository = connection.getRepository(User);
      await userRepository.delete(id);
      await connection.close();
    }).catch(error => console.log(error));
  }
}