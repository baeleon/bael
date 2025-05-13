import { bot } from "../bot.ts"
import {Context} from "../deps.ts"

bot.command("start", async (ctx: Context) => {
    await ctx.reply(`Hi [${ctx}](tg://user?id=${ctx.from?.id})`, {parse_mode: "Markdown"})
})

