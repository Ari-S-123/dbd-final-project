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

  createSeatMap = (seatMap: FantasySeatMap) => {
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
      const fantasySeatMapRepository = connection.getRepository(FantasySeatMap);
      await fantasySeatMapRepository.save(seatMap);
      await connection.close();
    }).catch(error => console.log(error));
  }

  deleteSeatMap = (id: number) => {
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
      const fantasySeatMapRepository = connection.getRepository(FantasySeatMap);
      await fantasySeatMapRepository.delete(id);
      await connection.close();
    }).catch(error => console.log(error));
  }

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

  findSeatByBothIds = async (team_id: number, driver_id: number): Promise<FantasySeatMap | undefined> => {
    let seat: FantasySeatMap | undefined;
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
      seat = await seatRepository.findOne({driverId: driver_id, fantasyTeamId: team_id});
      await connection.close();
    }).catch(error => console.log(error));
    return seat;
  }
}