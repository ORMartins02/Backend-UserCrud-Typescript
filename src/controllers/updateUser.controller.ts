import { Request, Response } from "express";
import { updateUserService } from "../services/updateUser.services";
import { instanceToPlain } from "class-transformer";
import { IUserRequestUpdate } from "../interfaces/users.interfaces";

export const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user: IUserRequestUpdate = req.body;

  const updatedUser = await updateUserService(user, id);

  return res.status(200).json(instanceToPlain(updatedUser));
};
