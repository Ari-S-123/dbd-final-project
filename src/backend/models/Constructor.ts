import {Color} from "./Color";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Constructor {

  @PrimaryGeneratedColumn({type: "int"})
  id: number;

  @Column({type: "varchar"})
  name: string;

  @Column({
    type: "enum",
    enum: Color,
    default: Color.BLACK
  })
  color: Color;

  @Column({type: "varchar"})
  nationality: string;

  @Column({type: "int"})
  value: number;
}