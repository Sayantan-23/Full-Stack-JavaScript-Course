import express, { request } from "express";
import { body } from "express-validator";
import favoriteController from "../controllers/favorite.controller.js";
import userController from "../controllers/user.controller.js";
import requestHandler from "../handlers/request.handler.js";
import userModel from "../models/user.model.js";
import tokenMiddleware from "../middlewares/token.middleware.js";

const router = express.Router();

router.post(
  "/signup",
  body("username")
    .exists()
    .withMessage("username is required")
    .isLength({ min: 8 })
    .withMessage("Username must have minimum 8 characters")
    .custom(async (value) => {
      const user = await userModel.findOne({ username: value });

      if (user) return Promise.reject("Username already exists");
    }),
  body("password")
    .exists()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("Password must have minimum 8 characters"),
  body("confirmPassword")
    .exists()
    .withMessage("Confirm password is required")
    .isLength({ min: 8 })
    .withMessage("Password must have minimum 8 characters")
    .custom((value, { req }) => {
      if (value !== req.body.password)
        throw new Error("Password does not match");
      return true;
    }),
  body("displayName")
    .exists()
    .withMessage("Display name password is required")
    .isLength({ min: 8 })
    .withMessage("displayName must have minimum 8 characters"),

  requestHandler.validate,
  userController.signup
);

router.post(
  "/signin",
  body("username")
    .exists()
    .withMessage("username is required")
    .isLength({ min: 8 })
    .withMessage("Username must have minimum 8 characters"),
  body("password")
    .exists()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("Password must have minimum 8 characters"),

  requestHandler.validate,
  userController.signin
);

router.put(
  "/update-password",
  tokenMiddleware.auth,
  body("password")
    .exists()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("Password must have minimum 8 characters"),

  body("newPassword")
    .exists()
    .withMessage("New password is required")
    .isLength({ min: 8 })
    .withMessage("New password must have minimum 8 characters"),

  body("confirmPassword")
    .exists()
    .withMessage("Confirm Password is required")
    .isLength({ min: 8 })
    .withMessage("Confirm Password must have minimum 8 characters")
    .custom((value, { req }) => {
      if (value !== req.body.newPassword)
        throw new Error("Password does not match");
      return true;
    }),

  requestHandler.validate,
  userController.updatePassword
);

router.get("/info", tokenMiddleware.auth, userController.getInfo);

router.get(
  "/favorites",
  tokenMiddleware.auth,
  favoriteController.getFavoriteOfUser
);

router.post(
  "/favorites",
  tokenMiddleware.auth,
  body("mediaType")
    .exists()
    .withMessage("media Type is required")
    .custom((type) => ["movie", "tv"].includes(type))
    .withMessage("media type invalid"),
  body("mediaId")
    .exists()
    .withMessage("mediaId Password is required")
    .isLength({ min: 1 })
    .withMessage("mediaId can not be empty"),
  body("mediaTitle").exists().withMessage("media title is required"),
  body("mediaPoster").exists().withMessage("media poster is required"),
  body("mediaRate").exists().withMessage("media rate is required"),
  requestHandler.validate,
  favoriteController.addFavorite
);

router.delete(
  "/favorites/favoritesId",
  tokenMiddleware.auth,
  favoriteController.removeFavorite
);

export default router;
