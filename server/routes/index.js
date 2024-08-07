import { Router } from "express";
import musicRouter from "./music.routes.js"


const appRouter = Router();

appRouter.use('/api/music', musicRouter)

export default appRouter