import { Router } from "https://deno.land/x/oak/mod.ts";
import { findAction, findOneAction, insertAction } from "./controllers/plant.ts";

const router = new Router();
router
  .get("/", (ctx) => {
    console.log('-- Eucalyptus API --');
    ctx.response.headers.set("Content-Type", "application/json");
    ctx.response.body = { "message": "Welcome on Eucalyptus API"};
  })
  .get("/plants", async (ctx) => await findAction(ctx))
  .get("/plant/:id", async (ctx) => await findOneAction(ctx))
  .post("/plant", async (ctx) => await insertAction(ctx))
  .put("/plant/:id", (ctx) => {})
  .delete("/plant/:id", (ctx) => {});

export default router;
