import { bot } from "../bot.ts"

bot.command("start", ctx => {
    ctx.reply("welcome")
})