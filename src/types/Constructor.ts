import {Color} from "./Color";

export interface Constructor {
  id: number;
  name: string;
  color: Color;
  nationality: string;
  value: number;
}