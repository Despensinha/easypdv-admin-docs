/**
 * OpenAI provider implementation.
 * Stub — full implementation in Task 2.
 *
 * @param {{ apiKey: string, model: string }} config
 * @returns {import('./ai-provider.mjs').AIProvider}
 */
export function createOpenAIProvider({ apiKey, model }) {
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is required');
  }

  return {
    async updatePage() { throw new Error('Not implemented'); },
    async createPage() { throw new Error('Not implemented'); },
    async summarizeChanges() { throw new Error('Not implemented'); },
  };
}
