import { getQuery } from 'https://deno.land/x/oak/helpers.ts';
import { find, findOne, insert } from "../models/plant.ts";

export const findAction = async (ctx: any) => {
  const data = await find();
  ctx.response.headers.set("Content-Type", "application/json");
  ctx.response.body = JSON.stringify(data);
}

export const findOneAction = async (ctx: any) => {
  const requestParams = getQuery(ctx, { mergeParams: true });
  const data = await findOne(requestParams.id);
  ctx.response.headers.set("Content-Type", "application/json");
  ctx.response.body = JSON.stringify(data);
}

export const insertAction = async (ctx: any) => {
  const plant = await ctx.request.body();
  const data = await insert(plant.value);
  console.log(plant.value);
}