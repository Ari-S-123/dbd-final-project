import {FantasySeatMap} from "../models/FantasySeatMap";
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

export class SeatMapDAO {
  findSeatsByDriverId = async (id: number): Promise<FantasySeatMap[] | undefined> => {
    let seats: FantasySeatMap[] = [];
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
      const seatRepository = connection.getRepository(FantasySeatMap);
      seats = await seatRepository.find({driverId: id});
      await connection.close();
    }).catch(error => console.log(error));
    return seats;
  }

  findSeatsByTeamId = async (id: number): Promise<FantasySeatMap[] | undefined> => {
    let seats: FantasySeatMap[] = [];
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
      const seatRepository = connection.getRepository(FantasySeatMap);
      seats = await seatRepository.find({fantasyTeamId: id});
      await connection.close();
    }).catch(error => console.log(error));
    return seats;
  }
}