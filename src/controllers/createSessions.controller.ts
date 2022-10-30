import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/users.interfaces";
import { createSessionsService } from "../services/createSessions.services";

export const createSessionsController = async (req: Request, res: Response) => {
  const sessionData: IUserLogin = req.body;

  const token = await createSessionsService(sessionData);

  return res.status(200).json({ token });
};
