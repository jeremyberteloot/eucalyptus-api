import { Application } from "https://deno.land/x/oak/mod.ts";
import "https://deno.land/x/dotenv/load.ts";
import { errorHandlerMiddleware } from "https://raw.githubusercontent.com/halvardssm/oak-middleware-error-logger/master/mod.ts";
import { Snelm } from "https://deno.land/x/snelm/mod.ts";
import { organ } from "https://raw.githubusercontent.com/denjucks/organ/master/mod.ts";
import router from "./router.ts";

const app = new Application();

// Security middleware
const snelm = new Snelm("oak");
app.use(async (ctx, next) => {
  ctx.response = snelm.snelm(ctx.request, ctx.response);
  await next();
});

// Logger middleware
app.use(organ());

// Error handling middleware
app.use(errorHandlerMiddleware<any>({
  fallback: (err, ctx) => {
    throw new Error(err as string);
  },
}));

// Router middleware
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8001 });