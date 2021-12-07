import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "fantasy_teams"})
export class FantasyTeam {

  @PrimaryGeneratedColumn({type: "int"})
  id!: number;

  @Column({type: "varchar"})
  name!: string;

  @Column({type: "int"})
  budget!: number;

  @Column({type: "int"})
  userId!: number;

  @Column({type: "int"})
  constructorId!: number;
}