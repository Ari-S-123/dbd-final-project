import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "users"})
export class User {

  @PrimaryGeneratedColumn({type: "int"})
  id!: number;

  @Column({type: "varchar"})
  firstName!: string;

  @Column({type: "varchar"})
  lastName!: string;

  @Column({type: "varchar"})
  username!: string;

  @Column({type: "varchar"})
  email!: string;

  @Column({type: "date"})
  dateOfBirth!: Date;
}