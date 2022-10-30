import { hash } from "bcrypt";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entities";
import { AppError } from "../errors/appError";
import { IUserRequestUpdate } from "../interfaces/users.interfaces";

export const updateUserService = async (
  { name, email, password }: IUserRequestUpdate,
  id: string
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id,
  });

  if (!findUser) {
    throw new AppError("User not Found", 404);
  }

  await userRepository.update(id, {
    name: name ? name : findUser.name,
    email: email ? email : findUser.email,
    password: password ? await hash(password, 10) : findUser.password,
  });

  const updatedUser = await userRepository.findOneBy({
    id,
  });

  return updatedUser!;
};
