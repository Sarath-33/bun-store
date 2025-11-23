import type { Request, Response } from "express";
const errorHandler = (err:Error, req: Request, res:Response, next: any) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
  next()
};

export default errorHandler;