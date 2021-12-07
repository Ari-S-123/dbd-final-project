import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Driver {

  @PrimaryGeneratedColumn({type: "int"})
  id: number;

  @Column({type: "varchar"})
  name: string;

  @Column({type: "varchar"})
  nationality: string;

  @Column({type: "int"})
  value: number;

  @Column({type: "int"})
  constructorId: number;
}