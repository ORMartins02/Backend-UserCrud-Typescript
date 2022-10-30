import { Request, Response } from "express";
import { listUserServices } from "../services/listUser.services";
import { instanceToPlain } from "class-transformer";

export const listUserController = async (req: Request, res: Response) => {
  const users = await listUserServices();

  return res.status(200).json(instanceToPlain(users));
};
