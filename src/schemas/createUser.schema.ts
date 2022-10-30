import * as yup from "yup";
import { SchemaOf } from "yup";
import { v4 as uuid } from "uuid";
import { hashSync } from "bcrypt";
import { IUserRequest } from "../interfaces/users.interfaces";

export const createUserSchema: SchemaOf<IUserRequest> = yup.object().shape({
  id: yup
    .string()
    .transform(() => uuid())
    .default(() => uuid())
    .notRequired(),
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup
    .string()
    .transform((password) => hashSync(password, 10))
    .required(),
  isAdm: yup.boolean().default(false).required(),
  isActive: yup.boolean().default(true).notRequired(),
});
