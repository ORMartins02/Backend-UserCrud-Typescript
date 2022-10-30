import { Router } from "express";
import { createUserController } from "../controllers/createUser.controller";
import { deleteUserController } from "../controllers/deleteUser.controller";
import { listUserController } from "../controllers/listUser.controller";
import { updateUserController } from "../controllers/updateUser.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureBodyVerifyMiddleware } from "../middlewares/ensureBodyVerify.middleware";
import { ensureIsAdmMiddleware } from "../middlewares/ensureIsAdm.middleware";
import { ensureIsAdmToUpdateMiddleware } from "../middlewares/ensureIsAdmToUpdate.middleware";

export const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  listUserController
);
userRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureBodyVerifyMiddleware,
  ensureIsAdmToUpdateMiddleware,
  updateUserController
);
userRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  deleteUserController
);
