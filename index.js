import { Agent, OpenAIProvider, run } from "@openai/agents";
import 'dotenv/config';

const geminiProvider = new OpenAIProvider({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
    useResponses: false,
});

const agent = new Agent({
    name: "Gemini Agent",
    instructions: "You are a helpful assistant.",
    model: await geminiProvider.getModel("gemini-3.6-flash"),
});

const result = await run(
    agent,
    "Explain dependency injection in simple terms."
);

console.log(result.finalOutput);