import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";

const client = new MongoClient();
client.connectWithUri(<string>Deno.env.get('MONGODB_URI'));
export const dbClient = client.database(<string>Deno.env.get('MONGODB_DATABASE'));;
