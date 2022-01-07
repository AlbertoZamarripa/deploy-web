import { IsEnum } from "class-validator";
import { Action } from "redux";

export enum GeneralRole {
  MANAGER = "MANAGER",
  ADMIN = "ADMIN",
  USER = "USER",
}

export class IRegister {
  name: string;
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

export interface User {
  id?: string;
  nombre: string;
  apellido: string;
  segApe: string;
  email: string;
}

export interface IStateUser {
  user: {
    id?: string;
    nombre: string;
    apellido: string;
    segApe: string;
    email: string;
  };
}

export interface UserLogin {
  email: string;
  password: string;
}
export interface UserState extends ApiCallState {
  isLoggedIn: boolean;
  user?: User;
}

export interface ApiCallAction extends Action {
  isInProgress?: boolean;
  error?: Error;
}

export interface ApiCallState {
  isInProgress: boolean;
  error?: Error;
}
