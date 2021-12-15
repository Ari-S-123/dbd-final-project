import {FantasyTeam} from "../models/FantasyTeam";
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

export class TeamDAO {

  createTeam = (team: FantasyTeam) => {
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
      const teamRepository = connection.getRepository(FantasyTeam);
      await teamRepository.save(team);
      await connection.close();
    }).catch(error => console.log(error));
  }

  findAllTeams = async (): Promise<FantasyTeam[]> => {
    let allTeams: FantasyTeam[] = [];
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
      const teamRepository = connection.getRepository(FantasyTeam);
      allTeams = await teamRepository.find();
      await connection.close();
    }).catch(error => console.log(error));
    return allTeams;
  }

  findTeamById = async (id: number): Promise<FantasyTeam | undefined> => {
    let team: FantasyTeam | undefined;
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
      const teamRepository = connection.getRepository(FantasyTeam);
      team = await teamRepository.findOne(id);
      await connection.close();
    }).catch(error => console.log(error));
    return team;
  }

  updateTeam = (id: number, teamUpdate: FantasyTeam) => {
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
      const teamRepository = connection.getRepository(FantasyTeam);
      let team: FantasyTeam | undefined = await teamRepository.findOne(id);
      team!.name = teamUpdate.name;
      team!.budget = teamUpdate.budget;
      team!.user = teamUpdate.user;
      team!.constructer = teamUpdate.constructer;
      await teamRepository.save(team!);
      await connection.close();
    }).catch(error => console.log(error));
  }

  deleteTeam = (id: number) => {
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
      const teamRepository = connection.getRepository(FantasyTeam);
      await teamRepository.delete(id);
      await connection.close();
    }).catch(error => console.log(error));
  }
}