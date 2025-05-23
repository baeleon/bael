import {bot} from "../bot.ts"
import {axiod, env} from "../deps.ts";
// token for ai
const ai_token = env.get("AI_TOKEN") as string


bot.on("message", async ctx => {

    async function ai(prompt:string){
        await axiod.post("https://openrouter.ai/api/v1/chat/completions",
            {
                model: "deepseek/deepseek-r1:free",
                messages: [
                    {
                        role: "user",
                        content: prompt
                    }
                ]
            },
            {
                headers: {
                    'Authorization': `Bearer ${ai_token}`,
                    'Content-Type': "application/json"
                }
            }
        )
            .then(res => {
                for(const item of res.data.choices) {
                    const content = item.message.content
                    ctx.reply(content)
                }
            })
            .catch(err => console.log(err))
    }


    const clear_message = ctx.message?.text?.slice(4) as string
    await ai(clear_message)
})