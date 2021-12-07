import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class FantasySeatMap {

  @PrimaryGeneratedColumn({type: "int"})
  id!: number;

  @Column({type: "int"})
  driverId!: number;

  @Column({type: "int"})
  fantasyTeamId!: number;
}