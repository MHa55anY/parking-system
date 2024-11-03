import type { Response } from "express";

abstract class BaseController {
  protected sendSuccess(res: Response, data: any, message: string = "Success") {
    res.status(200).json({
      status: "success",
      message,
      data,
    });
  }

  protected sendError(res: Response, error: any, statusCode: number = 500) {
    res.status(statusCode).json({
      status: "error",
      message: typeof error === "string" ? error : error.message,
      ...(process.env.NODE_ENV === "development" && {
        errorStack: error.stack,
      }),
    });
  }
}

export default BaseController;
