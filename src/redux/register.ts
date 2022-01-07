import { IsEnum } from "class-validator";
import { GeneralRole } from "./entities";

export class IRegister {
  name!: string;
  apellido: string;
  segApe?: string;
  email: string;
  password: string;
  @IsEnum(GeneralRole, {
    each: true,
    message: "Must be a valid role",
  })
  roles: string[];
  status?: string;
}
