import { Request, Response, NextFunction } from "express";

export default function validarCamposUsuario(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { nome, email, senha, senha2 } = req.body;

  if (senha !== senha2) {
    return res.status(401).json({
      success: false,
      message: "Passwords don't match",
    });
  } else {
    if (!nome || !email || !senha) {
      return res.status(400).json({
        success: false,
        message: "Required fields not filled",
      });
    }
  }

  next();
}
