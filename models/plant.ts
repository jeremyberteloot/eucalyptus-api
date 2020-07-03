import { dbClient } from "../utils/database.ts";

const collection = dbClient.collection("plants");

interface Plant {
  _id: { $oid: string };
  name: string;
  place: string;
  description: string;
  pictures: Array<string>;
  wateringFrequency: number;
}

export const find = async (): Promise<void>  => {
  const data = await collection.find() || [];
  return data;
};

export const findOne = async (id: string): Promise<void> => {
  const data = await collection.findOne(id)
  return data;
};

export const insert = async (item: any): Promise<void> => {
  await collection.insertOne(item);
};

export const update = async () => {};

export const destroy = async () => {};
