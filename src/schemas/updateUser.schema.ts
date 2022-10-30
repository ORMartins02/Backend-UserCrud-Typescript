import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequestUpdate } from "../interfaces/users.interfaces";
import { hashSync } from "bcrypt";

export const updateUserSchema: SchemaOf<IUserRequestUpdate> = yup
  .object()
  .shape({
    name: yup.string().notRequired(),
    email: yup.string().notRequired(),
    password: yup
      .string()
      .transform((password) => hashSync(password, 10))
      .notRequired(),
  });
