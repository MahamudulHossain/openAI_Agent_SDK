# OpenAI Agent SDK

The OpenAI Agent SDK is a JavaScript/TypeScript library that enables developers to create, configure, and run AI agents using OpenAI's language models. This SDK provides a simple, declarative interface for building conversational AI applications with support for tool usage, memory management, and advanced agent capabilities.

## Overview

The OpenAI Agent SDK abstracts the complexity of working with OpenAI's APIs, providing a clean, object-oriented interface for:

- Creating intelligent agents with custom instructions
- Configuring multiple LLM providers (OpenAI, Anthropic, Google Gemini, etc.)
- Managing agent state and memory
- Implementing tool-calling capabilities
- Streaming responses for real-time applications
- Monitoring and debugging agent interactions


## Core Concepts

### 1. Agent

The `Agent` class represents an AI assistant with:
- **Name**: A unique identifier for the agent
- **Instructions**: System prompt that defines the agent's behavior and personality
- **Model**: The LLM model to use for generating responses
- **Tools**: Optional set of functions the agent can call
- **Memory**: Persistent state across conversations

### 2. Provider

Providers manage connections to different LLM services:
- **OpenAIProvider**: Connects to OpenAI's API
- **AnthropicProvider**: Connects to Anthropic's API
- **Custom providers**: Extend for other LLM services

### 3. Run Function

The `run` function executes an agent with a given input:
- Handles the entire conversation flow
- Manages tool calls and responses
- Returns structured results with metadata


## Running the Example

This repository includes a basic example. To run it:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up your API key in a `.env` file:
   ```env
   GEMINI_API_KEY=your-gemini-api-key-here
   ```

3. Run the example:
   ```bash
   npm run dev
   ```


## Version Support

- **Node.js**: 18+
- **Browser**: Modern browsers with ES modules support
- **TypeScript**: 5.0+

## License

ISC

## Changelog

- **v1.0.0**: Initial release

## Support

For issues and questions, please:
- Check the documentation
- Review existing issues
- Create a new issue if needed