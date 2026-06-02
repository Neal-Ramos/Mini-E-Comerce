// types/express.d.ts
declare namespace Express {
  interface Request {
    user?: import("./UserTokenPayload.ts").UserTokenPayload
  }
}