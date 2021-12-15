import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "fantasy_seat_maps"})
export class FantasySeatMap {

  @PrimaryGeneratedColumn({type: "int"})
  id!: number;

  @Column({type: "int", name: "driver"})
  driverId!: number;

  @Column({type: "int", name: "fantasy_team"})
  fantasyTeamId!: number;
}