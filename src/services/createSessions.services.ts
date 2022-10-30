import AppDataSource from "../data-source";
import { IUserLogin } from "../interfaces/users.interfaces";
import { compare } from "bcrypt";
import { User } from "../entities/user.entities";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../errors/appError";

export const createSessionsService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError("Invalida user or password", 403);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalida user or password", 403);
  }

  const token = jwt.sign(
    {
      isAdm: user.isAdm,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: user.id,
    }
  );

  return token;
};
