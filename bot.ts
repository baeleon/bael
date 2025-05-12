import { Bot, env } from "./deps.ts";
const token = env.get("TOKEN") as string


export const bot = new Bot(token);
bot.start();