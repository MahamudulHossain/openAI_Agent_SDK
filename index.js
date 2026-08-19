import { Agent, OpenAIProvider, run, tool } from "@openai/agents";
import { z } from "zod";
import 'dotenv/config';

const geminiProvider = new OpenAIProvider({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
    useResponses: false,
});

const weatherOutputSchema = z.object({
    location: z.string().describe("The location of the weather data."),
    temp_C: z.number().describe("The temperature in Celsius.")
});

const historyFunFactTool = tool({
    name: "history_fun_fact",
    description: "Use this tool to get a fun fact about ancient life.",
    parameters: z.object({}),
    async run() {
        return "Ancient giant dragonflies called Meganeura had wingspans of up to 2.5 feet!";
    },
});

const weatherTool = tool({
    name: "get_weather",
    description: "Get the current weather for a specified city.",
    parameters: z.object({
        city: z.string(),
    }),
    async execute({ city }) {
        const response = await fetch(
            `https://wttr.in/${encodeURIComponent(city)}?format=j1`
        );

        if (!response.ok) {
            throw new Error(`Weather API failed: ${response.status}`);
        }

        const data = await response.json();

        const current = data.current_condition[0];
        return JSON.stringify({
            location: city,
            temp_C: current.temp_C,
            // humidity: current.humidity,
        });
    },
});

const agent = new Agent({
    name: "Gemini Agent",
    instructions: "You are a helpful assistant.",
    model: await geminiProvider.getModel("gemini-3.1-flash-lite"),
    tools: [historyFunFactTool, weatherTool],
    outputType: weatherOutputSchema,
});

const result = await run(
    agent,
    "Tell me the current weather in Dhaka.",
);

console.log(result.finalOutput);