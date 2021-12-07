import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "drivers"})
export class Driver {

  @PrimaryGeneratedColumn({type: "int"})
  id!: number;

  @Column({type: "varchar"})
  name!: string;

  @Column({type: "varchar"})
  nationality!: string;

  @Column({type: "int"})
  value!: number;

  @Column({type: "int"})
  constructor_id!: number;
}